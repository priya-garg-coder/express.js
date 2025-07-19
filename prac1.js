// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send("hello guys")
//   console.log("hello world")
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.static("public"))

// app.get("/",(req,res)=>{
//     console.log("hello world");
//     res.send("hello");
// }).put("/ok",(req,res)=>{
//   console.log("hello world")
//   res.sendFile("public/prac.html",{root:__dirname}) //serving html file
    
// }).post("/",(req,res)=>{
//     console.log("hello");
//     res.send("hello word");
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require("express")
// const article = require("./routes/article")
// app.use("/article",article);

// let port = 3000
// app = express()
// app.use(express.static("public"))

const express = require("express");
const hello = require("./routes/hello");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/hello", hello);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
