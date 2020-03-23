const express = require('express');
const Router = express.Router;
const post_controller = require('../controllers/post.controller');

Router.post('/create', post_controller.create);

module.exports = Router;