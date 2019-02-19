import React from 'react';
import axios from 'axios';
import PopUp from './PopUp';

export default class Gallery extends React.Component {
    state = {
        allPhotos: [], placeID: ''
    }
    componentDidMount() {
        this.findImage();
    }
    findImage = async () => {
        const url = `http://localhost:4001/photos/place/${this.props.match.params.place_id}`
        try {
            const allPhotos = await axios.get(url);
            this.setState({ allPhotos: allPhotos.data })
            this.findImage();
        }
        catch (error) {
            debugger
        }
    }
    handleDelete = async (id) => {
        const url = "http://localhost:4001/photos/remove"
        try {
            debugger
            await axios.post(url, { id });
            this.findImage();
        }
        catch (error) {
            debugger
        }
    }
    render() {
        let { allPhotos } = this.state
        return (
            <div>
                <div style={styles.centralBlock}>
                    {
                        allPhotos.map((picture, i) => {
                            return (
                                <PopUp
                                    key={i}
                                    img_url={picture.img_url}
                                    alt={picture.alt}
                                    exif={picture.exif}
                                    handleDelete={this.handleDelete}
                                    id={picture._id}
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