var request = require ("request");
var fs = require ("fs");

var omdb = function(){
    var divider = "\n------------------------------------------------------------\n\n";
    this.findMovie = function(movie){
        var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        request(URL, function(err, response, body){
            console.log(response);

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
};

module.exports = Movie;
 