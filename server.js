// load .env data into process.env, allows us to use env files
require("dotenv").config();

// -allows us to make requests. CORS allows the server to explicitly whitelist certain origin and help to bypass the same-origin policy
const cors = require("cors");

// Web server config
const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

// -morgan is the server listner, allows us to receives server based errors (dev tool)
const morgan = require("morgan");

// this brings in our elephant sql file, so that we can make the DB connection
require("./elephantsql");

// -this calls/ fires up morgan. Logger middleware will generate a detailed log using what is called the default format.
app.use(morgan("dev"));

app.use(express.json({ extended: true }));

app.use(cors());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.post("/", (req, res) => {
  console.log("post request", req);
});
app.get("/", (req, res) => {
  res.json({message: "hello world"});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
