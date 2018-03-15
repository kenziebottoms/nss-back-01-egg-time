"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(__dirname+"/public"));

router.get("/:path", (req, res, next) => {
    res.sendFile(`${__dirname}/public/${req.params.path}.html`);
});

module.exports = router;