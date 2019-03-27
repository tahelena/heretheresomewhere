import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class NavBar extends React.Component {
    state = {
        places: []
    }
    async componentDidMount() {
        this.findCat();
    }
    findCat = async () => {
        var url = "http://localhost:4001/places/"
        try {
            const places = await axios.get(url);
            this.setState({ places: places.data })
        }
        catch (error) { debugger }
    }

    render() {
        let display = this.props.show ? 'block' : 'none';
        let { places } = this.state


        return (
            <div style={{ ...styles.navbar, display: display }} >
                <span style={styles.bar}>
                    <div >
                        <NavLink
                            activeStyle={styles.active}

                            onClick={this.props.hideShow}
                            to="/home"
                            style={styles.activeStyle}>
                            home
                            </NavLink>
                    </div>
                    <div>
                        <NavLink
                            activeStyle={styles.active}
                            onClick={this.props.hideShow}
                            to="/about"
                            style={styles.activeStyle}>
                            about
                            </NavLink>
                    </div>
                    <div style={styles.gallery}>
                        <NavLink
                            activeStyle={styles.active}
                            onClick={this.props.hideShow}
                            to="/gallery/portrait"
                            style={styles.gallery}>
                            portrait
                            </NavLink>
                    </div>
                    <div style={styles.activeStyle}>
                        {
                            places.map((ele, i) => {
                                return <NavLink
                                    activeStyle={styles.active}
                                    to={`/gallery/place/${ele._id}`}
                                    onClick={this.props.hideShow}
                                    style={styles.gallery}
                                    key={i}>
                                    <div >{ele.place}</div>
                                </NavLink>
                            })
                        }
                    </div>
                </span>
                <span style={styles.contactCont}>
                    <div>
                        <a style={styles.contact} href="tahnluiz@gmail.com">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/closed-envelope.png" alt='email icon' />
                            tahnluiz@gmail.com
                            </a>
                    </div>
                    <div>
                        <a style={styles.contact} href="https://twitter.com/luizformiga">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/twitter.png" alt='twitter icon' />
                            @luizformiga
                            </a>
                    </div>
                    <div>
                        <a style={styles.contact} href="https://www.instagram.com/luizformiga/">
                            <img style={styles.icon} src="https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/instagram.png" alt='instagram icon' />
                            @luizformiga
                            </a>
                    </div >
                </span>
            </div>
        )
    }
}
const styles = {
    gallery: {
        color: 'black',
        textDecoration: 'none',
        lineHeight: '2em',
        fontSize: 'x-large',
        textIndent: '1em',
    },
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
        zIndex: '1000000',
        borderRadius: '5px',
        // borderStyle: 'outset',
        left: '0vh',
        top: '8.5vh',
        position: 'fixed',

    },
    icon: {
        height: '1em',
        marginRight: '1vh'

    },
    active: {
        textDecoration: 'underline'
    },
    activeStyle: {
        color: 'black',
        textDecoration: 'none',
        lineHeight: '2em',
        fontSize: 'x-large',
        padding: '0.3em'

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