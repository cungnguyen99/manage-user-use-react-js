import React, { Component } from 'react'
import CardAdd from './CardAdd'

export default class Table extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section>
          <div className="row">
            <div className="col-10">
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
            <div className="col-2">
              <CardAdd/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
