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

  //hàm lấy text từ comp Seach để tìm kiếm. Truyền hàm này vào comp Search qua props và comp Seach sẽ nhận được hàm này. Bên Search lấy được text và truyền DL nhận được vào hàm này gửi trả App
  getTextToSearch=(value)=>{
    console.log("du lieu nhan duoc: ",value)
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar getValue={(val)=>this.getTextToSearch(val)}/>
        <Table data={this.state.data}/>
      </div>
    );
  }
}
