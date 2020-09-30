import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import data from './data.json'
import { v1 as uuidv1 } from 'uuid';
import EditUser from './components/EditUser';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      valueSearch:'',
      isOpenEditForm:false,
      //lưu giá trị của obj khi nhấn edit 
      userEditObj:{}
    }
  }

  //hàm lấy text từ comp Seach để tìm kiếm. Truyền hàm này vào comp Search qua props và comp Seach sẽ nhận được hàm này. Bên Search lấy được text và truyền DL nhận được vào hàm này gửi trả App
  getTextToSearch = (value) => {
    //Thêm một biến lưu giá trị search nhận được từ comp Search vào state. không cần khai báo trước biến valueSearch đây là làm tắt. Nếu không thì khai báo trước ở trên state còn không nếu khai báo như thế này thì state nó tự thêm vào biến mới nếu ở trên chưa khai báo còn nếu khai báo r thì lấy biến đó ra rồi gán giá trị
    this.setState({
      valueSearch: value
    })
  }

  //hàm setstate cho isOpenEditForm
  checkEditForm=()=>{
    this.setState({isOpenEditForm:!this.state.isOpenEditForm})
    console.log(this.state.isOpenEditForm)
  }
  //hàm lấy dữ liệu từ Table 
  getNewUserData=( name, phone, permission)=>{
    
    const res={}

    res.id=uuidv1()
    res.name=name
    res.phone=phone
    res.permission=permission

    var items=this.state.data

    items.push(res)

    // this.setState({data: [...this.state.data,res]})

    this.setState({data:items})

    // data.push(res)
    
    localStorage.setItem('user',JSON.stringify(items))

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

  //truyền tham số user để lấy về thông tin một user nhận từ table
  editUser=(user)=>{
    this.setState({userEditObj: user})
  }

  //hàm nhận thông tin sửa từ comp Edit
  getUserInfoEdit=(info)=>{
    this.state.data.forEach((item)=>{
      if(item.id===info.id){
        item.name=info.name
        item.phone=info.phone
        item.permission=info.permission
      }
    })
    //dua du lieu vao localStorage
    localStorage.setItem('user',JSON.stringify(this.state.data))
  }

  //Hàm xóa người dùng
  removeClick=(id)=>{

    const tempData=this.state.data.filter(item=>item.id!==id)

    this.setState({data:tempData})

    localStorage.setItem('user',JSON.stringify(tempData))
  }

  //truoc khi render ktra xem có dl hay chua bang ham cwm
  componentWillMount() {
    if(localStorage.getItem('user')===null){
      //nếu chưa có thì tạo 1 storage mới với dữ liệu là file data.json
      localStorage.setItem('user', JSON.stringify(data))
    }else{
      var temp=JSON.parse(localStorage.getItem('user'))
      this.setState({data:temp})
    }
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
        {
          this.state.isOpenEditForm && (
            <EditUser 
            getUserInfoEdit={(info)=>this.getUserInfoEdit(info)}
            checkEditForm={this.checkEditForm}
            userEditObj={this.state.userEditObj}/>
          )
        }

        <SearchBar getValue={(val) => this.getTextToSearch(val)} />
        
        <Table 
        removeClick={(id)=>this.removeClick(id)}
          getNewUserData={(id, name, phone, permission)=>this.getNewUserData(id, name, phone, permission)} 
          data={res}
          editUser={this.editUser} 
          checkEditForm={this.checkEditForm}/>
      </div>
    );
  }
}
