// GET LIBRARY DRAWINGS ROUTE:
const router = require("express").Router();

//---------------------------------------------------------------------------

module.exports = (db) => {

  router.get("/:id", (req, res) => {

    const shareDrawing = JSON.stringify(res.body)
    //console.log("get route" ,res.body)

    db.query(`SELECT * FROM drawings WHERE id = $1;`, [req.params.id])
      .then(data => {
        //const users = data.rows;
        res.send(data.rows[0]);
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  return router;
};

