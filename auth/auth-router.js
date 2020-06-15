const bcryptjs = require("bcryptjs");

const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (credentials.username && credentials.password && typeof credentials.password === "string") {

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, 10);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then(user => {
        res.status(201).json({ data: user });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username && password && typeof password === "string") {
    Users.findBy({ username: username })

      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: "hey wow it worked",
            token
          });
        } else {
          res.status(401).json({ message: "try again" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn : "2h"
  }
  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
