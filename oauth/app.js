var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var passport = require('./mypassport');

/*
 * /account                will show account info
 * /login                  show twitter login link
 * /                       will be home page once logged in.
 * /auth/twitter           twitter authentication
 * /auth/twitter/callback
 */
var app = express();

app.use(cookieParser());
app.use(session({ secret : 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', ensureLoggedIn('/login'), function(req, res) {
    res.send("Hello World.<br>Get Account Details <a href='/account'>here</a>");
});

app.get('/account', ensureLoggedIn('/login'), function(req, res) {
    console.log("Account Details : %j", req.user);
    console.log('req.user.photos : ' + req.user.photos);
    console.log('req.user.photos.length : ' + req.user.photos.length);
    console.log('req.user.photos && req.user.photos.length : ' + req.user.photos && req.user.photos.length);

    // TODO : configure route
    var imagesrc = (req.user.photos && req.user.photos.length) ? req.user.photos[0]["value"] : null;
    console.log('image : ' + imagesrc);
    res.send("Welcome to your account page Mr. " + req.user.displayName + (imagesrc ? "<br><img src='" + imagesrc + "'>" : ""));
});

// TODO : replace the below with a router config
app.get('/login', function(req, res) {
    res.send("<html><body><a href='/auth/twitter'>Sign in with Twitter</a></body></html>");
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successReturnToOrRedirect : '/',
    failureRedirect : '/login'
}));

module.exports = app;