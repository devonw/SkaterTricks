import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';



var sampleData = [
  
{
    Url: 'http://a.espncdn.com/photo/2012/0214/as_skate_willner1_576.jpg',
    trick: '360 Flip',
    skater: 'Kenny Reed'
}




]



var getPics = function(){
  $.get('http://localhost:1337/skaters', function(data){
    data.forEach(function(item){
      sampleData.push(item);
    })
  })
}


getPics();
console.log(sampleData);




ReactDOM.render(<App pics={sampleData} getData={getPics} />, document.getElementById('app'))

