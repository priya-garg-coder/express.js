const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"))

app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("hello");
}).put("/",(req,res)=>{
    res.sendfile("prac",{root:__dirname})
}).post("/",(req,res)=>{
    console.log("hello");
    res.send("hello word");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
