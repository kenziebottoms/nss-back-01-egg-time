"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.use(express.static(__dirname+"/public"));

router.get("/:path", (req, res, next) => {
    fs.stat(`public/${req.params.path}.html`, (err, file) => {
        if (err == null) {
            // file exists
            res.sendFile(`${__dirname}/public/${req.params.path}.html`);
        } else {
            next();
        }
    });
});

router.get("/*egg*", (req, res, next) => {
    res.send("EGGS");
    fs.readFile('egg.txt', (err, data) => {
        if (err) throw err;
        console.log(`You found the easter egg at ${new Date()}!!!\n${data.toString()}`);
    });
});

module.exports = router;