var PostCollection = require('./models/post').PostCollection;
var Post = require('./models/post').Post;
var $ = require('jquery');
var Backbone = require('backbone');

var postList = new PostCollection();

// var newPost = new Post({ title: 'Hello There!', author: 'Kirby' });
// newPost.save();



$('.post-title').append('<br/><button class="start btn">Get Posts</button>');

$('.start').on('click', function(event){
  event.preventDefault();
  $('.start').html('Loading ...');
  $(this).prop('disabled', true);

  postList.fetch();
});

postList.on('sync', function(){
  $('.start').prop('disabled', false);
  $('.start').html('Submit');
});

postList.on('add', function(post){
  var $deleteButton = $('<button class="btn btn-danger">Delete Post</button>');
  var $newPost = $('<h1><a href="#">'+ post.get('title') +'<br />'+ '<h4>' + 'By: ' + post.get('author') + '</h4>' + '</a></h1><br />');
  $('.posts').append($newPost).append($deleteButton);
  $deleteButton.on('click', function(event){
    event.preventDefault();
    post.destroy();
    $newPost.hide();
    $deleteButton.hide();
  });
});




$('.post-form').append('New Post Title: <input type="text" name="title"><br />');
$('.post-form').append('New Post Author: <input type="text" name="author"><br />');
$('.post-form').append('<input class="submit-button" type="submit" value="Submit">');

$('.submit-button').on('click', function(event){
  var imputTitle = $('input[name="title"]').val();
  var imputAuthor = $('input[name="author"]').val();
  event.preventDefault();
  var newPost = new Post({ title: imputTitle, author: imputAuthor });
  newPost.save();
});



















// var starwarsShip = new ShipCollection();
//
//
// starwarsShip.fetch().done(function(){
//   console.log('done');
// })
//
// starwarsShip.on('add', function(model){
//   $('.app').append(model.get('name'));
// })
//
// module.exports = {
//   'StarShip': StarShip,
//   'ShipCollection': ShipCollection
// }


//
// var starwarsCharacters = new CharacterCollection();
// var charOne;
// var charTwo;
//
// var startGameView = {
//   clear: function(){
//
//   },
//   render: function(collection){
//     $('.app').append('<select name="js-first-character" id="js-first-character" /><select name="js-second-character" id="js-second-character" />');
//
//     collection.each(function(character){
//       $('#js-first-character').append('<option value="" ' + character.cid + '">' + character.get('name') + '</option>');
//       $('#js-second-character').append('<option value="" ' + character.cid + '">' + character.get('name') + '</option>');
//
//     });
//     $('.app').append('<button class="start btn btn-success">Start</button>');
//
//
//     $('.start').on('click', characterListView.render);
//   }
// };
//
//
// var characterListView = {
//   clear: function(){
//
//   },
//   render: function(){
//     charOne = starwarsCharacters.find(function(model){
//       return model.cid == $('#js-first-character').val();
//     });
//     charTwo = starwarsCharacters.find(function(model){
//       return model.cid == $('#js-second-character').val();
//     });
//
//     $('.app').append('<button class="start btn btn-success">Start</button>');
//     $('.start').hide();
//
//     $('.characters').append('<div class="col-md-6">' + charOne.get('name') + '</div>');
//       $('.characters').append('<div class="col-md-6">' + charTwo.get('name') + '</div>');
//
//
//   }
// };
//
// starwarsCharacters.fetch().done(function(){
//   console.log("fetch complete");
//   console.log(starwarsCharacters);
//
//   startGameView.render(starwarsCharacters);
// });
