import React from 'react';
import axios from 'axios';
import Modal from 'react-awesome-modal';

export default class SeeAllPhotos extends React.Component {
    state = {
        visible: false, value: '', category: '',
        categoryID: '', categories: [], name: ''
    }

    openModal() { this.setState({ visible: true }); }
    closeModal() { this.setState({ visible: false }); }

    // async componentDidMount() {
    //     this.findCat();
    // }
    // findCat = async () => {
    //     var url = "http://localhost:4001/categories/"
    //     try {
    //         const categories = await axios.get(url);
    //         this.setState({ categories: categories.data.allCategories })
    //     }
    //     catch (error) {
    //         debugger
    //     }
    //     console.log(this.state.categories)
    // }
    // handleSelect = e => {
    //     let { categoryID } = this.state
    //     console.log('target value ====>', e.target.value)
    //     this.setState({ categoryID: e.target.value }, () => {
    //         console.log(this.state.categoryID)
    //     })
    // }


    render() {
        let { categoryID } = this.props
        return (
            <section>

                <button value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="72%" height="86%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <span>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}><img style={styles.iconX} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/cancel-music.png' alt='' /> </a>
                        <div style={styles.popup}>


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
        gridTemplateColumns: '5% 88% 5%',
        height: '100%',

    },

    imagePopUp: {

        objectFit: 'scale-down',
        width: '99%',
        height: '100%',
        display: 'grid',
        margin: '0 auto',
        maxHeight: '100%'
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
        position: 'fixed',
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

