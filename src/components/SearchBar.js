import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //khai báo biến để lấy text nhập vào từ form
      tempValue: ""
    }
  }

  //truyền giá trị nhập từ form vào state
  getText=(event)=>{
    this.setState({tempValue: event.target.value})

    //viết dòng này để gọi ngay khi input thay đổi, input thay đổi thì tìm kiếm luôn chứ không cần nhấn submit hoặc nhấn cũng được
    this.props.getValue(this.state.tempValue)
  }

  render() {
    console.log(this.state.tempValue)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" onChange={(event)=>this.getText(event)} placeholder="What are you looking for?" />
              {/* Truyền lại giá trị nhập vào props getValue mà App truyền vào với đầu vào là dl, dl trong trường hợp này là this.state.tempValue. App nhận giá trị và tìm kiếm  */}
              <button type="submit" className="searchButton" onClick={(dl)=>this.props.getValue(this.state.tempValue)}>
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
