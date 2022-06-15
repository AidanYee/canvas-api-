// GET SHARE/LINK DRAWINGS ROUTE:
//---------------------------------------------------------------------------
const router = require("express").Router();

//---------------------------------------------------------------------------
// -this route is called by the getDrawingLink func in canvas app (DropDownMenu.jsx)
// -it requests from the db a specific drawing based of drawings.id (PK)
// -canvas uses this to populate the shareable unique html links
//  in the drawing library for a given logged in user
module.exports = (db) => {
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM drawings WHERE id = $1;`, [req.params.id])

      .then((data) => {
        //const users = data.rows;
        res.send(data.rows[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return router;
};
