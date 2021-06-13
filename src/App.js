
import React from 'react';
import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';

class App extends React.Component {
  render(){
    return(

   <div className="main">
   <Header/>
   <Content />
   <Footer/>
   </div>

    )
  }
}


export default App;  
