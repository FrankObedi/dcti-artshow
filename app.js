const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/exhibition", function (req, res) {
    res.sendFile(`${__dirname}/exhibition.html`);

})

app.listen(3000, function () {
    console.log("Example app listening on port 3000");
})







