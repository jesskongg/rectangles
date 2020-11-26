// import uuid from 'uuid';
import express from 'express';
import { getRectangles, putRectangles, deleteRectangles, postRectangles } from './database.js';

var router = express.Router();

// Get all rectangles
router.get('/', function(req, res, next) {
  console.log("GETTING RECTANGLES");
  console.log("REQ", req);
  res.send(getRectangles());
});

// Change attributes of any of the rectangles
router.put('/update', function(req, res, next) {
  putRectangles(req.body.columnName, req.body.value, req.body.id);
});

// Delete existing rectangles -- PUT?
router.put('/delete', function(req, res, next) {
  deleteRectangles(id)
  res.send(200);
});

// Add new rectangles
router.post('/add', function(req, res, next) {
  postRectangles(
    req.body.id,
    req.body.width,
    req.body.height,
    req.body.color,
    req.body.radius,
    req.body.opacity,
    req.body.cursorType
  );
  res.send(200);
});

export default router;