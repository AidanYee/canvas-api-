// NOTE! - in our ideal world all routes are set up like below but we were unable to pull it off
// so reverted to just hardcoding the post request in server.js like our opriginal mentor call
// get request

// const router = require("express").Router();

// //--------------------------------------------------------------------------------------
// module.exports = (db) => {
//   router.put("/", (request, response) => {
//     const { latLong } = request.body.latLong;

//     console.log(latLong);
//     //const { latLong } = request.body;

//     db.query()
//       //   `
//       //   INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
//       //   VALUES (1,
//       //     'test1',
//       //     '[{"lat":49.28961493072596,"lng":-123.12961302318206},{"lat":49.28813155090352,"lng":-123.13214530454306},{"lat":49.286452199127915,"lng":-123.1296988632282},{"lat":49.28808915876987,"lng":-123.1269757109957},{"lat":49.28723707069605,"lng":-123.12523467551559},{"lat":49.285333766499,"lng":-123.12789571694579}]',
//       //      TRUE)
//       // `,
//       //
//       // )

//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//   });

//   return router;
// };
