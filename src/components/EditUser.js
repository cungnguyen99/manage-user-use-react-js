import React, { Component } from 'react'

export default class EditUser extends Component {
  render() {
    return (
      <form>
        <div className={this.state.isOpen || this.props.isCollapsed ? "card border-info mb-3 mt-3 visable" :
          "disable"} style={{ maxWidth: '18rem' }}>
          <div className="card-header">Add New Empoyee</div>
          <div className="card-body text-info">
            <input type="text" name="name" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Name*" />
          </div>
          <div className="card-body text-info">
            <input type="text" name="phone" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Phone*" />
          </div>
          <div className="card-body text-info">
            <select className="form-control" onChange={(e) => this.isChange(e)} name="permission">
              <option value="">Choice a value</option>
              <option value={1}>Staff</option>
              <option value={2}>Admin</option>
            </select>
          </div>
          <input type="reset" onClick={(id, name, phone, permission) => this.props.getNewUserData(this.state.id, this.state.name, this.state.phone, this.state.permission)} value="Lưu" className="btn my-3 mx-2 btn-outline-success" />
        </div>
      </form>
    )
  }
}
