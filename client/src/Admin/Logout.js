import React from 'react'

export default class Logout extends React.Component {
    componentDidMount() {
        debugger
        localStorage.removeItem('authToken');
        // localStorage.clear()
        this.props.isLoggedIn(false)
    }
    render() {
        return (
            null
        )
    }
}