import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
      </div>
    </Router>
    );
  }
}

export default App;
