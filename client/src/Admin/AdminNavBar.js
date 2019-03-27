import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

export default class AdminNavBar extends React.Component {


    render() {
        let myStyle = {}
        if (!localStorage.authToken) {
            myStyle = { display: 'none' }
        }

        return (
            <section style={{ ...styles.navbar, ...myStyle }} >

                <div >
                    <NavLink
                        activeStyle={styles.active}
                        to="/admin/admincat"
                        style={styles.activeStyle}>
                        manage places
                            </NavLink>
                </div>
                <div>
                    <NavLink
                        activeStyle={styles.active}
                        to="/admin/adminprod"
                        style={styles.activeStyle}>
                        add pictures
                            </NavLink>
                </div>
                <div >
                    <Logout
                        isLoggedIn={this.props.isLoggedIn} />

                </div>

            </section>
        )
    }
}
const styles = {
    navbar: {
        display: 'flex',
        top: '10vh',
        position: 'fixed',
        width: '100%',
        justifyContent: 'flex-end',
    },
    active: {
        textDecoration: 'underline'
    },
    activeStyle: {
        color: 'black',
        textDecoration: 'none',
        fontSize: 'x-large',
        padding: '0.3em'
    }
}
