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
import Payment from './Components/Payment'




export default class Main extends React.Component {
  state = {
    show: false, visible: false, cart: []
  }
  componentDidMount() {
    this.handleFind();
  }
  hideShow = () => this.setState({ show: !this.state.show });
  handleFind = () => {
    let shoppingcart = JSON.parse(localStorage.getItem('photo')) || []
    this.setState({ cart: shoppingcart })
  }
  render() {
    console.log(this.state)
    return (
      <Router>
        <div >
          <span style={styles.header}>
            <button
              onClick={this.hideShow}
              style={styles.button}
            >
              <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/menu.png" alt='menu icon' />
            </button>
            <NavBar
              hideShow={this.hideShow}
              show={this.state.show} />

            {this.state.cart.length > 0 ? <NavLink
              to='/cart'
              cart={this.state.cart}>
              <img style={styles.cart} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/supermarket.png' alt='cart icon' />
            </NavLink> : null}

            <NavLink
              to='/home'
            >
              <img
                style={styles.logo} src="https://res.cloudinary.com/tahelena/image/upload/v1549908976/PhotoProject/logo/logoHTS_2C_524x108.png" alt='here there somewhere logo' />
            </NavLink>
          </span>

          <span>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery/portrait' render={
              (props) => (
                <GalleryPortraits
                  {...props}
                  handleFind={this.handleFind}
                  cart={this.state.cart}
                />
              )
            } />
            <Route exact path='/gallery/place/:place_id' render={
              (props) => (
                <Gallery
                  {...props}
                  handleFind={this.handleFind}
                  cart={this.state.cart}
                />
              )
            } />
            <Route exact path='/admin' component={Login} />
            <Route exact path='/admin/adminprod' component={AdminProd} />
            <Route exact path='/admin/admincat' component={AdminCat} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/cart'
              render={
                (props) => (
                  <Cart
                    {...props}
                    handleFind={this.handleFind}
                    cart={this.state.cart}
                  />
                )
              } />
            <Route exact path='/checkout'
              render={
                (props) => (
                  <Checkout
                    {...props}
                    closeModal={this.closeModal}
                  />
                )}
            />


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
    padding: '1.6em',

  },
  cart: {
    height: '2em',
    padding: '2em',

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
    alignItems: 'center',
    justifyItems: 'end',
  },
  footer: {
    position: 'static',
    textAlign: 'center',
    bottom: '0',
    float: 'right',
    padding: '1em'
  },


}