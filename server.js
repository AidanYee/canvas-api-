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

//const drawings = require("./routes/drawings");

// this brings in our elephant sql file, so that we can make the DB connection
const db = require("./elephantsql");

// -this calls/ fires up morgan. Logger middleware will generate a detailed log using what is called the default format.
app.use(morgan("dev"));

app.use(express.json({ extended: true }));

app.use(cors());

//-----------------------------------------------------
// CONNECTS TO SEPERATED ROUTE IN ROUTES FOLDER
// const drawingsRoutes = require("./routes/drawings");

// app.use("/drawings", drawingsRoutes(db));

// app.use("./drawings", function (req, res, next) {
//   res.send("Hello World");
// });

//-----------------------------------------------------
// ORIGINAL NOTES FROM BASE GIT HUB REPO
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
//-----------------------------------------------------
// FIRST SUCCESSFULL ROUTE:
// -built with mentor, and proven successful
app.get("/", (req, res) => {
  res.json({ message: "hello world poop" });
});

//---------------------------------------------------------------------------
// POST ROUTE (connected to save function in canvas app)
// -this works up until the db insert, then it fails rather agressively

app.post("/", (req, res) => {
  const poop = JSON.stringify(req.body);
  console.log(poop);

  return pg.query(
    `
          INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
          VALUES (1,
            'test1',
            '${poop}',
             TRUE)
        `
  );
  // .catch(err => console.log(err.message))
});

//------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
