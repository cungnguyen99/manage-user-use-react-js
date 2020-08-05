import React, { Component } from 'react'

export default class CardAdd extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Add New Empoyee</div>
          <div className="card-body text-info">
            <h5 className="card-title">Name</h5>
            <input type="text" className="form-control" placeholder="Name*"/>
          </div>
          <div className="card-body text-info">
            <h5 className="card-title">Phone</h5>
            <input type="text" className="form-control" placeholder="Phone*"/>
          </div>
          <div className="card-body text-info">
            <h5 className="card-title">Role</h5>
            <select className="form-control">
              <option val="">Choice a value</option>
              <option val="">Staff</option>
              <option val="">Admin</option>
            </select>
          </div>
          <button type="button" className="btn my-3 mx-2 btn-outline-success">Success</button>
        </div>
      </div>
    )
  }
}
