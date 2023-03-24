const express = require("express");
const cors = require('cors');

const logRoutes = require('./middleware/logger')
const diaryRouter = require("./Routers/diary")
const userRouter = require('./Routers/user')

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes)

app.use("/diaries", diaryRouter);
app.use("/users", userRouter);

module.exports = app;