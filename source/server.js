var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8080;


//app.get("/", function (req, res) {
//    res.send("yeeeey");
//});

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(express.static("../public"));

app.use("/api/ccrooms", require("./routes/classRoutes"));

mongoose.connect("mongodb://localhost/ccrooms", function () {
    console.log("Connected to the database!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});

app.listen(port, function () {
    console.log("Your server is running on port" + port)
});