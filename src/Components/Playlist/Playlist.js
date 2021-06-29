import React from 'react';
import ReactDOM from 'react-dom';
import Tracklist from '../Tracklist/Tracklist'
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <h6>Tracklist / component</h6> 
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;