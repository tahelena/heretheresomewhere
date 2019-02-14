import React from 'react';
import Modal from 'react-awesome-modal';

export default class PopUpPortrait extends React.Component {
    state = {
        visible: false, display: 'none'
    }
    openModal() {

        this.setState({
            visible: true
        });
    }
    closeModal() {

        this.setState({
            visible: false
        });
    }
    handleClick = () => {
        if (this.state.display === 'none') return this.setState({ display: 'block' })
        this.setState({ display: 'none' })
    }

    render() {
        let { img_url, alt, exif } = this.props
        return (
            <section>

                <img style={styles.image} src={img_url} alt={alt} value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="72%" height="86%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}><img style={styles.iconX} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/cancel-music.png' /> </a>
                        <div style={styles.popup}>
                            <span>
                                <img style={styles.imagePopUp} src={img_url} alt={alt} />
                                <p style={{ ...styles.exif, display: this.state.display }}> {exif}</p>
                                <div style={{ ...styles.cartUp, display: this.state.display }}>
                                    <h2>DO YOU LIKE THIS PICTURE?</h2>
                                    <p>A3 print on 300gsm fine art paper </p>
                                    <h3>€85.00</h3>

                                    <button style={styles.button}>add to cart</button>

                                    <p> For other sizes/finishes and digital use contact us</p>
                                    <a href="tahnluiz@gmail.com">tahnluiz@gmail.com</a>

                                </div>
                            </span>
                            <span style={styles.iconColumn} >
                                <img
                                    onClick={this.handleClick}
                                    style={styles.iconCart} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/shopping-cart.png' />
                                <img
                                    onClick={this.handleClick}
                                    style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/image-information-button.png' />

                            </span>
                        </div>
                    </span>
                </Modal>

            </section>
        );
    }
}
const styles = {
    popup: {
        display: 'grid',
        gridTemplateColumns: '93% 7%',
        height: '100%',

    },

    imagePopUp: {

        objectFit: 'scale-down',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'grid',
        margin: '0 auto',
    },
    centralBlock: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        margin: '3em'
    },
    image: {

        alignSelf: 'center',
        height: '20em',
        overflow: 'hidden',
        width: '20em',
        margin: '0',
        objectFit: 'cover',
        padding: '1em 0em',
    },
    iconX: {
        height: '1em',
        padding: '1em',
        right: '0',
        position: 'fixed'
    },
    icon: {
        height: '3em',
        padding: '1em',
        right: '0vh',
        bottom: '0',
        position: 'fixed',
    },
    iconCart: {
        height: '3em',
        padding: '1em',
        bottom: '5em',
        position: 'fixed'
    },
    iconColumn: {
        display: 'flex',
        flexFlow: 'wrap',
        alignItems: 'center',
    },
    exif: {
        display: 'flex',
        background: 'rgba(181, 180, 180, 0.7)',
        padding: '1em',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        // position: 'fixed',
        zIndex: '1000',
        bottom: '1.5vh',
        right: '9em',
        fontsize: 'larger',
    },
    cartUp: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.7)',
        padding: '1em',
        maxWidth: '23%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        // position: 'fixed',
        zIndex: '1000',
        bottom: '6em',
        right: '9em',
        fontsize: 'larger',
    },
    button: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.8)',
        padding: '0.5em 1em',
        width: '40%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontVariant: ' all-small-caps',
        fontSize: 'x-large',
    }
}


