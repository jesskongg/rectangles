// import uuid from 'uuid';
import express from 'express';
import { getRectangles, putRectangles, deleteRectangles, postRectangles } from './database.js';

var router = express.Router();

// Get all rectangles
router.get('/', function(req, res, next) {
  console.log("GETTING RECTANGLES");
  getRectangles();
});

// Change attributes of any of the rectangles
router.put('/update', function(req, res, next) {
  // model query to change specific attribute
});

// Delete existing rectangles -- PUT?
router.put('/delete', function(req, res, next) {

});

// Add new rectangles
router.post('/add', function(req, res, next) {
  // model query to add entry to rectangle table
});

module.exports = router;