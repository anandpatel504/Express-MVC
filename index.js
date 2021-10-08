const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/users");

// require("./Databases/db");
app.use(express.json());
app.use("/", router);

const Port = process.env.db_port || 2021;
app.listen(Port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${Port}`);
});
