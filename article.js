const express = require("express")
const router = express.Router();
port = 3000
router.get("/", (req, res) => {
    res.send("hello world")
})
router.get("/about", (req, res) => {
    res.send("hello guys")
})

module.exports = router