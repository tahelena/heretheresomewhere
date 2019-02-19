import React from 'react';
import Login from './Admin/Login'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './Components/About';
import Cart from './Components/Cart';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import GalleryPortraits from './Components/GalleryPortraits';
import Checkout from './Components/Checkout';
import AdminProd from './Admin/AdminProd';
import AdminCat from './Admin/AdminCat';
import Gallery from './Components/Gallery';




export default class Main extends React.Component {
  state = {
    show: false, visible: false
  }
  hideShow = () => this.setState({ show: !this.state.show });

  openModal = () => {
    if (window.location.href !== "http://localhost:3000/checkout") {
      this.setState({
        visible: true
      });
    }
  }
  closeModal = () => {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <Router>
        <div >
          <span style={styles.header}>
            <button
              onClick={this.hideShow}
              style={styles.button}>
              <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/menu.png" alt='menu icon' />
            </button>
            <NavBar
              hideShow={this.hideShow}
              show={this.state.show} />
            <div style={styles.cart}>
              <Cart
                openModal={this.openModal}
                closeModal={this.closeModal}
                visible={this.state.visible} />
            </div>
            <NavLink
              to='/' >
              <img
                style={styles.logo} src="https://res.cloudinary.com/tahelena/image/upload/v1549908976/PhotoProject/logo/logoHTS_2C_524x108.png" alt='here there somewhere logo' />
            </NavLink>
          </span>
          <span>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Login} />
            <Route exact path='/admin/adminprod' component={AdminProd} />
            <Route exact path='/admin/admincat' component={AdminCat} />

            <Route exact path='/checkout'
              render={
                (props) => (
                  <Checkout
                    closeModal={this.closeModal}
                  />
                )}
            />


            <Route exact path='/about' component={About} />
            <Route exact path='/gallery/portrait' component={GalleryPortraits} />
            <Route exact path='/gallery/place/:place_id' component={Gallery} />
          </span>
          <span style={styles.footer}>
            <h5> © 2019 tahelena </h5>
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
    height: '5em',
    padding: '1vh 3vh'
  },
  header: {
    width: '100%',
    top: '0',
    display: 'grid',
    gridTemplateColumns: '1fr 20fr 1fr',
    background: 'white',
    position: 'sticky',
  },
  footer: {
    position: 'relative',
    textAlign: 'center',
    bottom: '0',
  },
  cart: {
    height: '2em',
    padding: '1.5em',
    left: '0',
    position: 'relative'
  }
}