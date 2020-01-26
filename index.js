const express = require("express");
const morgan =  require("morgan");
const port = 8080;

const app = express();
app.use(morgan("dev"));

app.get("/projekt", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Kripto projekt pokrenut na portu ${port}!`);
});
