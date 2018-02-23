'use strict'
var utils = {}

var utils.host = function (ip) {
  if (ip === '127.0.0.1') return 'localhost'
  else return ip
}

var utils.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('back')
  }
}

module.exports = utils