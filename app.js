require("dotenv").config();
const movieRoutes = require("./routes/movies/moviesRoutes");
const db = require("./db/index.js");
const express = require("express");

const app = new express();
const port=process.env.PORT || 8000;
db();
app.use(express.json());
app.use("/movies",movieRoutes);

app.listen(port, () => {
    console.log(`Express app listening  at http://localhost:${port}`);
});