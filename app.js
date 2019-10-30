const express = require("express");
const app = express();
const faker = require("faker");
app.engine("html", require("ejs").renderFile); // show the html
app.use(express.static("public")); // access img, css, js

app.get("/", function(req, res){
    var catImage = faker.image.cats();
    var fakeName = faker.fake("{{name.firstName}} {{name.lastName}} {{name.suffix}}");
    res.render("index.ejs", {"image": catImage,
                             "text": fakeName
    }); // faker used here.
});

app.get("/hll", function(req, res){
    res.render("hll.ejs");
});

app.get("/assembly", function(req, res){
    res.render("assembly.ejs");
});

app.get("/machinecode", function(req, res){
    res.render("machinecode.ejs");
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("EXPRESS RUNNING.");
})