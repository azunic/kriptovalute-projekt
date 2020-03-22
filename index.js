const express = require('express');
const expressLayouts = require("express-ejs-layouts");
//const sequelize = require("sequelize");
const morgan = require("morgan");
const path = require('path');
const router = require("./app/routes");
const port = 8080;

const app = express();
app.use(express.static(__dirname + "/public")); //tell express where to look for our static files
app.use(morgan("dev"));                         //log every request to the console
app.set("view engine", "ejs");                  //set ejs as our templating engine
app.set('views', path.join(__dirname, '/app/views'))
app.use(expressLayouts);
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router(app);

app.listen(port, function () {
  console.log(`Crypto project app listening on port ${port}!`);
});