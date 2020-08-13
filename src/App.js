import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import data from './data.json'
import { v1 as uuidv1 } from 'uuid';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      valueSearch:''
    }
  }

  //hàm lấy text từ comp Seach để tìm kiếm. Truyền hàm này vào comp Search qua props và comp Seach sẽ nhận được hàm này. Bên Search lấy được text và truyền DL nhận được vào hàm này gửi trả App
  getTextToSearch = (value) => {
    //Thêm một biến lưu giá trị search nhận được từ comp Search vào state. không cần khai báo trước biến valueSearch đây là làm tắt. Nếu không thì khai báo trước ở trên state còn không nếu khai báo như thế này thì state nó tự thêm vào biến mới nếu ở trên chưa khai báo còn nếu khai báo r thì lấy biến đó ra rồi gán giá trị
    this.setState({
      valueSearch: value
    })
  }

  //hàm lấy dữ liệu từ Table 
  getNewUserData=(id, name, phone, permission)=>{
    console.log(data)

    const res={}

    res.id=uuidv1()
    res.name=name
    res.phone=phone
    res.permission=permission

    this.setState({data: [...this.state.data,res]})

    data.push(res)
    console.log(data)

  }
  searchResults = (res) => {
    this.state.data.forEach((item) => {
      //Kiểm tra bằng hàm indexOf, nếu trùng tên trả về thứ tự của từ đó trong cụm từ nếu không có trả về -1
      if (item.name.indexOf(this.state.valueSearch) !== -1) {
        res.push(item)
      }
    })
    console.log(res)
  }
  render() {
    var res=[]
    this.state.data.forEach((item) => {
      //Kiểm tra bằng hàm indexOf, nếu trùng tên trả về thứ tự của từ đó trong cụm từ nếu không có trả về -1
      if (item.name.indexOf(this.state.valueSearch) !== -1) {
        res.push(item)
      }
    })
    return (
      <div className="App">
        <Header />
        <SearchBar getValue={(val) => this.getTextToSearch(val)} />
        <Table 
          getNewUserData={(id, name, phone, permission)=>this.getNewUserData(id, name, phone, permission)} 
          data={res} />
      </div>
    );
  }
}
