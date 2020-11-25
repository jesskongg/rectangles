var express = require('express');
var mysql = require('mysql');
var path = require('path');
const uuid = require('uuid');

var router = express.Router();

var db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
db.connect();


router.get('/', function(req, res, next) {

});

// Ability to add new rectangles
router.post('/', function(req, res, next) {
  // model query to add entry to rectangle table
});

// Ability to delete existing rectangles -- PUT?

// Ability to change attributes of any of the rectangles
router.put('/', function(req, res, next) {
  // model query to change specific attribute
});

// Ability to display (draw) all rectangles in database
router.get('/', function(req, res, next) {
  // model query to get all rectangles
})
