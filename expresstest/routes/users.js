var express = require('express');

var router = express.Router();
router.get('/', function(request, response){
    response.render('users');
});

module.exports = router;