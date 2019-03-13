import React from 'react'
import axios from 'axios';
// import stripe checkout first
import StripeCheckout from 'react-stripe-checkout';

// that's your publishable jey obtained form strip, for testing use testing key
const STRIPE_PUBLISHABLE = 'pk_test_3OsmC1VOHhYxu6vyzpXxK2Cv';

// this will be the route to hit on the server after getting token from stripe
const PAYMENT_SERVER_URL = ' http://localhost:4001/photos/payment';
const CURRENCY = 'EUR';

export default class Payment extends React.Component {

    state = {
        info: [],
    }
    componentDidMount() {
        this.handleFind();
    }
    handleFind = () => {
        let info = JSON.parse(localStorage.getItem('orderInfo')) || []
        this.setState({ info })
        console.log({ info })
    }
    emptyOrder = () => {
        // const confirm = window.confirm('Are you sure you want to remove the item from the cart?')
        // if (confirm) {
        localStorage.removeItem('orderInfo')
        localStorage.removeItem('photo')
        this.props.history.push('/home')

        // }
    }
    calculateTotal = () => {
        let total = 15
        JSON.parse(localStorage.getItem('photo')).map((ele) => { total += ele.quantity * 85 })
        return total

    }
    fromEuroToCent = amount => amount * 100;

    successPayment = data => {
        alert('Payment Successful');
        console.log(data);
        this.emptyOrder();

    };

    errorPayment = data => {
        debugger
        alert('Payment Error');
        console.log(data);
    };

    onToken = (description) => token => {
        axios.post(PAYMENT_SERVER_URL,
            {
                orderInfo: JSON.parse(localStorage.getItem('orderInfo')),
                total: this.calculateTotal(),
                stripe: {
                    source: token.id,
                    currency: CURRENCY,
                    amount: this.fromEuroToCent(this.calculateTotal())
                }
            })
            .then(this.successPayment)
            .catch(this.errorPayment);
    }
    render() {
        let { info } = this.state
        return (
            <div style={styles.block}>
                <span>

                    <p style={styles.text}>Name: </p> <em> {info.name} {info.surname}</em>


                    <p style={styles.text}>Shipping Address: </p> <em> {info.address}</em>

                    <p style={styles.text}>Complement: </p> <em> {info.complement}</em>

                    <p style={styles.text}>City: </p> <em> {info.city}</em>
                    <p style={styles.text}>State/Province: </p> <em> {info.state_province}</em>

                    <p style={styles.text}>Country: </p> <em> {info.country}</em>
                    <p style={styles.text}>Postcode:</p> <em> {info.postcode}</em>

                    <p style={styles.text}>Mobile: </p> <em> {info.mobile}</em>

                    <p style={styles.text}>Email: </p> <em> {info.email}</em>
                    <p style={styles.text}>Total: </p> <em> {this.calculateTotal()}</em>

                </span>

                <span>
                    <StripeCheckout
                        amount={this.fromEuroToCent(this.calculateTotal())}
                        token={this.onToken(this.calculateTotal())}
                        currency={CURRENCY}
                        stripeKey={STRIPE_PUBLISHABLE}
                    />
                </span>
            </div>
        )
    }
}
const styles = {
    block: {
        margin: '0em 20em',
        height: '75vh',
        display: 'grid',
    },
    text: {
        fontSize: 'large    '
    },
}




