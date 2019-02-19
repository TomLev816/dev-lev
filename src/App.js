import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
      </div>
    </Router>
    );
  }
}

export default App;
