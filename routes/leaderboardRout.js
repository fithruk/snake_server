const { Router } = require("express");
const userSchema = require("../models/userModel");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/leaderboard", async (req, res) => {
  const allResults = await userSchema.find();
  res.json(allResults);
});

router.post("/", async (req, res) => {
  const { name, score } = req.body;
  console.log(name, score);
  const newUser = new userSchema({ name, score });
  await newUser.save();
  res.send("good");
});

module.exports = router;
