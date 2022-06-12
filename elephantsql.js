// https://www.elephantsql.com/docs/nodejs.html
require("dotenv").config();

const pg = require("pg");
//or native libpq bindings
//var pg = require('pg').native

const conString = process.env.ELEPHANTSQL_URL; //Can be found in the Details page
const client = new pg.Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].theTime);
    console.log("db connected");
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

module.exports = client;

// -Attempted to seperate out the insert from server.js
// -we were hoping to call this insertdrawing func from the server.js when a post was successfull
//
// const insertDrawing = (poop) => {
//   return client.query(
//     `
//           INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
//           VALUES (1,
//             'test1',
//             '${poop}',
//              TRUE)
//         `
//   );
// };

//not sure about this syntax, inspiration came from light airbnb?
//exports.insertDrawing = insertDrawing;
