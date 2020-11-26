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
router.put('/', function(req, res, next) {
  // model query to change specific attribute
});

// Delete existing rectangles -- PUT?
router.put('/delete', function(req, res, next) {

});

// Add new rectangles
router.post('/', function(req, res, next) {
  // model query to add entry to rectangle table
});

export default router;