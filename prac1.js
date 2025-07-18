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
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"))

app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("hello");
})
app.post("/ok",(req,res)=>{
    console.log("hello");
    res.send("hello word");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







