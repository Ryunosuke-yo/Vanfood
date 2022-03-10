const express = require('express')
const path = require('path');
const mongoose = require("mongoose")
const user = require("./public/js/user")
const app = express()
const port = 3000
require('dotenv').config();

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const connectMongo = async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION)
    console.log("connected")
  } catch (error) {
    
  }

}
connectMongo()




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/postuser", async (req, res)=>{
  const {username, password} = req.body
  const newUser = new user({
    name : username,
    password : password
  })
  console.log(newUser)
  await newUser.save()
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})