import React from 'react';
import axios from 'axios';
import UploadImages from './UploadImages';

export default class AdminProd extends React.Component {
    state = {
        value: '', place: '',
        placeID: '', places: [], name: '', portrait: false
    }
    async componentDidMount() {
        this.findCat();
    }
    findCat = async () => {
        var url = "http://localhost:4001/places/"
        try {
            const res = await axios.get(url);
            this.setState({ places: res.data })
        }
        catch (error) {
            debugger
        }
        console.log(this.state.places)
    }
    handleSelect = e => {
        let { placeID } = this.state
        console.log('target value ====>', e.target.value)
        this.setState({ placeID: e.target.value }, () => {
            // console.log(this.state.placeID)
        })
    }
    handleChange = e => {
        let { name } = this.state
        this.setState({ 'name': e.target.value }, () => {
            console.log('handle name', this.state.name)
        })
    }
    handlePortrait = () => {
        this.setState({ portrait: !this.state.portrait }, () => {
            console.log('handle portrait', this.state)
        })
    }
    getData = imgInfo => {
        this.setState({ ...imgInfo })
    }
    handleSubmit = async () => {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait, public_id } = this.state
        let obj = { name, img_url, camera, model, aperture, fStop, ISO, createDate, placeID, portrait, public_id }
        for (let key in obj) {
            if (!obj[key] && obj[key] !== false) {
                return alert('Missing required info!' + key)
            }
        }

        console.log(this.state)
        let url = 'http://localhost:4001/photos/add'
        try {
            debugger
            const add = await axios.post(url, {
                name,
                img_url,
                camera,
                model,
                aperture,
                fStop,
                ISO,
                lens,
                createDate,
                placeID,
                portrait,
                public_id
            })
            if (!add.data.error) {
                alert('image added to the database')
            } else {
                alert('something went wrong ...')
            }
            this.setState({
                name: '',
                img_url: '',
                camera: '',
                model: '',
                aperture: '',
                fStop: '',
                ISO: '',
                lens: '',
                createDate: '',
                placeID: '',
                portrait: false
            })
        }
        catch (error) {
            debugger
        }
    }


    render() {

        let { places, placeID, categories } = this.state
        return (
            <span>
                <div style={styles.table}>
                    <h2>Add picture</h2>
                    <label> Name
                        <input style={styles.input}
                            onChange={this.handleChange}
                            name='name'
                            value={this.state.name}
                            placeholder='name'
                        />

                    </label>
                    <label> Portrait
                    <input onChange={this.handlePortrait} type="checkbox" name="portrait" value={this.state.portrait} /></label>
                    <label>Sets</label>
                    <select onClick={this.handleSelect}> <option />
                        {
                            places.map((ele, i) => {
                                return <option
                                    key={i}
                                    value={ele._id}  >
                                    {ele.place}
                                </option>
                            })
                        }
                    </select>
                    <UploadImages
                        getData={this.getData}
                        {...this.state}
                    />
                    <button onClick={this.handleSubmit}
                        style={styles.button} >Submit</button>
                </div>
            </span>
        )
    }
}
const styles = {
    table: {
        position: 'relative',
        width: 'fit-content',
        margin: '5% 35%',
        background: 'white',
        border: '1px solid rgb(0, 0, 0)',
        display: 'grid',
        padding: '1em 5em 2em 5em',
    },
    input: {
        width: '100%',
        margin: '1em 0',
        height: '2em',
    },
    button: {
        backgroundColor: 'lightgray',
        color: 'black',
        padding: '8px 31px',
        borderRadius: '3px',
        border: '1px solid black',
        position: 'relative',
        top: '16px',
    },
    cat: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        fontSize: 'larger',
        textAlign: 'center',
    },
}