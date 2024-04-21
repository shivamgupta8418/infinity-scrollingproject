const express = require("express");
const { connection } = require("./Config/db");
const { UserModel } = require("./models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authentiction } = require("./Middleware/authentication");
require("dotenv").config();
const cors = require("cors");
const { PostsModel } = require("./Models/postsModel");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const isUser = await UserModel.findOne({ email });
    if (isUser) {
      res.status(200).send({ msg: "User Already Exists", success: false });
    } else {
      bcrypt.hash(password, 4, async function (err, hash) {
        if (err) {
          res.status(500).send({ msg: err.message, success: false });
        } else {
          const new_user = new UserModel({
            name,
            email,
            password: hash,
          });
          try {
            await new_user.save();
            res.status(200).send({ msg: "Sign Up Successfull", success: true });
          } catch {
            res
              .status(500)
              .send({ msg: "Internal Server Error", success: false });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const hashed_password = user.password;
    const user_id = user._id;
    const token = jwt.sign({ user_id }, process.env.SECRET_KEY);
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (err)
        res.send({
          msg: "Something went Wrong Please Try Later",
          success: false,
        });
      if (result) {
        res
          .status(200)
          .send({ msg: "Login Successful", token: token, success: true });
      } else {
        res.status(401).send({ msg: "Wrong Password", success: false });
      }
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", success: false });
  }
});

app.get("/posts", authentiction, async (req, res) => {
  try {
    const { limit = 5, page = 1 } = req.query;
    const parsedLimit = parseInt(limit);
    const parsedPage = parseInt(page);
    if (isNaN(parsedLimit) || isNaN(parsedPage)) {
      return res
        .status(400)
        .send({ success: false, msg: "Invalid limit or page number" });
    }

    const data = await PostsModel.find()
      .limit(parsedLimit)
      .skip(parsedLimit * (parsedPage - 1));
    res.status(200).send({ success: true,data:data});
  } catch (error) {
    res.status(500).send({ success: false, msg: "Internal Server Error" });
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB Connected Successfully");
  } catch {
    console.log("Error in connecting DB");
  }
  console.log("Server Started Succesfully");
});
