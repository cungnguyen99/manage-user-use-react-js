import React, { Component } from 'react'

//Làm phần kết nối giữa 2 component thông quan component cha để demo phần khi 2 component khác nhau muốn điều khiển việc hiển thị thông tin của component kia (XEM BÀI 61)
export default class Button extends Component {
  render() {
    return (
      <div className="mb-2">
        {/* lấy props có tên là isCollapsed bên componen cha (giá trị là giá trị của state nên ta có thể kiểm tra xem state của component cha đang là true hay false để hiển thị nút.) */}
         <div className={!this.props.isCollapsed?"btn btn-block btn-outline-info visable":" disable"} onClick={this.props.isVisiableButton}>Create@</div>
        <div className={this.props.isCollapsed?"btn btn-block btn-outline-secondary visable":"disable"} onClick={this.props.isVisiableButton}>Close@</div>
      </div>
    )
  }
}
