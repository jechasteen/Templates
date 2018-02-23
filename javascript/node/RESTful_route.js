'use strict'
// Template to create a RESTful route, in combination
// with the node express mongoose template.

var express = require('express')
var router = express.Router()

// The mongoose model this route acts on
// var MODEL = require()

// Index Route
router.get('/', function(req, res) {
  res.send("Module Index Route")
})

// NEW Route
router.get('/', function(req, res) {
  res.send("Module New (GET) Route")
})

// CREATE Route
router.post('/', function(req, res) {
  res.redirect('/')
})

// SHOW Route
router.get('/:id', function(req, res) {
  res.send("Module Show Route")
})

// EDIT Route
router.get('/:id/edit', function(req, res) {
  res.send("Module Edit Route")
})

// UPDATE Route
router.put('/:id', function(req, res) {
  res.redirect("/")
})

// DESTROY Route
router.delete('/id', function(req, res) {
  res.redirect("/")
})

module.exports = router