/* eslint-disable */

const Post = require('../models/post.js');
const User = require('../../models/user.js');

posts = document.querySelectorAll('.post')

posts.forEach((post) => {
  author_containers = post.querySelectorAll('.author_container')
  
  author_containers.forEach((author_container) => {

    Post.findOne({_id: post.id}, (err, post) => {
      if(err) {
        throw err;
      }
      console.log(post)
    })


  })

})

