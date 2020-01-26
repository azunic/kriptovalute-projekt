const express = require("express");
const morgan =  require("morgan");
const port = 8080;

const app = express();
app.use(morgan("dev"));


app.listen(port, function(){
    console.log(`Kripto projekt pokrenut na portu ${port}!`);
});


