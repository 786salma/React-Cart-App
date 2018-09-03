import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import './App.css';
import Form from './components/Form';
import Second from './components/Second';
import Login from './components/Login';
import Cauroselpage from './components/Cauroselpage';

import Errors from './components/Errors';
import Third from './components/Third';
import logo from './logo.svg';
import welcome from './components/img-folder/welcome.jpg';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart
          
          </h1>
        </header>
        <Router history={history}>
          <Switch>
          
            <Route path="/" component={Form} exact />
            <Route path="/login" component={Login} exact/>
            <Route path="/cauroselpage" component={Cauroselpage} exact/>
            <Route path="/second" component={Second} exact />
            
            <Route path="/third" component={Third} exact />
            <Route component={Errors} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
