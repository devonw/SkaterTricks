import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      score: 0,
      randomNum: Math.floor(Math.random() * this.props.pics.length),
      usedSkaters: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    // return 67 + this.state.value;
  }

  handleSubmit(event) {
    this.state.usedSkaters[this.props.pics[this.state.randomNum].skater] = true;
    if(Object.keys(this.state.usedSkaters).length === this.props.pics.length - 1) {
      this.setState({score: 0}, function(){
        alert('game over. no more skater boys to show');
      
        this.setState({usedSkaters: {}})
        console.log(this.state.score)
      });
      
    } else {
       var randomNum = Math.floor(Math.random() * this.props.pics.length);
       while(this.state.usedSkaters[this.props.pics[randomNum].skater]){
         randomNum = Math.floor(Math.random() * this.props.pics.length);
       }
    }
    // this.state.usedSkaters[this.props.pics[this.state.randomNum].skater] = true;
    
    
    if(this.state.value === this.props.pics[this.state.randomNum].trick){
      alert('you got it skaterboi/woman');
      console.log(Object.keys(this.state.usedSkaters).length);
      this.setState({randomNum: randomNum || 0, value: '', score: this.state.score + 1})
    } else {
      this.props.getData();
      alert('not the correct trick');
    }
    
    event.preventDefault();
  }

  

  render() {
    var style = {
      width: 700,
      height: 500
    };
    return (
      
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
             <h1>What trick do you think this is Sk8er Boi/Gurl?</h1>
             <h2>Your answer:</h2>
            <input
              className="formy"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        <input type="submit" value="Submit" />
        
        
        <p> Score: {this.state.score} </p>
        <img className="pic" src={this.props.pics[this.state.randomNum].Url} style={style}/>
        </form>
        <div>
        <form action="/skaters" method="POST">
        
          <h2>Submit a trick of your own</h2>
          Url:
          <input type="text" name="Url"/>
          Trick:
          <input type="text" name="trick"/>
          Skater:
          <input type="text" name="Skater"/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
         
        </div>
        
      
    )
  }
}

export default App;