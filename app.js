const express = require('express')
const path = require('path');
const mongoose = require("mongoose")
const user = require("./src/lib/user");
const { async } = require('regenerator-runtime');
const app = express()
const port = 3000
require('dotenv').config();


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// app.set("view engine", "ejs");

const connectMongo = async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION)
    console.log("connected")
  } catch (error) {
    
  }

}
connectMongo()


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});



app.post("/postuser", async (req, res)=>{
  const {username, password} = req.body
  const newUser = new user({
    name : username,
    password : password
  })
  // console.log(newUser);
  await newUser.save();
  res.sendFile(path.join(__dirname, "public/index.html"))
});

let loggedInUser
app.get("/login/user", async (req, res)=>{
  const {username, password} =req.query
  console.log(username)
  try {
    const getU = await user.findOne({name : username, password : password}).exec()
    
    console.log(getU)
    res.send(getU)
    // console.log(getUserFromMongoDB)
    // res.json(getUserFromMongoDB)
    // loggedInUser = getUserFromMongoDB
  } catch (error) {
    console.log(error)
  }
})

// app.get("/getuser", async (req, res)=>{
//   const {username, password} =req.query
//   try {
//     const getUserFromMongoDB = await user.findOne({name : username, password : password}).exec()
//     // console.log(getUserFromMongoDB)
//     res.json(getUserFromMongoDB)
//     loggedInUser = getUserFromMongoDB
//   } catch (error) {
//     console.log(error)
//   }
// })

