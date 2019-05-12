import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'

class App extends Component {

  constructor(props){
      super(props)

      console.log("in the constructior")

      this.state = {
          name: "Bhargav Bachina",
          age: 15,
          address: "2222 some street somecity ST, 77777",
          showPerson: true
      }
  }

  togglePerson() {
     this.setState({showPerson: !this.state.showPerson});
  }

  changeAddress(e) {
     this.setState({address: e.target.value});
  }

  // only called once before render()
  componentWillMount() {
      console.log("This is called before component instance and before render() function")
      if(this.state.age === 15) {
         console.log("I am 15!!!")
      }
      this.setState({name:"I am changed in componentWillMount"})
  }

  // only called once before render()
  componentDidMount() {
    console.log("This is called after render() function")
    if(this.state.age === 15) {
       console.log("I am 15!!!")
    }
    this.setState({name:"I am changed again!!"})
}

  render() {

    const name = this.state.name?this.state.name.toUpperCase():'';

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div> 
            <p>{name}</p>
            <a href="#" onClick={() => this.togglePerson()}>toggle address</a>
            <div>
            <label>Change address</label>
            <input id="sff" type="text" onChange={(e) => this.changeAddress(e)}></input>
            </div>
            {this.state.showPerson?<Person address={this.state.address} />:""}
        </div>
      </div>
    );
  }
}

export default App;
