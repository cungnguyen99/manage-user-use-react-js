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
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="What are you looking for?" />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
