import React, { Component } from 'react';
import search from './search';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      target: null,
      data: [ 89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,
              45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,
              85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,
              38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,
              42,51,54,84,34,53,78,40,14,5 ],
      result: null,
      error: null,
    };

    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleLinearSearch = this.handleLinearSearch.bind(this);
    this.handleBinarySearch = this.handleBinarySearch.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.state.data.sort((a,b) => a-b)});
  }

  handleTargetChange(ev) {

    const num = Number.parseInt(ev.target.value, 10);
    if (Number.isNaN(num)) {
      return this.setState({ result: null, error: 'Target is not a number' });
    }

    this.setState({
      target: num,
      result: null,
      error: null,
    });
  }

  handleLinearSearch() {

    const result = search.linearSearch(this.state.target, this.state.data);

    this.setState({ result });
  }

  handleBinarySearch() {

    const result = search.binarySearch(this.state.target, this.state.data);

    this.setState({ result });
  }

  render() {
    return (
      <div className="App">

      <div>
        <label htmlFor="target">Search Target</label>
        <input id="target" name="target" type="text" onChange={this.handleTargetChange}></input>
      </div>

      <div>
        <button id="linear-search" onClick={this.handleLinearSearch}>Linear Search</button>
        <button id="binary-search" onClick={this.handleBinarySearch}>Binary Search</button>
      </div>

        <div id="error">{this.state.error}</div>
        <div id="result">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
