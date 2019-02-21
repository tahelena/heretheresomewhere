import React from 'react';
import axios from 'axios';


export default class Home extends React.Component {
    state = {
        i: 0, allHome: []
    }

    async componentDidMount() {

        this.findHome();
    }
    findHome = async () => {
        const url = "http://localhost:4001/photos/"
        try {

            const allHome = await axios.get(url);
            if (!allHome.error) {
                debugger
                this.setState({ allHome: allHome.data })

            }
        }
        catch (error) {
            debugger
        }
    }
    nextImage = () => {
        let { i, allHome } = this.state;
        if (i < allHome.length - 1) {
            i++
            this.setState({ i })
        }
    }
    prevImage = () => {
        let { i } = this.state;
        if (i !== 0) {
            i--
            this.setState({ i })
        }
    }
    render() {
        let { i, allHome } = this.state, { prevImage, nextImage } = this;
        if (allHome.length > 0) {
            return (
                <div style={styles.slideContainer}>
                    <span onClick={prevImage} >
                        <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/back.png' alt='' />
                    </span>
                    <span>
                        <img style={styles.image} src={allHome[i].img_url} alt={allHome[i].name} />
                    </span>
                    <span onClick={nextImage} >
                        <img style={styles.icon} src='https://res.cloudinary.com/tahelena/image/upload/v1549908824/PhotoProject/icons/right-arrow.png' alt='' />
                    </span>
                </div>
            )
        }
        else {
            return null
        }
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