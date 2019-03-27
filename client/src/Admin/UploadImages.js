import React from 'react'

export default class UploadImages extends React.Component {

    render() {
        let { name, img_url, camera, model, aperture, fStop, ISO, lens, uploadWidget } = this.props
        return (
            <div>
                <div style={styles.table}>
                    <button
                        onClick={uploadWidget} > load picture
                    </button>
                </div>
                <div style={styles.infoBox}>

                    <span>Image information:
                        <ul>
                            <li style={{ listStyle: 'none' }}>name: {name}</li>
                            <li style={{ listStyle: 'none' }}>camera:  {camera}</li>
                            <li style={{ listStyle: 'none' }}>model: {model}</li>
                            <li style={{ listStyle: 'none' }}>shutter speed: {aperture}</li>
                            <li style={{ listStyle: 'none' }}>f-stop: {fStop}</li>
                            <li style={{ listStyle: 'none' }}>ISO: {ISO}</li>
                            <li style={{ listStyle: 'none' }}>lens: {lens}</li>
                            <li style={{ listStyle: 'none' }}>picture: <img style={{ maxHeight: '10em' }} src={img_url} alt={name} /></li>
                        </ul>
                        <span style={styles.buttons} >
                            <button onClick={this.props.handleClear} style={styles.button}  > clear </button>
                            <button onClick={this.props.handleSubmit} style={styles.button} >Submit</button>
                        </span>
                    </span>




                </div>
            </div>
        )
    }
}
const styles = {
    infoBox: {
        border: '.5px solid gray',
        padding: '1em'
    },
    table: {
        position: 'relative',
        width: '20em',
        margin: '5% 35%',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: '8px 31px',
        borderRadius: '3px',
        border: '1px solid',
        justifySelf: 'center'
    },
}
