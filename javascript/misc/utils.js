'use strict'
var utils = {
  host:
  function (ip) {
    if (ip === '127.0.0.1') return 'localhost'
    else return ip
  },

  isLoggedIn:
  function(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('back')
    }
  },

  funcTimer:
  function(boolReturn, callback) {  
    var t0 = new Date().getTime();
    if (!boolReturn){
      callback();
      var t1 = new Date().getTime();
    } else {
      var fromFuncReturn = callback();
      var t1 = new Date().getTime();
    }
    console.log( "Function took " + (t1 - t0) + " milliseconds." );
    return fromFuncReturn;
  }
}

module.exports = utils
