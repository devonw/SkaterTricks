const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/client', express.static(__dirname + '/client'));

app.listen(1337, function(){
  console.log('listening on port 1337')
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html')
});

app.get('/shit', function(req, res){
  res.json({agame: 'toplay'});
})

