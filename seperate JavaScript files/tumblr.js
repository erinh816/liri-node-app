// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: '***',
  consumer_secret: '***',
  token: '***',
  token_secret: '***'
});

//creat a new array for 5 posts
var posts = [];

// Make the request to print 5 latest posts
function tumblurPost(){
client.blogPosts('deeplifequotes', function(err, resp) {
    for (i=0; i<5;i++){
    var post = "Quote:" + resp.posts[i].text + "\n";
    posts.push(post);
  };
  console.log(posts); 
});
};



module.exports = Tumblr;
