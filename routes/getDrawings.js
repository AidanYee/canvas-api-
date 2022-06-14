// GET LIBRARY DRAWINGS ROUTE:
const router = require("express").Router();

//---------------------------------------------------------------------------

module.exports = (db) => {
  router.get("/", (req, res) => {
    const libraryDrawings = JSON.stringify(res.body);

    return db
      .query(
        `
          SELECT * FROM drawings WHERE users_id = 1;
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
