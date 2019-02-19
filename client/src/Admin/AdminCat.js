import React from 'react';
import axios from 'axios';
import AdminProd from './AdminProd';
import UpdateCat from './UpdateCat';
import SeeAllPhotos from './SeeAllPhotos';
export default class AdminCat extends React.Component {
    state = {
        place: '', places: [], newPlace: ''
    }
    async componentDidMount() {
        this.findCat();
    }
    findCat = async () => {
        var url = "http://localhost:4001/places/"
        try {
            const places = await axios.get(url);
            this.setState({ places: places.data })
        }
        catch (error) {
            debugger
        }
        console.log(this.state.places)
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            console.log(this.state)
        })
    }
    handleSubmit = async (e) => {
        let { place } = this.state
        e.preventDefault();
        let url = 'http://localhost:4001/places/add'
        try {
            await axios.post(url, {
                place: this.state.place,
            })
            this.findCat()
            this.setState({ place: '' })
        }
        catch (error) {
            debugger
        }

    }
    handleRemove = async (e, id) => {
        e.preventDefault();

        let url = 'http://localhost:4001/places/remove'
        try {
            await axios.post(url, {
                id
            })
            console.log(id)
            this.findCat()
        }
        catch (error) {
            debugger
            console.log({ error })
        }
    }
    handlePopUp = async () => {
        let { placeID } = this.state

        console.log(this.state)
        let url = 'http://localhost:4001/photos/placeID/'
        try {
            const add = await axios.get(url, {
                placeID: placeID
            })
        }
        catch (error) {
            debugger
        }
    }

    render() {
        let { places, newPlace } = this.state
        return (
            <div style={styles.outsideTable}>
                <span style={styles.box}>
                    <h2 style={styles.h2}>Sets</h2>
                    <span style={styles.cat} >
                        {
                            places.map((ele, i) => {
                                return <div
                                    style={styles.p}
                                    placeID={ele._id}
                                    key={i}>
                                    {ele.place}

                                    <button
                                        style={styles.boxButton}
                                        onClick={(e) => this.handleRemove(e, ele._id)}>
                                        Remove
                                </button>
                                    <UpdateCat
                                        findCat={this.findCat}
                                        ele={ele}
                                    />
                                    <SeeAllPhotos

                                        placeID={this.placeID}
                                    />
                                </div>
                            })
                        } </span>
                </span>
                <form style={styles.table}
                    onSubmit={this.handleSubmit}>
                    <h2 style={styles.h2}>Add Set</h2>
                    <input
                        style={styles.input}
                        onChange={this.handleChange}
                        name='place'
                        value={this.state.place}
                        placeholder='new place'
                    />
                    <button style={styles.button}>Add Places</button>
                </form>


            </div>
        )
    }
}
const styles = {
    outsideTable: {
        display: 'flex',
        gridTemplateRows: '1fr 1fr',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '8px 21px',
        borderRadius: '2px',
        border: '1px solid black',
        position: 'relative',
    },
    boxButton: {
        backgroundColor: 'whitesmoke',
        margin: '8px 21px',
        color: 'black',
        borderRadius: '20px',
        border: '1px solid black',
        position: 'relative',
    },
    table: {
        position: 'relative',
        width: 'fit-content',
        border: '1px solid black',
        display: 'grid',
        gridTemplateRows: '2fr 3fr 2fr',
        padding: '1em 4em',
        alignItems: 'center',
        margin: '6em'
    },
    box: {
        position: 'relative',
        width: 'fit-content',
        display: 'grid',
        margin: '2em',
        padding: '1em 4em',
        alignItems: 'center',
    },
    input: {
        height: '20%'
    },
    h2: {
        marginBottom: '0.2em',
        marginTop: '1.5em',
    },
    cat: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        fontSize: 'larger',

        textAlign: 'center',

    },
    p: {
        border: 'solid 1px',
        padding: '1vh'
    }

}