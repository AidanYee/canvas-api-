/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/login", (req, res) => {

    //const user = req;
    console.log("post route", req.body);
    db.query(`SELECT * FROM users WHERE id = 1;`)
      .then(data => {
        const user = data.rows;
        console.log("server response for user", user);
        res.send({ user });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  return router;
};
