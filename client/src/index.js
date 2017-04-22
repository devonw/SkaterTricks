import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var add = function(number){
  return number + 45;
}

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

ReactDOM.render(<App addsomeshit={add} pics={sampleData}/>, document.getElementById('app'))

