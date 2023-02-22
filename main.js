const express = require("express");
const app = express();
const ejs = require("ejs");
const routes = require("./routes");

app.use(express.static("public"));
app.set("views", "./public");
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(1010, () => { console.log("Port 1010 ouvert"); })