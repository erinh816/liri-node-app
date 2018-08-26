// this is what you came for ------------------------------------------------
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
         id: '***',
         secret: '***'
});



function spotifySong(){
    spotify.search({ type: 'track', query:song, limit: 5}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var song = data.tracks.items[i];
          //artist
          console.log("Artist: " + song.artists[0].name);
          //song name
          console.log("Song: " + song.name);
          //spotify preview link
          console.log("Preview URL: " + song.preview_url);
          //album name
          console.log("Album: " + song.album.name);
          console.log("-----------------------");
          
          //adds text to log.txt
          fs.appendFile('log.txt', song.artists[0].name);
          fs.appendFile('log.txt', song.name);
          fs.appendFile('log.txt', song.preview_url);
          fs.appendFile('log.txt', song.album.name);
          fs.appendFile('log.txt', "-----------------------");
        }
      } else{
        console.log('Error occurred.');
      }
    });
  }

spotifySong();