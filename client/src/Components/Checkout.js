import React from 'react';

export default class Checkout extends React.Component {
    state = {
        country: '', postcode: '', city: '', state_province: '', address: '', complement: '',
        name: '', surname: '', mobile: '', email: '', total: ''
    }

    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('orderInfo', JSON.stringify(this.state))
        this.props.history.push('/payment')
        console.log(this.state)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={styles.table}>
                    <div style={styles.dets}>
                        <h3 style={styles.cels}>
                            <label >First Name <input onChange={this.handleChange} name='name' value={this.state.name} style={styles.input} type="text" /></label>
                            <label>Last Name <input onChange={this.handleChange} name='surname' value={this.state.surname} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>Shipping Address <input onChange={this.handleChange} name='address' value={this.state.address} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>Complement <input onChange={this.handleChange} name='complement' value={this.state.complement} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>City <input onChange={this.handleChange} name='city' value={this.state.city} style={styles.input} type="text" /></label>
                            <label>State/Province <input onChange={this.handleChange} name='state_province' value={this.state.state_province} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>Country <input onChange={this.handleChange} name='country' value={this.state.country} style={styles.input} type="text" /></label>
                            <label>Postcode <input onChange={this.handleChange} name='postcode' value={this.state.postcode} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>Mobile<input onChange={this.handleChange} name='mobile' value={this.state.mobile} style={styles.input} type="text" /></label>
                        </h3>
                        <h3>
                            <label>email <input onChange={this.handleChange} name='email' value={this.state.email} style={styles.input} type="text" /></label>
                        </h3>
                    </div>
                    <div style={styles.order}>
                        <h2>Your Order</h2>
                        <span>
                            <div style={styles.orderBox}>
                                <span style={styles.mainBar}>
                                    <div>Products</div>
                                    <div>Total</div>
                                </span>
                                <span style={styles.cartItems}>
                                </span>
                                <span style={styles.subTotal}>
                                    <div>Shipping</div>
                                    <div>Flat rate: €15.00</div>
                                </span>
                                <span style={styles.subTotal}>
                                    <div>Total</div>
                                    <div>VALUE</div>
                                </span>
                            </div>
                        </span>
                        <button style={styles.button}>Confirm</button>
                    </div>

                </form>
            </div>
        )
    }
}
const styles = {
    table: {
        display: 'grid',
        border: 'solid #9E9E9E',
        padding: '4em',
        alignItems: 'center',
        margin: '1em 10em',
        gridTemplateColumns: '1fr 1fr'
    },

    cel: {
        padding: '1em'
    },
    input: {
        margin: '1em',
        height: '2em',
    },
    button: {
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        borderRadius: '12px',
        fontSize: 'larger',
        right: '20%',
        bottom: '20%',
        zIndex: '0',
    },
    orderBox: {
        display: 'block',
        margin: '5em 8em',
    },
    mainBar: {
        display: 'grid',
        gridTemplateColumns: '6fr 2fr 1fr',
        padding: '1em',
        background: 'lightgray',
        textAlign: 'center',
    },
    subTotal: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        padding: '1em',
        background: 'lightgray',

    },
    cartItems: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '1em',
        background: 'whitesmoke',
    },
    order: {
        displayg: 'grid',
        textAlign: 'center',
    }
}