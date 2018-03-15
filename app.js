"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.argv[2] || process.env.PORT;


app.use("/time", (req, res, next) => {
    res.status(200);
    res.end(new Date().toString());
});

app.use("/", (req, res, next) => {
    res.status(200);
    res.end("Hello world");
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});