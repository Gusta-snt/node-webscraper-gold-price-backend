const PORT = process.env.PORT || 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("This is my webscraper");
}); //get data

app.get("/ouro", (req, res) => {
  const url = "https://www.melhorcambio.com/ouro-hoje";

  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const inputStr = $(".holder-valor input", html).last().val();
      const input = parseFloat(inputStr.replace(",", "."));
      res.json({ cotacao: input });
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
