import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/navbar";
import "./App.css";
import MyComponents from "./components/counters20";

class App extends Component {
  state = {
    myCounters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = hittedCounterID => {
    const my_Counters = this.state.myCounters.filter(
      c => c.id !== hittedCounterID
    );
    this.setState({ myCounters: my_Counters });
  };

  handleReset = () => {
    const newSetsOfCounters = this.state.myCounters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ myCounters: newSetsOfCounters });
  };
  handleIncrement = eachCounter => {
    const myCounters = [...this.state.myCounters];
    const index = myCounters.indexOf(eachCounter);
    myCounters[index] = { ...eachCounter };
    myCounters[index].value++;
    this.setState({ myCounters });
  };

  render() {
    return (
      <div>
        <NavBar />
        <main>
          <MyComponents
            list_of_myCounters={this.state.myCounters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
