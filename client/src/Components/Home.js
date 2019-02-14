import React from 'react';
import { slideHome } from './images';


export default class Home extends React.Component {
    state = {
        index: 0
    }
    nextImage = () => {
        let { index } = this.state;
        if (index < slideHome.length - 1) {
            index++
            this.setState({ index })
        }
    }
    prevImage = () => {
        let { index } = this.state;
        if (index !== 0) {
            index--
            this.setState({ index })
        }
    }
    render() {
        let { index } = this.state, { prevImage, nextImage } = this;
        return (
            <div style={styles.slideContainer}>
                <span onClick={prevImage}>
                    <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/back.png' />
                </span>
                <span>
                    <img style={styles.image} src={slideHome[index]} />
                </span>
                <span onClick={nextImage}>
                    <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/right-arrow.png' />
                </span>
            </div>
        )
    }
}

const styles = {
    slideContainer: {
        height: '80vh',
        display: 'grid',
        gridTemplateColumns: '5% 90% 5%',
        alignItems: 'center',
        justifyItems: 'center',

    },
    image: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        height: '75vh',
        margin: '0',
        width: '100%',
        objectFit: 'scale-down'
    },
    icon: {
        height: '2em',

    }

}