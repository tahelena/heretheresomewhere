import React from 'react';
import Login from './Components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/About';
import SetsAus from './Components/SetsAus'
import Portraits from './Components/Portraits';
import { NavLink } from 'react-router-dom';
import SlideshowAus from './Components/SlideshowAus';
import Cart from './Components/Cart';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <span style={styles.header}>
            <button style={styles.button}>
              <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/menu.png" alt='menu icon' />
            </button>

            <NavLink
              style={styles.button}
              to='/'>
              <img style={styles.logo} src="https://res.cloudinary.com/tahelena/image/upload/v1549908976/PhotoProject/logo/logoHTS_2C_524x108.png" alt='here there somewhere logo' />
            </NavLink>
          </span>
          <span>
            <Route exact path='/admin' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/sets/australia' component={SetsAus} />
            <Route exact path='/ss/australia' component={SlideshowAus} />
            <Route exact path='/gallery/portrait' component={Portraits} />
            <Route exact path='/cart' component={Cart} />

          </span>
          <span style={styles.footer}>
            <h5>© 2019 tahelena </h5>
          </span>
        </div>
      </Router>
    )
  }
}
const styles = {
  button: {
    border: '0',
    backgroundColor: 'white',
  },
  icon: {
    height: '3em',
    padding: '1em',
  },
  logo: {
    height: '5em'
  },
  header: {
    width: '100%',
    position: 'fixed',
    top: '0',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'white',
  },
  footer: {
    position: 'relative',
    textAlign: 'center',
    bottom: '1em',
  },


}