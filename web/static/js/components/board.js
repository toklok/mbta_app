import React from 'react';
import axios from 'axios';
import { csvParse } from 'd3';
import Listing from './departure-list';
import sortBy from 'lodash.sortby';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://cors-anywhere.herokuapp.com/http://developer.mbta.com/lib/gtrtfs/Departures.csv';
        this.state = {
          loading: true,
          csvData: []
        };
        this.sortTrainDestination = this.sortTrainDestination.bind(this);
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


    sortTrainDestination(dest) {
      let sortedArray = [];
      //We sort with the Lodash utility, send the results to an array and then return the new state.
      sortBy(this.state.csvData,  (o) => { if (o.Destination === ''+ dest +'') sortedArray.push(o)}  );
      return this.setState({ csvData: sortedArray });
    }

    render() {
        return (
          <div>
            <h1 className="boarding-h1">MBTA Live Train Departures</h1>
            <button onClick={ () => {this.sortTrainDestination('Rockport') }}>Click Here</button>
            <ul>
            {
              this.state.csvData.map((key, index) => {
                return (
                <Listing key={ index } timestamp={ key.TimeStamp } origin={ key.Origin } trip={ key.Trip } destination={ key.Destination } status={ key.Status }/>
              )})
            }
            </ul>
          </div>
            )
    }
}

export default Board;
