//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


let items = [];
let workItems =[];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

   let day = date.getDate();

    res.render("lists", {listTitle: day, newListItem: items});

});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    if(req.body.lists === "work"){
        workItems.push(item)
        items.push(item)
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    console.log(items);
});

app.get("/work", (req, res) => {
    res.render("lists", {listTitle: "work list", newListItem: workItems});
});

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
    console.log(item)
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000");
});