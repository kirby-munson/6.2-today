var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({
   idAttribute:"_id",
   urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/post',
  initialize: function() {
    console.log('a new post is born');
  }
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/post'
});


module.exports = {
  'Post': Post,
  'PostCollection': PostCollection
};
