import mysql from 'mysql';

var db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
db.connect();

// Get all rectangles in db
export function getRectangles() {
  let query = 'SELECT * FROM Rectangles;';
  db.query(query, function(err, result) {
    if (err) res.status(400).send(err);
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