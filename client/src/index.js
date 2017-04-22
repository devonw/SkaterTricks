import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var add = function(number){
  return number + 3;
}

var sampleData = [{
  Url: 'http://img.wennermedia.com/social/dylan-rieder-skateboarder-dead-92ddb4b8-b1bb-4099-878e-2517a2cc4951.jpg',
  trick: 'Backside Smith Grind',
  skater: 'Dylan Reider'
}]

ReactDOM.render(<App addsomeshit={add} pics={sampleData}/>, document.getElementById('app'))

