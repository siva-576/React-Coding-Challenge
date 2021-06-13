import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
     <div className="header"> 
             <div className="heading"> DEMO Streaming</div>
             <div className='login'> 
             <label className="btn1" >Login</label>
              <button class="btn" data-slide="true">Start your free trial</button>
              </div>
     </div>
    )
  }
}
