import React from 'react';
import PopUp from './PopUp';
import axios from 'axios';

export default class GalleryPortraits extends React.Component {
    state = {
        allPortraits: []
    }
    async componentDidMount() {
        this.findPortraits();
    }
    findPortraits = async () => {
        const url = "http://localhost:4001/photos/portrait"
        try {
            const allPortraits = await axios.get(url);
            if (!allPortraits.error) {
                this.setState({ allPortraits: allPortraits.data })
            }
        }
        catch (error) {
            debugger
        }
    }
    handleDelete = async (id) => {
        const bool = window.confirm('Are you sure?')
        if (bool) {
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
    }

    render() {
        let { allPortraits } = this.state
        return (
            <div style={styles.centralBlock}>
                {
                    allPortraits.map((picture, i) => {
                        return (
                            <PopUp
                                handleFind={this.props.handleFind}
                                key={i}
                                img_url={picture.img_url}
                                alt={picture.name}
                                picture={picture}
                                handleDelete={this.handleDelete}
                                id={picture._id}

                            />
                        )
                    })
                }
            </div>
        )
    }
}
const styles = {
    centralBlock: {
        display: 'flex',
        flexFlow: 'wrap',
        alignContent: 'center',
        maxWidth: '100%',
        marginTop: '2em'
    },

}