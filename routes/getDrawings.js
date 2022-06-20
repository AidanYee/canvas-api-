// GET LIBRARY DRAWINGS ROUTE:
//-----------------------------------------------------------------------------
const router = require("express").Router();

//---------------------------------------------------------------------------
// -this route is called by the getDrawingsForUser func in canvas app (DropDownMenu.jsx)
// -it requests from the db all the drawings for a given user
// -canvas app uses this data to populate the drawing library for logged in user

module.exports = (db) => {
  router.post("/", (req, res) => {
    const id = req.body.id;
    return db
      .query(
        `
          SELECT * FROM drawings WHERE users_id = $1;`,
        [id]
      )

      .then((response) => {
        //console.log("res get drawings ===>", response.rows);
        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  return router;
};
