import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleTogle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <form id="content">
            <input type="text" name="input" onClick={this.handleTogle} id="search-input" class={!this.state.isOpen?"input":"input square"}  />
            <button type="reset" class={!this.state.isOpen?"search":"search close"}  id="search-btn"></button>
          </form>
        </div>
      </div>
    )
  }
}
