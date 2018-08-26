# liri-node-app

Created during Week 10 of Rutgers Coding Bootcamp. The challenge was to use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in command through Language vs Speech. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

tumblr-quote

spotify-this-song

movie-this

do-what-it-says

What Each Command Does
node liri.js tumblr-quote
Displays last 10 posts of a quote account on Tumblr 'deeplifequotes'

node liri.js spotify-this-song <song name>

Shows the following information about the song in terminal/bash window.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to *"Strobe" by Deadmau5

node liri.js movie-this <movie name>
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Virgin Suicide"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command
