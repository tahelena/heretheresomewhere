import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        user: '', password: ''
    }
    handleChange = e => {
        let { user, password } = this.state
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
        console.log('user', user, 'password', password)

    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let { user, password } = this.state

        let url = 'http://localhost:4001/admin/login'
        try {

            const res = await axios.post(url, {
                username: user,
                password: password,
            })

            localStorage.setItem('authToken', JSON.stringify(res.data.token))
            alert('Welcome back ' + user)
            this.props.isLoggedIn(true)

        }
        catch (error) { debugger }
    }

    render() {

        return (

            <form style={styles.table}
                onSubmit={this.handleSubmit}>
                <h3 style={styles.h3}> Username or email</h3>
                <input
                    style={styles.input}
                    onChange={this.handleChange}
                    name='user'
                    value={this.state.user}
                    placeholder='username'
                />
                <h3 style={styles.h3}> Password</h3>
                <input
                    type='password'
                    style={styles.input}
                    onChange={this.handleChange}
                    name='password'
                    value={this.state.password}
                    placeholder='password'
                />
                <button style={styles.button}>Log in</button>
            </form>
        )
    }
}
const styles = {
    button: {
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '8px 31px',
        borderRadius: '3px',
        border: '1px solid black',
        left: '18%',
        position: 'relative',
        top: '16px',
    },
    table: {
        position: 'relative',
        width: '280px',
        height: '200px',
        border: '1px solid rgb(0, 0, 0)',
        display: 'block',
        margin: '8% 35%',
        paddingLeft: '6em',
        paddingTop: '2em',
        paddingBottom: '6em',
    },
    input: {
        height: '20%'
    },
    h3: {
        marginBottom: '0.3em',
        marginTop: '1.5em',
    }

}