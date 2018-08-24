// node liri.js spotify-this-song '<song name here>'
// ------------------------------------
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from


// var Spotify = require('node-spotify-api');
// var getMeSpotify = function(songName) {
//     var spotify = new Spotify({
//         id: 'd81777d305cd41728d7130366f31785c',
//         secret: 'd9f7b5b9c6cd4f21b41899ef839c1bf3'
//       });
       
//       spotify.search({ type: 'artist', query: songName }, function(err, data) {
        
//           if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 
      
    //   var songs = data.tracks.items;
    //   var data = [];
      
    //   for (i=0;i<songs.length;i++){
    //       data.push({
    //           "artist(s)":songs[i].artists.map(getArtistNames)
    //       });
    //       console.log("artist(s)" + songs[i].artists.map(getArtistNames));
    //     }
    //   console.log(data);
//     });
// };
 


// module.exports = spotify;


//------------------------------------------------------------
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//          id: 'd81777d305cd41728d7130366f31785c',
//          secret: 'd9f7b5b9c6cd4f21b41899ef839c1bf3'
// });

// var incomingData;
 



// spotify.search({ type: 'track', query: 'fart' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// //console.log(  data.tracks.items[0]  ); 

// incomingData = data.tracks.items[0] ;
// console.log(incomingData)
// });


// module.exports = {
//     incomingData
// }


//------------------------------------------------
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
         id: 'd81777d305cd41728d7130366f31785c',
         secret: 'd9f7b5b9c6cd4f21b41899ef839c1bf3'
});


function spotifySong(song){
    spotify.search({ type: 'track', query:'red lights'}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var songData = data.tracks.items[i];
          //artist
          console.log("Artist: " + songData.artists[0].name);
          //song name
          console.log("Song: " + songData.name);
          //spotify preview link
          console.log("Preview URL: " + songData.preview_url);
          //album name
          console.log("Album: " + songData.album.name);
          console.log("-----------------------");
          
          //adds text to log.txt
          fs.appendFile('log.txt', songData.artists[0].name);
          fs.appendFile('log.txt', songData.name);
          fs.appendFile('log.txt', songData.preview_url);
          fs.appendFile('log.txt', songData.album.name);
          fs.appendFile('log.txt', "-----------------------");
        }
      } else{
        console.log('Error occurred.');
      }
    });
  }