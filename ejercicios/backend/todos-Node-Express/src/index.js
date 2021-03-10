const express = require("express");
const app = express();
const { SERVER_PORT } = require('./constants/index')
const appRouter = require("./routes");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", appRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening in http://localhost:${SERVER_PORT}`);
});
