import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Logged from './components/Logged';
import Home from './components/Home'
import Prices from './components/Prices'
import About from './components/Aboutus';
import Footer from './components/Footer';
import FormsPage from './components/FormPage/FormNew'
import Toolbar from './components/NavigationItems/Toolbar'
import Dashboard from './components/Dashboard'
import SurveyList from './components/SurveyList'
import chechpay from './components/chechpay'
import Calendars from './components/Calendar'




import {connect} from 'react-redux';

 export default class App extends Component {



  render() {
    return (
      <>
       <Route  path='/g' component= {Calendars} />
      <Route  path='/' component= {Toolbar} />
      <Route exact path='/' component= {Home} />
      <Route exact path='/' component= {Prices} />
      <Route exact path='/' component= {About} />
      <Route exact path='/' component= {Footer} />
      <Route exact path='/credits' component= {Prices} />
      <Route exact path='/dashboard' component= {Dashboard} />
      <Route exact path='/surveys' component= {SurveyList} />

  
      <Route exact path='/forms' component= {FormsPage} />
      <Route path='/logged' component= {Logged} />
      </>
    )
  }
}

