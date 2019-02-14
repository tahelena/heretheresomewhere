import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div style={styles.navbar}>
                <span style={styles.bar}>
                    <div               >
                        <NavLink to="/"
                            style={styles.activeStyle}>
                            home
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to="/about"
                            style={styles.activeStyle}>
                            about
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to="/portifolio"
                            style={styles.activeStyle}>
                            portifolio
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to="/places"
                            style={styles.activeStyle}>
                            places
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to="/portrait"
                            style={styles.activeStyle}>
                            portrait
                            </NavLink>
                    </div>
                </span>
                <span>
                    <div
                        style={styles.contactCont} >
                        <a style={styles.contact} href="tahnluiz@gmail.com">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/closed-envelope.png" alt='email icon' />
                            tahnluiz@gmail.com</a>
                    </div>
                    <div>
                        <a style={styles.contact} href="https://twitter.com/luizformiga">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/twitter.png" alt='twitter icon' />
                            @luizformiga</a>
                    </div>
                    <div>
                        <a style={styles.contact} href="https://www.instagram.com/luizformiga/">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/instagram.png" alt='instagram icon' />
                            @luizformiga</a>
                    </div >
                </span>
            </div>
        )
    }
}
const styles = {
    bar: {
        fontSize: 'xx-large',

    },
    navbar: {
        display: 'block',
        width: '27vh',
        height: '83%',
        background: 'rgba(251, 250, 250, 0.95)',
        padding: '2em 0em 1.5em 6em',
        color: 'black',
        zIndex: '10',
        borderRadius: '5px',
        borderStyle: 'outset',
        left: '1em',
        top: '5em',

    },
    icon: {
        height: '1em',
        padding: '1em',
    },
    activeStyle: {
        color: 'black',
        textDecoration: 'none',
        lineHeight: '2em',
    },
    contact: {

    },
    contactCont: {

    }
}