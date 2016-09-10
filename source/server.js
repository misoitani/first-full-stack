var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));

// Have Express serve up our static files instead of Brackets Live Preview. Yay!
app.use(express.static("../public"));

// Routes \\
app.use("/api/class", require("./routes/classRoutes"));

mongoose.connect("mongodb://localhost/beirut-class", function() {
    console.log("Database is connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});
