var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    var usersCollection = req.db.get('User');
    usersCollection.find({}, {}, function(err, docs) {
        console.log(JSON.stringify(docs));
        res.render('users', {userList : docs});
    });
});

router.get('/new', function(req, res) {
    res.render('new');
});

router.post('/add', function(req, res) {
    console.log(JSON.stringify(req.body.user));
    console.log(JSON.stringify(req.query));
    console.log(JSON.stringify(req.params));
    // urlencoded {extended : true}
    // the above option makes sure the hierarchy is constructed from form 
    // elements based on their names.
    req.db.get('User').insert(req.body.user, function(err, doc) {
        if (err) {
            res.send("Error occurred in writing to users collection." + err);
        }
        else {
            res.location('/users');
            res.redirect('/users');
        }
    });
});

router.post('remove', function(req, res) {
    
});


module.exports = router;
