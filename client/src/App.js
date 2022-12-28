import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <h2>Prueba de static web app para reseteo de password</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'api/comprobarusuario'} className="nav-link"> Comprobar usuario </Link></li>
              <li><Link to={'api/httptrigger2'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

