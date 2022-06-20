// DRAWINGS ROUTE:
//-----------------------------------------------------------------------------
const router = require("express").Router();

//---------------------------------------------------------------------------
// -this route is called by the save function in canvas app (map.js)
// -receives the axios post request from the canvas client side and takes
//  the data it is given and turns it from an array of objects into a JSON string
//  and sends that to the elephantSQL DB via an INSERT querry.
// -if the insert is successfull we send the same data (via res.send) back to the client side
//  and the client side uses that info to clear the latLong state which removes the points from
//  the screen

module.exports = (db) => {
  //POST drawings ---------------------------------------------------------------------
  router.post("/", (req, res) => {
    const drawingsData = JSON.stringify(req.body.latLong);
    const name = req.body.name;
    return db
      .query(
        `
          INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
          VALUES (1, $1, $2, false) RETURNING *;`,
        [name, drawingsData]
      )
      .then((response) => {
        //console.log("res ===>", response.rows[0].drawing_points);
        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  //--------------------------------------------------------------------------------------
  // DELETE DRAWING BY ID:
  router.delete("/:id", (req, res) => {
    //console.log("delete request made", req.params.id);
    const id = req.params.id;

    return db
      .query(`DELETE FROM drawings WHERE id = ${id};`)

      .then((response) => {
        //console.log(" delete response from server===>", response.rows);
        return res.send(response);
      })
      .catch((err) => console.log(err.message));
  });

  //------------
  return router;
};
