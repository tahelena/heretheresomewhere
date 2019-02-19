import React from 'react'


export default class AddToCart extends React.Component {

    render() {
        let { img_url, alt } = this.props
        return (
            <div style={styles.item}>
                <span>
                    <img style={styles.image} src={img_url} alt={alt} />
                </span>
                <span style={styles.text}>
                    {alt}

                </span>
                <span>
                    <button
                        style={styles.remove}>
                        remove
                    </button>
                </span>
                <span>
                    <input style={styles.input}>

                    </input>

                </span>
                <span style={styles.addSub}>
                    <button
                        style={styles.button}
                    >
                        +
                    </button>
                    <button
                        style={styles.button}
                    >
                        -
                    </button>
                </span>

                <span style={styles.cost}>
                    €85.00
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
        alignItems: 'center'

    },

    image: {
        heigth: '100%',
        width: '100%'
    },

    text: {
        marginLeft: '1vh'
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
    input: {
        height: '3em',
        width: '3em',
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