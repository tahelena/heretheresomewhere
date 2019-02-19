import React from 'react';

export default class Checkout extends React.Component {
    componentDidMount() {
        this.props.closeModal();
    }
    render() {
        return (
            <span style={styles.table}>
                <div style={styles.dets}>
                    <span style={styles.cels}>
                        <label >First Name <input style={styles.input} type="text" /></label>
                        <label>Last Name <input style={styles.input} type="text" /></label>
                    </span> <span>
                        <label>Shipping Address <input style={styles.input} type="text" /></label>
                    </span><span>
                        <label>Complement <input style={styles.input} type="text" /></label>
                    </span><span>
                        <label>City <input style={styles.input} type="text" /></label>
                        <label>State/Province <input style={styles.input} type="text" /></label>
                    </span><span>

                        <label>Country <input style={styles.input} type="text" /></label>
                        <label>Zip Code <input style={styles.input} type="text" /></label>
                    </span><span>

                        <label>Mobile<input style={styles.input} type="text" /></label>
                    </span><span>

                        <label>email <input style={styles.input} type="text" /></label>
                    </span>
                </div>
                <div style={styles.order}>
                    <h2>Your Order</h2>
                    <span>
                        <div style={styles.popup}>

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
                    <button type="submit" value="Submit" style={styles.button}>Confirm</button>

                </div>
            </span>
        )
    }
}
const styles = {
    table: {
        display: 'grid',
        border: 'solid #9E9E9E',
        padding: '4em',
        alignItems: 'center',
        margin: '7em 12em',
        gridTemplateColumns: '1fr 1fr'
    },
    dets: {
        display: 'grid',
        height: '100%',
        alignItems: 'center',
    },
    cel: {
        padding: '1em'
    },
    input: {
        // width: '32%',
        margin: '1em',
        height: '2em',
    },
    button: {
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        borderRadius: '12px',
        fontSize: 'larger',
        // position: 'fixed',
        right: '20%',
        bottom: '20%',
        zIndex: '0',
    },
    popup: {
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
        // textAlign: 'center',
    },
    cartItems: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '1em',
        background: 'whitesmoke',
    },
    order: {
        displayg: 'grid',
        // margin: '0% 17% 0% 0%',
        textAlign: 'center',
    }
}