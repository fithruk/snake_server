const PORT = process.env.PORT || 5000;
const keys = require("./keys/keys.dev");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const leaderboardRouter = require("./routes/leaderboardRout");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

app.use("/", leaderboardRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
});

const start = async () => {
  try {
    await mongoose.connect(keys.MONGO_DB_KEY);
  } catch (error) {
    console.log(error.message);
  }
};

start();
