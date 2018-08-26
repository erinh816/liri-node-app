require("dotenv").config();
var tumblr = require('tumblr.js');
var spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

//require keys
var keys = require('./keys.js');
var spotify = new spotify(keys.spotify);
var client = new tumblr.Client(keys.tumblr);

//command line
var typed = process.argv;
var command = process.argv[2];
var liricommand = "";
//attaches multiple word arguments
for (var i=3; i<typed.length; i++){
  if(i>3 && i<typed.length){
    liricommand = liricommand + "+" + typed[i];
  } else{
    liricommand = liricommand + typed[i];
  }
}

//---------------------------------------------------------------
//switch case
switch(command){
    case "tumblr-quote":
     tumblurPost();
    break;
  
    case "spotify-this-song":
      if(liricommand){
        spotifySong(liricommand);
      } else{
        spotifySong("Strobe");
      }
    break;
  
    case "movie-this":
      if(liricommand){
        omdb(liricommand);
      } else{
        omdb("Virgin Suiside")
      }
    break;
  
    case "do-what-it-says":
      otherwise();
    break;
  
    default:
      console.log("{Please enter a command: tumblr-quote, spotify-this-song, movie-this, do-what-it-says}");
    break;
  }

//tumblr function
// Make the request to print 10 latest posts from a quote account deeplifequotes
function tumblurPost(){
 client.blogPosts('deeplifequotes', function(err, resp) {
    for (i=0; i<10;i++){
    var divider = "------------------------------";
    var post = "Quote:" + resp.posts[i].text + "\n" + divider;
    // var posts = [];
    // posts.push(post);
    console.log(post); 
   };
  });
};

  //spotify function
  function spotifySong(song){
    spotify.search({ type: 'track', query:song, limit: 5}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var songdata = data.tracks.items[i];
          //artist
          console.log("Artist: " + songdata.artists[0].name);
          //song name
          console.log("Song: " + songdata.name);
          //spotify preview link
          console.log("Preview URL: " + songdata.preview_url);
          //album name
          console.log("Album: " + songdata.album.name);
          console.log("-----------------------");
          
          //adds text to log.txt
          fs.appendFile('log.txt', songdata.artists[0].name);
          fs.appendFile('log.txt', songdata.name);
          fs.appendFile('log.txt', songdata.preview_url);
          fs.appendFile('log.txt', songdata.album.name);
          fs.appendFile('log.txt', "-----------------------");
        }
      } else{
        console.log('Error occurred.');
      }
    });
  }
  //omdb function
  function omdb(movie){
    var divider = "\n------------------------------------------------------------\n\n";
   
        var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        request(URL, function(err, response, body){

            var jsonData = JSON.parse(body);

            var movieData = [
                "Movie:"+ jsonData.Title + "\n" +
                "Year:" + jsonData.Year + "\n" +
                "IMDB Rating:" + jsonData.imdbRating + "\n" +
             //    "Rotten Tomatoes Rating:" + jsonData.Title + "\n" +
                "Country:" + jsonData.Country + "\n" +
                "Language:" + jsonData.Language + "\n" +
                "Plot:" + jsonData.Plot + "\n" +
                "Actors:" + jsonData.Actors + "\n"
            ]

            fs.appendFile("log.txt", movieData + divider, function(err){
                if (err) throw err;
                console.log(movieData);
            });
        });
    };


  //do nothing function
  function otherwise(){
    fs.readFile('random.txt', "utf8", function(error, data){
      var txt = data.split(',');
  
      spotifySong(txt[1]);
    });
  }



