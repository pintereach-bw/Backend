const express   = require("express");
const bcrypt    = require("bcryptjs");
const jwt       = require("jsonwebtoken"); // needs Header, Payload, & Signature
const secrets   = require("../config/secret");

// Model
const Users = require("../models/users-model");

const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  console.log(username , password)
  if (!username || !password) {
    res
      .status(401)
      .json({ message: "please enter a valid username and password" });
  } else {
    // password gets re-hashed 2 ^ 8 times : Larger the number logster it takes
    const hash = bcrypt.hashSync(password, 8);
    password = hash;
    try {
      const newUsers = await Users.add({ username, password });
      if (newUsers) {
        const token = generateToken(newUsers)
        res.status(201).json({newUsers, token});
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "please enter a valid username and password" });
    }
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome ${user.username}!`,
        token
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim
    username: user.username
  };

  const options = {
    expiresIn: "11d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
