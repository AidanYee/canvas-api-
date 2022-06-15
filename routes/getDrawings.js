// GET LIBRARY DRAWINGS ROUTE:
//-----------------------------------------------------------------------------
const router = require("express").Router();

//---------------------------------------------------------------------------
// *** REVIEW THESE NOTES AS A GROUP ***

// -this route is called by the getDrawingsForUser func in canvas app (DropDownMenu.jsx)
// -it requests from the db all the drawings for a given user
// -canvas app uses this data to populate the drawing library for logged in user

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
        // console.log("res ===>", response.rows);
        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  return router;
};
