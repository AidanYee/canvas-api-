// SHOWCASE ROUTE:
//---------------------------------------------------------------------------
const router = require("express").Router();

//---------------------------------------------------------------------------
// -this route is called by the getShowcaseDrawings func in canvas (Showcase.jsx)
// -it gets all the showcase drawings from the drawings table and uses the data
//  to populate the showcase drawing card on the app

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
