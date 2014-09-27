var config = require('./etc/config');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

// second argument to twitter strategy is "verify callback"
passport.use(new TwitterStrategy({
    consumerKey : config["twitter-consumer-key"],
    consumerSecret : config["twitter-consumer-secret"],
    callbackURL : config["twitter-callback"]
}, function(token, tokenSecret, profile, done) {
        // Here any user assocition with app DB can be done.
        var user = profile;
        console.log("user obtained : " + (user ? user.username : 'N/A'));
        done(null, user);
}));

passport.serializeUser(function(user, done) {
    console.log("serializing user...");
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    console.log("deserializing obj...");
    done(null, obj);
});

module.exports = passport;