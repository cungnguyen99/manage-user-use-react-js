import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Project manage employees by <br/> React JS</h1>
            <hr className="my-2" />
          </div>
        </div>
      </div>
    )
  }
}
