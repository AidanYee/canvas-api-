// GET LIBRARY DRAWINGS ROUTE:
const router = require("express").Router();

//---------------------------------------------------------------------------

module.exports = (db) => {
  router.post("/", (req, res) => {

    const id = req.body.id;
    return db
      .query(
        `
          SELECT * FROM drawings WHERE users_id = ${id};
        `
      )
      .then((response) => {
        console.log("res ===>", response.rows);
        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  return router;
};
