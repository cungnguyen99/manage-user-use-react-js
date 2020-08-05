import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <h1>Fixed Table header</h1>
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
                      <button type="button" className="btn btn-outline-success">Success</button>
                      <button type="button" className="btn btn-outline-danger">Danger</button>
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
                  <button type="button" className="btn btn-outline-success">Success</button>
                  <button type="button" className="btn btn-outline-danger">Danger</button>
                </div></td>
              </tr>
              <tr>
                <td>AAX</td>
                <td>ADELAIDE</td>
                <td>$3.22</td>
                <td>+0.01</td>
                <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" className="btn btn-outline-success">Success</button>
                  <button type="button" className="btn btn-outline-danger">Danger</button>
                </div></td>
              </tr>
              <tr>
                <td>AAX</td>
                <td>ADELAIDE</td>
                <td>$3.22</td>
                <td>+0.01</td>
                <td> <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <button type="button" className="btn btn-outline-success">Success</button>
                  <button type="button" className="btn btn-outline-danger">Danger</button>
                </div></td>
              </tr>
            </table>
          </div>
        </section>
      </div>
    )
  }
}
