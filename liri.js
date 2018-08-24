require("dotenv").config();
var tumblr = require('tumblr.js');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

var keys = require('./keys.js');

var command = process.argv;
var search = command[2];

var liricommand = "";

for (i=2; i<command.length; i++){
    if(i>2 &&  command.length){
        liricommand +=command[i] + '';
    }
}



