import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import data from './data.json'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:data
    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar/>
        <Table data={this.state.data}/>
      </div>
    );
  }
}
