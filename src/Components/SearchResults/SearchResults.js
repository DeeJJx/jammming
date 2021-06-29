import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                 <h2>Results</h2>
                 <h6>TrackList</h6>
            </div>
        )
    }
}

export default SearchResults;