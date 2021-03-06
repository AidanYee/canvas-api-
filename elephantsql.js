// ELEPHANT SQL CONNECTION FILE:
// https://www.elephantsql.com/docs/nodejs.html
//---------------------------------------------------------------------------

require("dotenv").config();

const pg = require("pg");
//or native libpq bindings
//var pg = require('pg').native

const conString = process.env.ELEPHANTSQL_URL; //Can be found in the Details page
const client = new pg.Client(conString);

//----------------------------------------------------------------------------
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  // client.query('SELECT NOW() AS "theTime"', function (err, result) {
  //   if (err) {
  //     return console.error("error running query", err);
  //   }
  //   console.log(result.rows[0].theTime);
  console.log("db connected");
  // >> output: 2018-08-23T14:02:57.117Z
  // client.end();
  // });
});

module.exports = client;
