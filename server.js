const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const consolidate = require("consolidate");


const port = process.env.PORT || 9000;


app.set('view engine', 'handlebars');
app.set('view engine', 'jsx');


app.engine("handlebars", consolidate.handlebars);
app.engine("jsx", consolidate.react);


// Multiple Template Engines



// React Router DOM
// Routing
// Deployment
// Easily able to use both together React and Express handlebars

app.get("/", (req, res) => {
    res.render("Landing.jsx"); // .jsx
});

app.get("/dashboard", (req, res) => {
    res.render("index.handlebars"); // .handlebars
});


app.get("/home", (req, res) => {

    res.render("Home.handlebars");
});

// client = React
// models = Data
// controllers = calculated routes
// views = express handlebars
// server.js



app.listen(port, () => {
    console.log("Server is starting at port 9000");
});