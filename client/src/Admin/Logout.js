import React from 'react';


export default class Logout extends React.Component {


    handleLogout = () => {
        localStorage.removeItem('authToken');
        this.props.isLoggedIn(false)

    }


    render() {

        return (
            <button onClick={this.handleLogout} style={styles.button} >
                logout </button>
        )
    }
}
const styles = {
    button: {
        color: 'black',
        textDecoration: 'none',
        fontSize: 'x-large',
        fontFamily: 'Josefin Sans, sans-serif',
        borderStyle: 'none',
        backgroundColor: 'white'
    },

}