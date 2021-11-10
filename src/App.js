import "./App.css";
import React, { Component } from "react";
import Me from "./Me.jpg";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("I am the constructor");
  }

  state = {
    Person: {
      fullName: "Name:    Safouene Najjar",
      bio: "Bio:   born May 2,1990, Sousse, Tunisia, reliant and ambitious Mecatronics Engineer sepcialised in Mobile Systems and Robotics",
      imgSrc: (
        <img
          style={{ height: "220px", width: "220px" }}
          img
          src={Me}
          alt="logo"
        />
      ),
      profession: "Profession: Web Developer",
    },
    show: true,
    count: 0,
  };
  componentDidMount() {
    var intervalId = setInterval(() => {
      this.setState(() => {
        return {
          count: this.state.count + 1,
        };
      });
    }, 1000);
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
    this.setState(() => {
      return { count: 0 };
    });
  };

  render() {
    console.log("I am the render");
    return (
      <div className="App">
        <p>The component has been rendered for {this.state.count} seconds</p>
        <button onClick={this.handleClick}>Show Me</button>
        {this.state.show ? (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h>{this.state.Person.imgSrc}</h>
            <h3>{this.state.Person.bio}</h3>
            <h2>{this.state.Person.profession}</h2>
          </div>
        ) : null}
      </div>
    );
  }
}
