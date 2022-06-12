// DRAWINGS ROUTE:
const router = require("express").Router();

//---------------------------------------------------------------------------
// POST ROUTE (connected to save function in canvas app)
// -receives the axios post request from the saveDrawing func on the canvas client side
// -it takes the data it is given and turns it from an array fo objects into JSON string
//  and sends that to the elephantSQL DB via an INSERT
// -if the insert is successfull we send the same data (via res.send) back to the client side
//  and the client side uses that info to clear the latLong state

module.exports = (db) => {
  //POST drawings
  router.post("/", (req, res) => {
    const drawingsData = JSON.stringify(req.body);

    return db
      .query(
        `
          INSERT INTO drawings (users_id, drawing_name, drawing_points, is_showcase)
          VALUES (1,'test1','${drawingsData}',false) RETURNING *;
        `
      )
      .then((response) => {
        console.log("res ===>", response.rows[0].drawing_points);
        return res.send(response.rows);
      })
      .catch((err) => console.log(err.message));
  });

  //GET User drawings

  //GET Showcase

  return router;
};
