import React, { Component } from 'react'
import CardAdd from './CardAdd'
import Button from './Button'

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state={
      isCollapsed: false
    }
  }
  handleTogle=()=>{this.setState({isCollapsed:!this.state.isCollapsed})}
  render() {
    return (
      <div className="container-fluid">
        <section>
          <div className="row">
            <div className="col-9">
          <div className="tbl-header">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding={0} cellSpacing={0} border={0}>
              <tbody>
                <tr>
                  <td>AAC</td>
                  <td>AUSTRALIAN COMPANY </td>
                  <td>$1.38</td>
                  <td>+2.01</td>
                  <td>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <button type="button" className="btn btn-outline-success"> <i className="fa fa-edit"> Edit
                      </i></button>
                      <button type="button" className="btn btn-outline-danger"><i className="fa fa-remove"> Remove
                      </i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tr>
                <td>AAD</td>
                <td>AUSENCO</td>
                <td>$2.38</td>
                <td>-0.01</td>
                <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" className="btn btn-outline-success"> <i className="fa fa-edit"> Edit
                      </i></button>
                      <button type="button" className="btn btn-outline-danger"><i className="fa fa-remove"> Remove
                      </i></button>
                </div></td>
              </tr>
              <tr>
                <td>AAX</td>
                <td>ADELAIDE</td>
                <td>$3.22</td>
                <td>+0.01</td>
                <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" className="btn btn-outline-success"> <i className="fa fa-edit"> Edit
                      </i></button>
                      <button type="button" className="btn btn-outline-danger"><i className="fa fa-remove"> Remove
                      </i></button>
                </div></td>
              </tr>
              <tr>
                <td>AAX</td>
                <td>ADELAIDE</td>
                <td>$3.22</td>
                <td>+0.01</td>
                <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" className="btn btn-outline-success"> <i className="fa fa-edit"> Edit
                      </i></button>
                      <button type="button" className="btn btn-outline-danger"><i className="fa fa-remove"> Remove
                      </i></button>
                </div></td>
              </tr>
            </table>
            </div>
          </div>
            <div className="col-3">
               {/* Ở đây ta không kiểm tra state của component CardAdd để hiển thị form thêm mới. Do ta chuyển
                   button sang một component mới nên không thể kiểm tra state của component CardAdd do
                   là 2 component khác nhau. Ta thấy cả 2 component Button và CardAdd đều có nằm trong component cha là Table nên ta sẽ dùng state của component cha để kiểm tra.( XEM BÀI 61). Kiểm tra thông qua việc truyền biến state của component cha qua props vào component con  */}
              <Button isCollapsed={this.state.isCollapsed} isVisiableButton={this.handleTogle}/>
              <CardAdd isCollapsed={this.state.isCollapsed}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
