import React, { Component } from 'react'

export default class CardAdd extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false,
      id:'',
      name:'',
      phone:'',
      permission:''
    }
  }
  
  //lấy về giá trị nhập trong các input, thêm vào state và tạo ra một obj rỗng để đưa giá trị vừa nhận được từ state vào, khi nhấn nút thêm sẽ gửi obj đó sang app
  isChange=(e)=>{
    const {name, value}=e.target

    this.setState({
      [name]:value
    })

    const res={}

    res.id=this.state.id
    res.name=this.state.name
    res.phone=this.state.phone
    res.permission=this.state.permission

  }

  handeTogle=()=>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    return (
      <div>
        <div className={!this.state.isOpen?"btn btn-block btn-outline-info visable":" disable"} onClick={this.handeTogle}>Create</div>
        <div className={this.state.isOpen?"btn btn-block btn-outline-secondary visable":"disable"} onClick={this.handeTogle}>Close</div>
        {/* C1 để hiện thị form dùng state của chính component CardAdd bằng cách dùng className={this.state.isOpen?"card border-info mb-3 mt-3 visable":"disable" C2 dùng props nhận được từ component cha */}
        <div className={this.state.isOpen || this.props.isCollapsed?"card border-info mb-3 mt-3 visable":
        "disable"}  style={{ maxWidth: '18rem' }}>
          <div className="card-header">Add New Empoyee</div>
          <div className="card-body text-info">
            <input type="text" name="name" onChange={(e)=>this.isChange(e)} className="form-control" placeholder="Name*"/>
          </div>
          <div className="card-body text-info">
            <input type="text" name="phone" onChange={(e)=>this.isChange(e)} className="form-control" placeholder="Phone*"/>
          </div>
          <div className="card-body text-info">
            <select className="form-control" onChange={(e)=>this.isChange(e)} name="permission">
              <option value="">Choice a value</option>
              <option value={1}>Staff</option>
              <option value={2}>Admin</option>
            </select>
          </div>
          <button type="button" className="btn my-3 mx-2 btn-outline-success">Create</button>
        </div>
      </div>
    )
  }
}
