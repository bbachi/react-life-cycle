import React, { Component } from 'react';
import './App.css';

class Person extends Component {

  constructor(props){
      super(props)

      console.log("In person's constructor")
  }

  componentWillReceiveProps(nextProps) {
      console.log("This is called when we recieve props")
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log("This is called after componentwillreceive props and before componentWillUpdate" +nextProps.address)
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log("This is called after shouldComponentUpdate props and before render" +nextProps.address)
  }

  componentDidUpdate(nextProps, nextState) {
      console.log("This is called after render" +nextProps.address)
  }

  render() {

    console.log("this is from render()")

    return (
      <div className="box">
            <p>Address: {this.props.address}</p>
      </div>
    );
  }
}

export default Person;
