var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello World' });
});

router.get('/users', function(req, res) {
  var db = req.db;
  var users = db.get("users");
  users.find({}, {}, function(e, docs) {
    res.render('usersList', {'usersList' : docs});
  });
});

router.get('/newuser', function(req, res) {
  res.render('newuser', {title : "Add User"});
});

router.post('/adduser', function(req, res) {
  req.db.get('users').insert({name : req.body.username, email : req.body.email},
  	function(err, doc) {
        if (err) {
        	res.send("Error occurred in writing to users collection.");
        }
        else {
        	res.location("users");
        	res.redirect("users");
        }
  	});
});
module.exports = router;
