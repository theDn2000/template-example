import React, { Component } from 'react';
import {usestate} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

const App = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('api/comprobarusuario', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <h2>Prueba de static web app para reseteo de password</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/home'} className="nav-link"> Comprobar usuario </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
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
        <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {data.data.map(person => {
        return (
          <div key={person.id}>
            <h2>{person.email}</h2>
            <h2>{person.first_name}</h2>
            <h2>{person.last_name}</h2>
            <br />
          </div>
        );
      })}
    </div>
      </Router>
    );
  }
}

export default App;

