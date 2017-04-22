var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/whoami", function (req, res) {
    res.json({"IP Address": req.ip});
});



app.listen(port);
