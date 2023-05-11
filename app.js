const express = require("express");
const app = express();
const userRouter = require("./Routers/userRouter");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// CORS Policy
app.use(cors());

// JSON
app.use(express.json());

app.use("/api/user", userRouter);

module.exports = app;
