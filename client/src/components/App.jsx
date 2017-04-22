import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      score: 0,
      randomNum: Math.floor(Math.random() * this.props.pics.length)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    // return 67 + this.state.value;
  }

  handleSubmit(event) {
    
    if(this.state.value === this.props.pics[this.state.randomNum].trick){
      alert('you got it skaterboi/woman');
      this.setState({randomNum: Math.floor(Math.random() * this.props.pics.length), value: '', score: this.state.score + 1})
    } else {
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
        <div> Score: {this.state.score} </div>
        <img className="pic" src={this.props.pics[this.state.randomNum].Url} style={style}/>
        </form>
      
    )
  }
}

export default App;