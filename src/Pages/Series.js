import React, { Component } from 'react'
import { useLayoutEffect } from 'react/cjs/react.development';
import feed from '../feed/sample.json'
import './Series.css'

export default class series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: feed.entries,

      url: []
    };
  }




  render() {

    return (
      <div>
    
         <div  className="heading-1">
          <div >Popular Series</div>
          <button class="btn" data-slide="true"  onClick={() => this.props.onChange()}  >Homepage</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }} >

          {this.state.items.map(s => (
          
              s.programType.length > 0 && s.programType == "series" ?
              <div style={{ padding: "2rem" }}>
                <div>
                  <img src={s.images.PosterArt.url} />
                  <div style={{ width: '100px' }}>  {s.title}</div>
                </div>
                </div>
                : null
              ))

          }
        </div>
      </div>

    )
  }
}
