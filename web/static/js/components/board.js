import React from 'react';
import axios from 'axios';
import { csvParse } from 'd3-dsv';
import Listing from './departure-list';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://cors-anywhere.herokuapp.com/http://developer.mbta.com/lib/gtrtfs/Departures.csv';
        this.state = {
          csvData: []
        };
    }

    componentDidMount() {
        axios.get(this.rootURL)
            .then((response) => {
              this.setState({
                csvData: csvParse(response.data)
              })
            })
    }

    render() {
        return (
            <div>
                <Listing />
            </div>
            )
    }
}

export default Board;
