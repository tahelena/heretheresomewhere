import React from 'react';
import axios from 'axios';
import UploadImages from './UploadImages';
import widgetStyle from './widgetStyle';

export default class AdminProd extends React.Component {
    state = {
        value: '', place: '', placeID: '', places: [], name: '', portrait: false, home: false
    }
    async componentDidMount() {
        this.findCat();
    }
    findCat = async () => {
        try {
            const res = await axios.get("http://localhost:4001/places/");
            this.setState({ places: res.data })
        }
        catch (error) { debugger }
    }
    handleSelect = e => {
        this.setState({ placeID: e.target.value })
    }

    handleChange = e => {
        this.setState({ name: e.target.value })
    }
    handlePortrait = () => {
        this.setState({ portrait: !this.state.portrait }, () => { console.log(this.state.portrait) })
    }
    handleHome = () => {
        this.setState({ home: !this.state.home }, () => { console.log(this.state.home) })
    }

    handleSubmit = async () => {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID, portrait, public_id, home } = this.state
        let obj = { name, img_url, camera, model, aperture, fStop, ISO, createDate, placeID, portrait, public_id, home }
        for (let key in obj) {
            if (!obj[key] && obj[key] !== false) {
                return alert('Missing required info: ' + key)
            }
        }
        let url = 'http://localhost:4001/photos/add'
        try {
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
                public_id,
                home
            })

            !add.data.error ? alert('image added to the database') : alert('something went wrong, please try again...');

        }
        catch (error) { debugger }
        this.handleClear()
    }

    uploadWidget = () => {

        window.cloudinary.openUploadWidget({
            cloud_name: 'tahelena',
            upload_preset: 'photo_project',
            tags: ['hts'],
            stylesheet: widgetStyle
        },
            async (error, result) => {

                if (error) {

                } else if (this.state.name !== '' && this.state.placeID !== '') {
                    debugger
                    const imgInfo = {

                        home: this.state.home,
                        portrait: this.state.portrait,
                        name: this.state.name,
                        placeID: this.state.placeID,
                        img_url: result[0].secure_url,
                        camera: result[0].image_metadata.Make,
                        model: result[0].image_metadata.Model,
                        aperture: result[0].image_metadata.ExposureTime,
                        fStop: result[0].image_metadata.FNumber,
                        ISO: result[0].image_metadata.ISO,
                        lens: result[0].image_metadata.Lens,
                        createDate: result[0].image_metadata.CreateDate,
                        public_id: result[0].public_id,

                    }
                    this.setState({ ...imgInfo })

                } else {
                    alert('Some information is missing. Are you sure that you gave a name and/or selected a place?')
                }
            })
    }


    handleClear = () => {
        this.setState({ name: '', img_url: '', camera: '', model: '', aperture: '', fStop: '', ISO: '', lens: '', createDate: '', placeID: '', home: false, portrait: false })
    }

    render() {

        let { places } = this.state
        return (
            <div style={styles.table}>

                <span style={styles.box}>

                    <h2 style={{ textAlign: 'center' }}>Add picture</h2>

                    <label> Name
                        <input style={styles.input} onChange={this.handleChange} name='name' value={this.state.name} placeholder='name' />
                    </label>

                    <label> Portrait
                    <input onChange={this.handlePortrait} type="checkbox" name="portrait" value={this.state.portrait} />
                    </label>

                    <label> Home picture
                    <input onChange={this.handleHome} type="checkbox" name="home" value={this.state.home} />
                    </label>

                    <label>Set</label>

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
                        {...this.state}
                        handleClear={this.handleClear}
                        handleSubmit={this.handleSubmit}
                        uploadWidget={this.uploadWidget}
                    />

                </span>

            </div>
        )
    }
}
const styles = {
    table: {
        display: 'flex',
        flexDirection: 'column',

    },
    box: {
        placeSelf: 'center',
        width: 'fit-content',
        border: '1px solid rgb(0, 0, 0)',
        display: 'grid',
        padding: '1em 5em 2em 5em',
        margin: '4em'
    },
    input: {
        width: '100%',
        margin: '1em 0',
        height: '2em',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'lightgray',
        padding: '8px 31px',
        borderRadius: '3px',
        border: '1px solid',
        justifySelf: 'center'
    },
    cat: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        fontSize: 'larger',
        textAlign: 'center',
    },
}