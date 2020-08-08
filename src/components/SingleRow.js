import React, { Component } from 'react'

export default class SingleRow extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.value.id}</td>
          <td>{this.props.value.name}</td>
          <td>{this.props.value.phone}</td>
          <td>{`${this.props.value.permission===1?" Admin":" Member"}`}</td>
          <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button type="button" className="btn btn-outline-success"> <i className="fa fa-edit"> Edit
                      </i></button>
            <button type="button" className="btn btn-outline-danger"><i className="fa fa-remove"> Remove
                      </i></button>
          </div></td>
        </tr>
    )
  }
}
