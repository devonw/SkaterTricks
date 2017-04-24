var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/skaters');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var sampleData = [
  {
    Url: 'http://img.wennermedia.com/social/dylan-rieder-skateboarder-dead-92ddb4b8-b1bb-4099-878e-2517a2cc4951.jpg',
    trick: 'Backside Smith Grind',
    skater: 'Dylan Reider'
  },
{
    Url: 'http://a.espncdn.com/photo/2012/0214/as_skate_willner1_576.jpg',
    trick: '360 Flip',
    skater: 'Kenny Reed'
},

{
    Url: 'https://thirty30sprint.files.wordpress.com/2012/11/collin-provost.jpg',
    trick: 'Tucknee',
    skater: 'Collin Provost'
},
{
    Url: 'http://a.espncdn.com/photo/2012/0922/as_skate_Trapasso2_576.jpg',
    trick: 'Switch Kickflip',
    skater: 'Nick Trapasso'
}

]

var skaterSchema = mongoose.Schema({
      Url: String,
      trick: String,
      skater: String
    });

var Skater = mongoose.model('Skater', skaterSchema);

db.once('open', function(){
    
    sampleData.forEach((skater) => {
      
      new Skater({
          Url: skater.Url,
          trick: skater.trick,
          skater: skater.skater
      }).save(function(err, nick){
        if (err) return console.error(err);
      });
    })
   db.close(); 
})

module.exports = Skater