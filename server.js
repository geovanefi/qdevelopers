const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use('/public', express.static('views/public'));

app.get("/", function(req, res) {
    res.render("pages/index");
});


app.listen(8080);

console.log("listening on http://localhost:8080");