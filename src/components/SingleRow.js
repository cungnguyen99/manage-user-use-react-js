import React, { Component } from 'react'

export default class SingleRow extends Component {
  editClick=()=>{
    this.props.editUser();
    this.props.checkEditForm()
  }
  render() {
    return (
        <tr>
          <td>{this.props.value.id}</td>
          <td>{this.props.value.name}</td>
          <td>{this.props.value.phone}</td>
          <td>{`${this.props.value.permission===1?" Staff":" Admin"}`}</td>
          <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button type="button" className="btn btn-outline-success" onClick={()=>this.editClick()}> <i className="fa fa-edit"> Edit
                      </i></button>
            <button type="button" className="btn btn-outline-danger" onClick={this.props.checkEditForm}><i className="fa fa-remove"> Remove
                      </i></button>
          </div></td>
        </tr>
    )
  }
}
