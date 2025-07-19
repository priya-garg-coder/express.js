const express = require("express")
const app = express();
const port = 3000;
app.use(express.static("public"))

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    let logoname = "amazon";
    res.render("index", { logoname: logoname })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})