import React from 'react';
import { imgPortraits } from './images';
import PopUpPortrait from './PopUpPortrait'
export default class Portraits extends React.Component {

    render() {
        return (
            <div>
                <div style={styles.centralBlock}>
                    {
                        imgPortraits.map((picture, i) => {
                            return (
                                <PopUpPortrait
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
        marginTop: '100px',
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