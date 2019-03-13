import React from 'react'


export default class CartProducts extends React.Component {

    calculateTotal = () => {
        let total = 0
        JSON.parse(localStorage.getItem('photo')).map((ele) => { total += ele.quantity * 85 })
        return total
    }

    render() {

        let { photo, handleRemoveItem, index, handleIncreaseQty, handleDecreaseQty } = this.props
        return (
            <div style={styles.item}>
                <span>
                    <img style={styles.image} src={photo.img_url} alt={photo.alt} />
                </span>
                <span style={styles.text}> </span>
                <span>
                    <button style={styles.remove} value='remove' onClick={() => handleRemoveItem(index)} >
                        remove </button>
                </span>
                <span>
                    <div style={styles.qty} >
                        {photo.quantity}
                    </div>
                </span>
                <span style={styles.addSub}>
                    <button style={styles.button} value='add' onClick={() => handleIncreaseQty(index)} >
                        + </button>
                    <button style={styles.button} value='subtract' onClick={() => handleDecreaseQty(index)} >
                        - </button>
                </span>

                <span style={styles.cost} >
                    €{photo.quantity * 85}.00
                </span>
            </div>
        )
    }
}
const styles = {
    item: {
        display: 'grid',
        gridTemplateColumns: '10% 55% 15% 5% 3% 14%',
        gridTemplateRows: 'auto',
        alignItems: 'center',
    },

    image: {
        alignSelf: 'center',
        height: '5em',
        overflow: 'hidden',
        width: '5em',
        margin: '0',
        objectFit: 'cover',
    },

    text: {
        marginLeft: '1vh',
    },
    remove: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.8)',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        textDecoration: 'none',
        fontVariant: ' all-small-caps',
        borderRadius: '6px'
    },
    qty: {
        // height: '3em',
        // width: '3em',
        // alignItems: 'center',
        // justifyItems: 'center',
    },
    addSub: {
        display: 'flex',
        flexDirection: 'column',
    },
    cost: {
        textAlign: 'center',
    },
    button: {
        margin: '0.4vh',
        borderRadius: '50%'
    }
}