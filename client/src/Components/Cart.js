import React from 'react';
import CartProducts from './CartProducts';
import { NavLink } from 'react-router-dom'

export default class Cart extends React.Component {

    componentDidMount() {
        this.props.handleFind();
    }

    handleRemoveItem = (index) => {
        debugger
        let shoppingcart = JSON.parse(localStorage.getItem('photo')) || []
        const confirm = window.confirm('Are you sure you want to remove the item from the cart?')
        if (confirm) {
            shoppingcart.splice(index, 1)
            localStorage.setItem('photo', JSON.stringify(shoppingcart))
            this.props.handleFind();
        }
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

            <section className='BigCart' >
                <span >
                    {
                        this.props.cart.length > 0 ?


                            <span style={styles.popup}>
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
                                                    handleFind={this.props.handleFind}
                                                />
                                            )
                                        })
                                    }
                                </span>

                                <span style={styles.subTotal}>
                                    Subtotal: €{this.calculateTotal()},00
                            </span>

                            </span>
                            : <h1 style={styles.empty}>the cart is empty</h1>

                    }

                    <NavLink
                        to="/checkout"  >
                        <button
                            style={styles.buttonCheckout}>
                            Check out
                              </button>
                    </NavLink>


                </span>

            </section>
        );
    }
}
const styles = {
    popup: {
        display: 'block',
        margin: '0em 20em',
        height: '75vh',
        display: 'grid',
    },

    empty: {
        alignItems: 'center',
        justifyItems: 'center',

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
        padding: '1em',
        background: 'whitesmoke',
        justifyContent: 'end',
        border: 'solid 1px lightgray'
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

    icon: {
        height: '2em',
        padding: '1vh',
        left: '6em',
    },

    iconColumn: {
        display: 'flex',
        flexFlow: 'wrap',
        alignItems: 'center',
    },

    buttonCheckout: {
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        borderRadius: '12px',
        fontSize: 'large',
        position: 'fixed',
        right: '34vh',
        marginTop: '1vh',

    },

}


