require("dotenv").config();
var keys = require('./keys.js')

var MOVIE = require("./omdb");


var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
var tumblr = new Tumblr(keys.tumblr);


var movie = new Movie();

var search = search.argv[2];

var term = process.argv.slice(3).join("");



