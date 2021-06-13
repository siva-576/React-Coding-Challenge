import React, { Component } from 'react'
import Homepage from '../../Pages/Homepage';

export default class Content extends Component {
  render() {
    
    return (
      <div   className="card-body" style={{ height: "calc(100vh - 245px)", overflowY: "auto",overflowX:"hiden",position: "relative" }}>
      <Homepage/>
      </div>
    )
  }
}
