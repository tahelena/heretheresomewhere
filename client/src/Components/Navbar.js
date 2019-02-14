import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        let display = this.props.show ? 'block' : 'none';
        return (
            <div style={{ ...styles.navbar, display: display }}>
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
                    <details>
                        <summary style={styles.activeStyle}>
                            portifolio
                        </summary>
                        <div style={styles.hidden}>
                            <NavLink to="/sets/australia"
                                style={styles.activeStyle}
                            >
                                sets
                            </NavLink>
                        </div>
                        <div style={styles.hidden}>
                            <NavLink to="/gallery/portrait"
                                style={styles.activeStyle}
                            >
                                portrait
                            </NavLink>
                        </div>
                    </details>
                </span>
                <span style={styles.contactCont}>
                    <div>
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
        // borderStyle: 'outset',
        left: '0vh',
        top: '8.5vh',
        position: 'fixed'

    },
    icon: {
        height: '1em',
        marginRight: '1vh'

    },
    activeStyle: {
        color: 'black',
        textDecoration: 'none',
        lineHeight: '2em',
    },
    hidden: {
        textIndent: '2em'
    },
    contact: {

    },
    contactCont: {
        lineHeight: '3vh',
        bottom: '5em',
        position: 'fixed'
    }
}