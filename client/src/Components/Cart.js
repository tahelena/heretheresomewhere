import React from 'react';
import Modal from 'react-awesome-modal';

export default class Cart extends React.Component {
    state = {
        visible: false
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

    render() {

        return (
            <section>

                <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/supermarket.png' alt='cart icon' value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="72%" height="86%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}><img style={styles.iconX} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/cancel-music.png' /> </a>
                        <div style={styles.popup}>
                            <span>
                                <div>Item</div>
                                <div>Qty</div>
                                <div>Cost</div>
                            </span>
                            <span></span>
                            <span>
                                <div>Subtotal</div>
                                <div>VALUE</div>

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
        display: 'flex',
        alignItems: 'center',
        margin: '0',
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
        height: '2em',
        padding: '0',
        left: '6em',
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
    cartUp: {
        display: 'block',
        background: 'rgba(181, 180, 180, 0.7)',
        padding: '1em',
        maxWidth: '23%',
        textAlign: 'center',
        margin: '0 auto',
        color: 'black',
        position: 'fixed',
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


