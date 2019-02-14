import React from 'react';
import { imgPlaces } from './images';
import PopUp from './PopUp';
export default class GalleryAus extends React.Component {

    render() {
        return (
            <div>
                <div style={styles.centralBlock}>
                    {
                        imgPlaces.map((picture, i) => {
                            return (
                                <PopUp
                                    key={i}
                                    img_url={picture.img_url}
                                    alt={picture.alt}
                                    exif={picture.exif}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const styles = {
    centralBlock: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        // marginTop: '100px',
    },
    image: {
        alignSelf: 'center',
        height: '20em',
        overflow: 'hidden',
        width: '20em',
        margin: '0',
        objectFit: 'cover',
        padding: '2em 0.5em',
    }

}