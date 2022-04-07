const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const user = require("./src/lib/user");
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
      "https://opendata.vancouver.ca/api/records/1.0/download/?dataset=free-and-low-cost-food-programs&facet=program_population_served&format=json"
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
  // res.send("success");
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
app.post("/subscriptions", (req, res) => {
  const username = req.body.username;
  console.log(username);
  user
    .findOne({ name: username }, { subscribed: 1 })
    .then((result) => {
      console.log(`Current Subscriptions of ${username} are ${result}`);
      if (result != null) {
        res.send(result.subscribed);
      } else {
        res.send([]);
      }
    })
    .catch((error) => console.log(error));
  // res.send("failure");
});

app.patch("/subscriptions", (req, res) => {
  const subscriptionID = req.body.subscriptionID;
  const username = req.body.username;
  console.log(subscriptionID);
  console.log(username);
  user
    .findOne({ name: username }, { subscribed: 1 })
    .then((result) => {
      console.log(result.subscribed);
      user
        .updateOne(
          { name: username },
          { subscribed: [...result.subscribed, subscriptionID] }
        )
        .then((result2) => res.send([...result.subscribed, subscriptionID]))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));

  // res.send("success");
});

app.patch("/deleteSubscriptions", (req, res) => {
  const subscriptionID = req.body.subscriptionID;
  const username = req.body.username;
  console.log(subscriptionID);
  console.log(username);
  user
    .findOne({ name: username }, { subscribed: 1 })
    .then((result) => {
      console.log(result.subscribed);
      // const updatedSubscriptions =
      user
        .updateOne(
          { name: username },
          {
            subscribed: result.subscribed.filter((element) => {
              if (element != subscriptionID) {
                return element;
              }
            }),
          }
        )
        .then((result2) => {
          console.log(result2);
          // res.send()
          const updatedSubscriptions = result.subscribed.filter((element) => {
            if (element != subscriptionID) {
              return element;
            }
          });
          res.send(updatedSubscriptions);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));

  // res.send("success");
});

app.get("/locations", (req, res) => {
  let locationSet = new Set();
  let location = [];
  program
    .find({}, { fields: { local_areas: 1 } })
    .then((result) => {
      // console.log(result);
      result.forEach((element) => {
        // console.log(element.fields.local_areas);
        locationSet.add(element.fields.local_areas);
        // console.log(location);
      });
      // console.log(location);
      // location = [...locationSet];
      locationSet.forEach((x) => {
        if (x) {
          location.push(x);
        }
      });
      res.send({ location: location });
    })
    .catch((error) => console.log(error));
  // console.log(location);
});

app.post("/results", (req, res) => {
  const searchOptionsText = req.body;
  let sendResults = [];
  const re = new RegExp(`.*${req.body.searchOptions.searchText}.*`, "i");
  console.log(re);
  // console.log(req.body.searchOptions.searchText);
  program
    .find({})
    .then((result) => {
      // console.log(result);
      result.forEach((element) => {
        // console.log(element.fields["program_name"]);
        // if (re.test(element.fields["program_name"])) {
        //   sendResults.push(element);
        // }

        // if (re.test(element.fields["description"])) {
        //   sendResults.push(element);
        // }

        // Search Text Filter
        if (
          req.body.searchOptions.searchText == "" ||
          re.test(element.fields["description"]) ||
          re.test(element.fields["program_name"])
        ) {
          sendResults.push(element);
        }
      });

      // Location Filter
      sendResults = sendResults.filter((element) => {
        // console.log(req.body.searchOptions.localArea);
        if (req.body.searchOptions.localArea == "All") {
          // console.log("1");
          return element;
        } else if (
          element.fields["local_areas"] == req.body.searchOptions.localArea
        ) {
          // console.log("2");
          return element;
        } else {
          // console.log("3");
        }
      });

      // Meal Filter
      sendResults = sendResults.filter((element) => {
        if (req.body.searchOptions.meal == "false") {
          return element;
        } else if (
          req.body.searchOptions.meal == "true" &&
          element.fields["provides_meals"] == "True"
        ) {
          return element;
        }
      });

      // Hamper Filter
      sendResults = sendResults.filter((element) => {
        if (req.body.searchOptions.hamper == "false") {
          return element;
        } else if (
          req.body.searchOptions.hamper == "true" &&
          element.fields["provides_hampers"] == "True"
        ) {
          return element;
        }
      });

      // Delivery Filter
      sendResults = sendResults.filter((element) => {
        if (req.body.searchOptions.delivery == "false") {
          return element;
        } else if (
          req.body.searchOptions.delivery == "true" &&
          element.fields["delivery_available"] == "Yes"
        ) {
          return element;
        }
      });

      // Wheelchair Filter
      sendResults = sendResults.filter((element) => {
        if (req.body.searchOptions.wheelchair == "false") {
          return element;
        } else if (
          req.body.searchOptions.wheelchair == "true" &&
          element.fields["wheelchair_accessible"] == "Yes"
        ) {
          return element;
        }
      });
      // if (req.body.searchOptions.localArea == sendResults.fields["local_areas"]) {
      //   send
      //   sendResults.push(element);
      // }

      // if (req.body.searchOptions.meal == "true" && element.fields["True"]) {
      //   sendResults.push(element);
      // }

      res.send(sendResults);
    })
    .catch((error) => console.log(error));
});
