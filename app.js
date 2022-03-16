const express = require('express')
const path = require('path');
const mongoose = require("mongoose")
const user = require("./src/lib/user")
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



// app.get('/', (req, res) => {
//   // res.sendFile(path.join(__dirname, "public/index.html"))
//   res.render("index.html");
// });

app.post("/postuser", async (req, res)=>{
  const {username, password} = req.body
  const newUser = new user({
    name : username,
    password : password
  })
  console.log(newUser);
  await newUser.save();
  res.sendFile(path.join(__dirname, "public/index.html"))
});

// app.get('/search', (req,res) => {
//   const searchText = req.query.searchText;
//   const localArea = req.query.localArea;
  
//   const meal = req.query.meal;
//   const hamper = req.query.hamper;
  
//   const delivery = req.query.delivery;
//   const wheelchair = req.query.wheelchair;
//   console.log(searchText);
//   console.log(meal);
//   // const services = document.querySelector(".services-section>.container");
//   // const searchTextHTML = document.createElement("p");
//   // const searchTextHTMLText = document.createTextNode(`${searchText}`);
//   // searchTextHTML.appendChild(searchTextHTMLText);
//   res.render('index2', {searchTextHTML:searchText});
// });
