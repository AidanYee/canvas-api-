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
  router.post("/:id", (req, res) => {

    const drawing_points = JSON.stringify(req.body.latLong);
    const drawing_name = req.body.name;
    const user_id = req.params.id

    return db
      .query(
        `
          INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
          VALUES ($1, $2, $3, false) RETURNING *;`, [user_id, drawing_name, drawing_points]
      )
      .then((response) => {

        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  //--------------------------------------------------------------------------------------
  // DELETE DRAWING BY ID:
  router.delete("/:id", (req, res) => {

    const id = req.params.id;

    return db
      .query(`DELETE FROM drawings WHERE id = ${id};`)

      .then((response) => {
        
        return res.send(response);
      })
      .catch((err) => console.log(err.message));
  });

  //------------
  return router;
};
