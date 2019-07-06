import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Logged from './components/Logged';
import Home from './components/Home'
import Prices from './components/Prices'
import About from './components/Aboutus';
import Footer from './components/Footer'


import {connect} from 'react-redux';

 export default class App extends Component {



  render() {
    return (
      <>
      <Route exact path='/' component= {Home} />
      <Route exact path='/' component= {Prices} />
      <Route path='/' component= {About} />
      <Route path='/' component= {Footer} />

  
     
      <Route path='/logged' component= {Logged} />
      </>
    )
  }
}

