"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.argv[2] || process.env.PORT;
const eggRouter = require("./eggRouter");

app.use("/time", (req, res, next) => {
    res.status(200);
    res.end(new Date().toString());
});

app.use("/", eggRouter);

app.use("/:path", (req, res, next) => {
    if (req.params.path) {
        let err = new Error("This is not a valid page.");
        next(err);
    } else {
        res.status(200);
        res.end("Hello world");
    }
});

app.use((err, req, res, next) => {
    if (err) {
        res.status = 500;
        res.end("Booooo");
    }
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});