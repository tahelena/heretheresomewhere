import React from 'react'
import widgetStyle from './widgetStyle';

export default class UploadImages extends React.Component {
    state = {
        imgInfo: ''
    }

    uploadWidget = () => {

        window.cloudinary.openUploadWidget({
            cloud_name: 'tahelena',
            upload_preset: 'photo_project',
            tags: ['hts'],
            stylesheet: widgetStyle
        },
            async (error, result) => {
                debugger
                if (error) {
                    debugger
                } else if (this.props.name !== '' && this.props.placeID !== '') {
                    debugger
                    const imgInfo = {
                        portrait: this.props.portrait,
                        name: this.props.name,
                        placeID: this.props.placeID,
                        img_url: result[0].secure_url,
                        camera: result[0].image_metadata.Make,
                        model: result[0].image_metadata.Model,
                        aperture: result[0].image_metadata.ExposureTime,
                        fStop: result[0].image_metadata.FNumber,
                        ISO: result[0].image_metadata.ISO,
                        lens: result[0].image_metadata.Lens,
                        createDate: result[0].image_metadata.CreateDate,
                        public_id: result[0].public_id
                    }
                    this.setState({ ...imgInfo }, () => {
                        console.log('=================> this state', this.state.imgInfo)
                    })
                    this.props.getData({ ...imgInfo })

                } else {
                    alert('Some information is missing. Are you sure that you gave a name and/or selected a place?')
                }
            })
    }
    handleClear = e => {
        this.setState({ name: '', img_url: '', camera: '', model: '', aperture: '', fStop: '', ISO: '', lens: '', createDate: '', placeID: '' })
    }
    render() {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, createDate, placeID } = this.state
        return (
            <div>
                <div style={styles.table}>
                    <button
                        onClick={this.uploadWidget} > add picture
                    </button>
                </div>
                <img onClick={this.handleClear} style={styles.iconX} src='https://res.cloudinary.com/tahelena/image/upload/v1549908823/PhotoProject/icons/cancel-music.png' alt='' />
                <div>

                    <span>Image information:
                         <ul>
                            <li style={styles.li}>name: {name}</li>
                            <li style={styles.li}>camera:  {camera}</li>
                            <li style={styles.li}>model: {model}</li>
                            <li style={styles.li}>aperture: {aperture}</li>
                            <li style={styles.li}>f-stop: {fStop}</li>
                            <li style={styles.li}>ISO: {ISO}</li>
                            <li style={styles.li}>lens: {lens}</li>
                            <li style={styles.li}>picture: <img style={styles.img} src={img_url} alt={name} /></li>
                        </ul>

                    </span>
                </div>
            </div>
        )
    }
}
const styles = {
    table: {
        position: 'relative',
        width: '20em',
        margin: '5% 35%',
    },
    img: {
        maxHeight: '10em'
    },
    li: {
        listStyle: 'none'
    },
    iconX: {
        height: '1em',
        padding: '1em',
        right: '-18em',
        position: 'relative'
    },
}
