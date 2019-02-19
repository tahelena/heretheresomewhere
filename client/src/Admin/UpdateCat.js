import React from 'react';
import axios from 'axios';
import AdminProd from './AdminProd';
export default class UpdateCat extends React.Component {
    state = {
        category: '', places: [], newplace: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleUpdate = async (id, newplace) => {
        let url = 'http://localhost:4001/places/update'
        try {
            await axios.post(url, {
                id: id,
                newplace: newplace,
            })
            this.props.findCat()
            this.setState({ id: '', newplace: '' })
        }
        catch (error) {
            debugger
        }
    }

    render() {
        let { places, newplace } = this.state
        return (
            <div>

                <input
                    style={styles.input}
                    onChange={this.handleChange}
                    name='newplace'
                    value={this.state.newplace}
                    placeholder='update category'
                />
                <button
                    style={styles.boxButton}
                    onClick={() => this.handleUpdate(this.props.ele._id, newplace)}>
                    Update
                </button>

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
        border: 'solid #9E9E9E',
        display: 'grid',
        gridTemplateRows: '2fr 3fr 2fr',
        padding: '1em 4em',
        alignItems: 'center',
        margin: '6em'
    },
    box: {
        position: 'relative',
        width: 'fit-content',
        border: 'solid #9E9E9E',
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