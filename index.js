const express = require('express');
const bodyParser = require('body-parser');
const post = require('./routes/post.route');
const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/post', post);


app.listen(port, () =>{
  console.log('Heloo, server is running');
})