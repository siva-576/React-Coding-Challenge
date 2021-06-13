import React, { Component } from 'react'
import './Homepage.css'
import Movies from './Movies';
import Series from './Series'


export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      OpenSeries: false,
      OpenMovies: false,

      
      
    }
  }
  onChange = () => {
    this.setState({
      OpenSeries: false,
      OpenMovies: false
    })
   
  }


  render() {
    return (
      <div className="headerpage-1">

  {this.state.OpenSeries ? <Series
    onChange={() => this.onChange()}
  
  /> :

  this.state.OpenMovies? <Movies
  onChange={() => this.onChange()}
  
  /> :

      <div>
        <div   className="header--2">
          <div className="heading-1">Popular Titles</div>
        

        </div>
         <div class="wrapper">
           <div class="card"  >
           <div class="card has-bg-img bg-img-nature"  onClick={() => this.setState({OpenSeries: true })} >
              <span class="card__title">SERIES</span>
            </div>
          </div>
           <div class="card has-bg-img bg-img-nature"  onClick={() => this.setState({ OpenMovies: true })}>
            <span class="card__title">MOVIES</span>
          </div>
        </div>
        </div>
        }
      </div>
    )
  }
}
