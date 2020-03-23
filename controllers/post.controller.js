const Post = require('../models/post.model');

exports.test= function(req, res){
  res.send('aaa');
}

exports.create = function(req, res){
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  })

  post.save( function(err){
    if(err){
      return err;
    }
    res.send(200)
  })

}