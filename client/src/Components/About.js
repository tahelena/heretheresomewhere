import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div style={styles.centralBlock}>

                <span style={styles.image}> &nbsp; </span>
                <span style={styles.text}>
                    <div>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut.</p>
                        <p>Congue eu consequat ac felis donec et odio pellentesque diam. Facilisis sed odio morbi quis. Tincidunt arcu non sodales neque sodales. Habitant morbi tristique senectus et netus et malesuada fames ac. Dapibus ultrices in iaculis nunc sed. </p>
                    </div>
                </span>
            </div>
        )
    }
}
const styles = {
    centralBlock: {
        height: '75vh',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'

    },
    image: {
        backgroundImage: 'url("https://res.cloudinary.com/tahelena/image/upload/v1551286296/PhotoProject/IMG_2336.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    },
    text: {
        display: 'flex',
        flexDirection: 'inherit',
        alignItems: 'center',
        padding: '1em',
    }
}
