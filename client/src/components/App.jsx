import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    // return 67 + this.state.value;
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.props.addsomeshit(Number(this.state.value)));
    
    // this.props.pics.push({Url: this.state.value})
    // alert(this.props.pics.length);
    // event.preventDefault();
    if(this.state.value === this.props.pics[0].trick){
      alert('you got it bro');
    } else {
      alert('not the correct trick');
    }
    // alert(this.props.pics[0].trick);
    event.preventDefault();
  }

  render() {
    return (
      
        
        <form onSubmit={this.handleSubmit}>
          <label>
             What trick do you think this is?
            <input
              className="formy"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        <input type="submit" value="Submit" />
        <img className="pic" src={this.props.pics[0].Url} />
        </form>
      
    )
  }
}

export default App;