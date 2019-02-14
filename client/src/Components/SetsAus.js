import React from 'react';
import { NavLink } from 'react-router-dom';

export default class SetsAus extends React.Component {

    render() {
        return (
            <div>
                <div style={styles.centralBlock}>
                    <span style={styles.image}>
                        <NavLink
                            style={styles.button}
                            to='/gallery/australia'>
                            <h1>Australia</h1>
                            <h2>Long drive</h2>
                            <p> July 2016 - Jan 2017</p>
                        </NavLink>
                    </span>
                    <span style={styles.text}>
                        <div>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Velit aliquet sagittis id consectetur purus ut. In pellentesque massa placerat duis. Vitae justo eget magna fermentum. </p>
                            <p> Adipiscing commodo elit at imperdiet.
                             Tellus in metus vulputate eu scelerisque felis imperdiet proin. Orci sagittis eu volutpat odio facilisis mauris. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.</p>
                            <p> Lorem ipsuetium aenean pharetra magna aquam faucibus purus in massa tempor nec feugiat nisl. Faucibus et molestie ac feugiat. Sed euismod nisi porta lorem mollis aliquam ut porttitor.
                            Viverra nibh cras pulvinar mattis nunc. Purus semper eget duis at tellus. </p>
                        </div>
                    </span>
                </div>

            </div>
        )
    }
}
const styles = {
    centralBlock: {
        height: '75vh',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'

    },
    image: {
        backgroundImage: 'url("https://res.cloudinary.com/tahelena/image/upload/v1549908925/PhotoProject/pictures/places/DSC_0185.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        display: 'flex',
        flexDirection: 'inherit',
        alignItems: 'center',
        padding: '1em',
    },
    button: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.4)',
        padding: '1em',
        width: '40%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        textDecoration: 'none'
    }
}
