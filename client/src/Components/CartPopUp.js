import React from 'react';
import Modal from 'react-awesome-modal';
import CartProducts from './CartProducts';
import { NavLink } from 'react-router-dom'

export default class Cart extends React.Component {

    state = {
        cart: [],
    }
    componentDidMount() {
        this.props.handleFind();
    }
    handleRemoveItem = (index) => {
        debugger
        let shoppingcart = JSON.parse(localStorage.getItem('photo')) || []
        shoppingcart.splice(index, 1)
        localStorage.setItem('photo', JSON.stringify(shoppingcart))
        this.props.handleFind();
    }

    handleIncreaseQty = (index) => {
        let shoppingcart = JSON.parse(localStorage.getItem('photo')) || []
        shoppingcart[index].quantity++
        localStorage.setItem('photo', JSON.stringify(shoppingcart))
        this.props.handleFind();
    }

    handleDecreaseQty = (index) => {
        let shoppingcart = JSON.parse(localStorage.getItem('photo')) || []
        if (shoppingcart[index].quantity > 1) {
            shoppingcart[index].quantity--
        } else {
            const confirm = window.confirm('Are you sure you want to remove the item from the cart?')
            if (confirm) {
                shoppingcart.splice(index, 1)
                localStorage.setItem('photo', JSON.stringify(shoppingcart))
                this.props.handleFind();
            }
        }
        localStorage.setItem('photo', JSON.stringify(shoppingcart))
        this.props.handleFind();
    }

    calculateTotal = () => {
        let total = 0
        JSON.parse(localStorage.getItem('photo')).map((ele) => { total += ele.quantity * 85 })
        return total
    }

    render() {

        return (

            <section className='BigCart' style={styles.section}>

                <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/supermarket.png' alt='cart icon' value="Open" onClick={() => this.props.openModal()} />

                <Modal visible={this.props.visible} width="72%" height="86%" effect="fadeInUp" onClickAway={() => this.props.closeModal()}>
                    <span>
                        <a href="javascript:void(0);" onClick={() => this.props.closeModal()}>
                            <img style={styles.iconX} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/cancel-music.png' />
                        </a>

                        {
                            this.props.cart.length > 0 ? <div style={styles.popup}>

                                <span style={styles.mainBar}>
                                    {['Item', 'Qty', 'Cost'].map((bar, i) => { return (<div key={i} >{bar} </div>) })}
                                </span>

                                <span style={styles.cartItems}>
                                    {
                                        this.props.cart.map((photo, i) => {
                                            return (
                                                <CartProducts
                                                    key={i}
                                                    photo={photo}
                                                    photo_id={photo.photo_id}
                                                    index={i}
                                                    handleRemoveItem={this.handleRemoveItem}
                                                    handleIncreaseQty={this.handleIncreaseQty}
                                                    handleDecreaseQty={this.handleDecreaseQty}
                                                    handleFind={this.handleFind}
                                                />
                                            )
                                        })
                                    }
                                </span>

                                <span style={styles.subTotal}>
                                    Subtotal: {this.calculateTotal()}
                                </span>

                            </div> : <h1 style={styles.empty}>the cart is empty</h1>

                        }

                        <div style={styles.checkout} >
                            <NavLink to="/checkout"
                                style={styles.activeStyle}>
                                <button
                                    style={styles.buttonCheckout}>
                                    Check out
                              </button>
                            </NavLink>


                        </div>

                    </span>
                </Modal>
            </section>
        );
    }
}
const styles = {
    popup: {
        display: 'block',
        margin: '5em 8em',

    },

    empty: {
        alignItems: 'center',
        justifyItems: 'center',
    },

    centralBlock: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        margin: '3em'
    },
    cartItems: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '1em',
        overflowY: 'scroll',
        overflowX: 'hidden',

    },
    mainBar: {
        display: 'grid',
        gridTemplateColumns: '6fr 2fr 1fr',
        padding: '1em',
        background: 'whitesmoke',
        textAlign: 'center',
        border: 'solid 1px lightgray'
    },
    subTotal: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        padding: '1em',
        background: 'whitesmoke',
        textAlign: 'right',
        border: 'solid 1px lightgray'
    },
    imagePopUp: {
        objectFit: 'scale-down',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0',
    },
    image: {
        alignSelf: 'center',
        height: '20em',
        overflow: 'hidden',
        width: '20em',
        margin: '0',
        objectFit: 'cover',
        padding: '1em 0em',
    },
    iconX: {
        height: '1em',
        padding: '1em',
        right: '0',
        // position: 'fixed'
    },
    icon: {
        height: '2em',
        padding: '1vh',
        left: '6em',
    },
    iconCart: {
        height: '3em',
        padding: '1em',
        bottom: '5em',
        // position: 'fixed'
    },
    iconColumn: {
        display: 'flex',
        flexFlow: 'wrap',
        alignItems: 'center',
    },
    cartUp: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.7)',
        padding: '1em',
        maxWidth: '23%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        // position: 'fixed',
        zIndex: '1000',
        bottom: '6em',
        right: '9em',
        fontsize: 'larger',
    },
    button: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        width: '40%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontVariant: ' all-small-caps',
        fontSize: 'x-large',
    },
    buttonCheckout: {
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        borderRadius: '12px',
        // fontWeight: 'bold',
        fontSize: 'x-large',

    },
    checkout: {
        bottom: '15vh',
        right: '15vh',
        position: 'fixed',

    },
    activeStyle: {
        color: 'black',
        textDecoration: 'none',
        lineHeight: '2em',
    },
}


