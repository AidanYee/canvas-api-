// NOTE! - in our ideal world all routes are set up like below but we were unable to pull it off
// so reverted to just hardcoding the post request in server.js like our opriginal mentor call
// get request
// const db = require('./elephantsql.js')
// const router = require("express").Router();

//--------------------------------------------------------------------------------------
// router.post("/", (req, res) => {
//   const poop = JSON.stringify(req.body);
//   console.log("Points to be saved", poop);

//   return db.query(
//     `
//           INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
//           VALUES (1,
//             'test1',
//             '${poop}',
//              TRUE)
//         `
//   )
//     .then((res) => {
//       console.log("no error from server about query")
//       console.log("res ===>", res);
//       return res;
// //
//     })
//     .catch(err => console.log(err.message))
// });

// module.exports = router;

