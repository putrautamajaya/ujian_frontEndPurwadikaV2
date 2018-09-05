import React, { Component } from 'react';
import Header from './component/header';
import { Route } from 'react-router-dom';

import LoginPage from './component/loginPage';
import HomePage from './component/homePage'; 
import RegisterPage from './component/registerPage';

import Equalizer from './component/equalizerPage';
import Avanger from './component/avangerPage';
import BatmanVsSuperman from './component/batmanVsSuperman';

import Cart from './component/cart';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />     

        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/loginPage" component={ LoginPage }/>
          <Route path="/registerPage" component={ RegisterPage }/>
          <Route path="/equalizer" component={ Equalizer }/>
          <Route path="/avanger" component={ Avanger }/>
          <Route path="/batmanvssuperman" component={ BatmanVsSuperman }/>
          <Route path="/cart" component={ Cart }/>
        </div>
        
      </div>
    );
  }
}

export default App;
