// SERVER FILE:
//------------------------------------------------------------------------------
// load .env data into process.env, allows us to use env files
require("dotenv").config();

const db = require("./elephantsql.js");
// -allows us to make requests. CORS allows the server to explicitly whitelist certain origin and help to bypass the same-origin policy
const cors = require("cors");

// Web server config
const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

// -morgan is the server listner, allows us to receives server based errors (dev tool)
const morgan = require("morgan");

// -this calls/ fires up morgan. Logger middleware will generate a detailed log using what is called the default format.
app.use(morgan("dev"));

app.use(express.json({ extended: true }));

app.use(cors());

//--------------------------------------------------------------------------------
// CONNECTS TO SEPERATED ROUTE IN ROUTES FOLDER
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes(db));

const drawingsRoutes = require("./routes/drawings");
app.use("/drawings", drawingsRoutes(db));

const showcaseDrawings = require("./routes/showcase");
app.use("/showcase", showcaseDrawings(db));

//--------------------------------------------------------------------------------
// FIRST SUCCESSFULL ROUTE:
// -built with mentor, and proven successful
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

//------------------------------------------------------------------------------
// 404 ERROR HANDLING:
// - this route is incase someone tries to get to a route that doesn't exist it send them a 404 error
app.get("*", (req, res) => {
  res.redirect(404, "/");
});

//------------------------------------------------------------------------------
// - It specifies the port on which we want our app to listen
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//------------------------------------------------------------------------------
// -We established the connection to express by attaching it to a var named app here is server.js
//  we export that var so other can use the connection
module.exports = app;


