const express = require('express');
const bodyParser = require('body-parser');
const Skaters = require('./model.js');
// var request = require('request');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use('/client', express.static(__dirname + '/client'));

app.listen(1337, function(){
  console.log('listening on port 1337')
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html')
});

app.get('/skaters', function(req, res){
  Skaters.find({}).exec(function(err, skaters){
    res.status(200).send(skaters)
  })
})

app.get('/shit', function(req, res){
  res.json({agame: 'toplay'});
})

app.post('/skaters', function(req, res){
  console.log(req.body);
  Skaters.collection.insert({
   "Url": req.body.Url,
   "trick": req.body.trick,
   "skater": req.body.Skater
  })
   
 
  // new Skater({
  //         Url: req.body.Url,
  //         trick: req.body.trick,
  //         skater: req.body.Skater
  //     }).save(function(err, nick){
  //       if (err) return console.error(err);
  //     });
})

