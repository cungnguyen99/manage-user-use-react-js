import React, { Component } from 'react'

export default class CardAdd extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
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
            <input type="text" className="form-control" placeholder="Name*"/>
          </div>
          <div className="card-body text-info">
            <input type="text" className="form-control" placeholder="Phone*"/>
          </div>
          <div className="card-body text-info">
            <select className="form-control">
              <option val="">Choice a value</option>
              <option val="">Staff</option>
              <option val="">Admin</option>
            </select>
          </div>
          <button type="button" className="btn my-3 mx-2 btn-outline-success">Create</button>
        </div>
      </div>
    )
  }
}
