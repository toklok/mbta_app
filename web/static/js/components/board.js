import React from 'react';
import axios from 'axios';
import { csvParse } from 'd3-dsv';
import Listing from './departure-list';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://cors-anywhere.herokuapp.com/http://developer.mbta.com/lib/gtrtfs/Departures.csv';
        this.state = {
          loading: true,
          csvData: []
        };
    }

    componentDidMount() {
        axios.get(this.rootURL)
            .then((response) => {
              this.setState({
                loading: false,
                csvData: csvParse(response.data)
              })
            })
      }

    render() {
        return (

            <ul>
            {
              this.state.csvData.map((key, index) => {
                return (
                <Listing key={ index } timestamp={ key.TimeStamp } origin={ key.Origin } trip={ key.Trip } destination={ key.Destination } status={ key.Status }/>
              )})
            }
            </ul>
          
            )
    }
}

export default Board;
