import mysql from 'mysql';

var db = mysql.createConnection({
  host: 'asn3-4-db',
  user: 'CLIENT',
  password: 'client_CMPT470',
  database: 'cmpt470'
});
db.connect();

// Get all rectangles in db
export function getRectangles() {
  let query = 'SELECT * FROM Rectangles;';
  console.log("Query", query);
  db.query(query, function(err, result) {
    if (err) res.status(400).send(err);
    console.log("DATABASE RESULT", result);
    res.status(200).send(result);
  });
};

// Change attributes of any of the rectangles
export function putRectangles(columnName, value, id) {
  let query = `
    UPDATE Rectangles
    SET ${columnName} = ${value}
    WHERE id = ${id};
  `;
  db.query(query, function(err, result) {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
};

// Delete rectangles
export function deleteRectangles(id) {
  let query = `
    DELETE FROM Rectangles
    WHERE id = ${id};
  `;
  db.query(query, function(err, result) {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
};

// Add rectangles
export function postRectangles(
  id,
  width,
  height,
  color,
  radius,
  opacity,
  cursorType
) {
  let query = `
    INSERT INTO Rectangles(
      id,
      width,
      height,
      color,
      radius,
      opacity,
      cursor_type
    )
    VALUES(${id}, ${width}, ${height}, ${color}, ${radius}, ${opacity}, ${cursorType});
  `;
  db.query(query, function(err, result) {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
};