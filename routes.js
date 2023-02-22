const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    res.render("pages/index");
})

routes.get("/log", (req, res) => {
    res.render("pages/log");
})

module.exports = routes;