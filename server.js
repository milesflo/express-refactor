var http = require('http');
var express = require('express');
var app = express();
// var routes = require('./routes.js');
var PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

song = {
  verse1: 'This is the song that never ends',
  verse2: 'Yea some people started it not knowing what it was',
  verse3: 'And they\'ll continue singing it because',
}

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/song/edit', function(req, res) {
  res.render('pages/edit');
});

app.get('/song/update', function(req, res) {
  if (req.query.verse1 !== undefined) {
    song.verse1 = req.query.verse1;
    song.verse2 = req.query.verse2;
    song.verse3 = req.query.verse3;
  }
  res.redirect('/');
})

app.get('/song/1', function(req, res) {
  res.render('pages/song', {
    pageInfo: song.verse1,
    nextPage: 'song/2',
  });
});

app.get('song/2', function(req, res) {
  res.render('pages/song', {
    pageInfo: song.verse2,
    nextPage: 'song/3',
  });
});

app.get('song/3', function(req, res) {
  res.render('pages/song', {
    pageInfo: song.verse3,
    nextPage: 'song/1',
  });
});

var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
