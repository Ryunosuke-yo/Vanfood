const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const user = require("./src/lib/user");
const { async } = require("regenerator-runtime");
const { default: axios } = require("axios");
const program = require("./src/lib/program");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.set("view engine", "ejs");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("connected");
  } catch (error) {}
};
connectMongo();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get("/programs", async (req, res) => {
  await program.deleteMany({}).catch((error) => console.log(error));
  axios
    .get(
      "https://opendata.vancouver.ca/api/records/1.0/download/?dataset=free-and-low-cost-food-programs&format=json"
    )
    .then(async (result) => {
      result.data.forEach(async (element, number) => {
        const newProgram = new program({
          recordid: element.recordid,
          fields: element.fields,
        });
        await newProgram.save();
      });
    })
    .catch((error) => console.log(error));
  res.send("success");
});

app.post("/postuser", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new user({
    name: username,
    password: password,
  });
  // console.log(newUser);
  await newUser.save();
  res.sendFile(path.join(__dirname, "public/index.html"));
});

let loggedInUser;
app.get("/login/user", async (req, res) => {
  const { username, password } = req.query;
  console.log(username);
  try {
    const getU = await user
      .findOne({ name: username, password: password })
      .exec();

    console.log(getU);
    res.send(getU);
    // console.log(getUserFromMongoDB)
    // res.json(getUserFromMongoDB)
    // loggedInUser = getUserFromMongoDB
  } catch (error) {
    console.log(error);
  }
});

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

app.get("/locations", (req,res)=>{
  let locationSet = new Set();
  let location = [];
  program.find({}, { fields: { local_areas: 1 }}).then(result=>{
    // console.log(result);
    result.forEach(element => {
      // console.log(element.fields.local_areas);
      locationSet.add(element.fields.local_areas);
      // console.log(location);
    });
    // console.log(location);
    // location = [...locationSet];
    locationSet.forEach((x)=>{
     if(x){
       location.push(x);
     }});
    res.send({location:location});
  }).catch(error=>console.log(error));
// console.log(location);

 
})
