// import React, { Component } from 'react'

// export default class Movies extends Component {
//   render() {
//     return (
//       <div>
//       <div>
//         <div className="heading-1">Popular Movies</div>
//       </div>

//       <div class="wrapper">
//          <div class="card"  >
//          <div class="card has-bg-img bg-img-nature"  onClick={() => this.setState({   OpenSeries: true })} >
//             <span class="card__title">Si</span>
//           </div>
//         </div>
//          <div class="card has-bg-img bg-img-nature">
//           <span class="card__title">Mo</span>
//         </div>
//       </div>
//       </div>

//     )
//   }
// }
import React, { Component } from 'react'
import { useLayoutEffect } from 'react/cjs/react.development';
import feed from '../feed/sample.json'
import './Series.css'

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: feed.entries,
      isLoaded: false,
      url: [],
      siva: [],
      sivak: ''
    };
  }
 

  render() {
  return (
      <div>
          <div  className="heading-1">
          <div >Popular Movies</div>
          <button class="btn" data-slide="true"  onClick={() => this.props.onChange()} >Homepage</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }} >

          {this.state.items.map(s => (
            s.programType.length > 0 && s.programType == "movie" ?
              <div style={{ padding: "2rem" }}>
                <div>
                  <img src={s.images.PosterArt.url} />
                  <div style={{width:"100px"}} >  {s.title}</div>
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
