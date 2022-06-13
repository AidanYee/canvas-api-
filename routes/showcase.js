// SHOWCASE ROUTE:
const router = require("express").Router();

//---------------------------------------------------------------------------

module.exports = (db) => {
  router.get("/", (req, res) => {
    const showcaseDrawings = JSON.stringify(res.body);

    return db
      .query(
        `
          SELECT * FROM drawings WHERE is_showcase = TRUE;
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
