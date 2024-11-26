import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://thecocktaildb.com/api/json/v1/1/random.php";

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const result = response.data.drinks[0];
        console.log(result);
        res.render("index.ejs", {data: result});
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});