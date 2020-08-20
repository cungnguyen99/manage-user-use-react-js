import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      infoEdit: this.props.userEditObj
    }
  }
  
  isChange = (e) => {
    const {name, value}=e.target
    this.setState({infoEdit:{...this.state.infoEdit, name: value}})
  }
  render() {
    return (
      <div className={this.props.isOpenEditForm?"container mb-4 visiable":"disable"}>
        <div className='row'>
          <div className='col-2'></div>
          <div className="col-8">
            <form>
              <div className="card border-info mb-3 mt-3 visable">
                <div className="card-header text-center">Edit info an Empoyee</div>
                <div className="card-body text-info">
                  <input type="text" name="name" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Name*" defaultValue={this.props.userEditObj.name}/>
                </div>
                <div className="card-body text-info">
                  <input type="text" name="phone" onChange={(e) => this.isChange(e)} className="form-control" placeholder="Phone*" defaultValue={this.props.userEditObj.phone}/>
                </div>
                <div className="card-body text-info form-group">
                  <select value={this.props.userEditObj.permission} className="form-control" onChange={(e) => this.isChange(e)} name="permission">
                    <option value>Choice a value</option>
                    <option value={1}>Staff</option>
                    <option value={2}>Admin</option>
                  </select>
                </div>
                <input type="reset" value="Save" onClick={this.props.checkEditForm} className="btn my-3 mx-2 btn-outline-success" />
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    )
  }
}
