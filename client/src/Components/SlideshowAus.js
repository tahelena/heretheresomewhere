import React from 'react';
import { slideSetAus } from './images';


export default class SlideshowAus extends React.Component {
    state = {
        index: 0
    }
    nextImage = () => {
        let { index } = this.state;
        if (index < slideSetAus.length - 1) {
            index++
            this.setState({ index })
        }
    }
    prevImage = () => {
        let { index } = this.state;
        if (index != 0) {
            index--
            this.setState({ index })
        }
    }
    render() {
        let { index } = this.state, { prevImage, nextImage } = this;
        return (
            <div style={styles.slideContainer}>
                <span onClick={prevImage}>
                    <input style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/back.png' />
                </span>
                <span>
                    <input style={styles.image} src={slideSetAus[index]} />
                </span>
                <span onClick={nextImage}>
                    <input style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/right-arrow.png' />
                </span>
            </div>
        )
    }
}

const styles = {
    slideContainer: {
        height: '75vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
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
    },
    icon: {
        height: '2em',

    }

}