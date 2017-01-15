import React from 'react';
import axios from 'axios';
import { csvParse } from 'd3';
import Listing from './departure-list';
import sortBy from 'lodash.sortby';
import moment from 'moment';

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


    sortTrainDestination(dest) {
      let sortedArray = [];
      //We sort with the Lodash utility, send the results to an array and then return the new state.
      sortBy(this.state.csvData,  (o) => { (o.Destination === ''+ dest +'') ? sortedArray.push(o) : <h1>No Train</h1> }  );
      return this.setState({ csvData: sortedArray });
    }

    render() {
        return (
          <div>
          <section className="boarding-header">
            <h1 className="boarding-h1">MBTA Live Train Departures</h1>
          </section>
          <section className="boarding-controls">
          <button onClick={ () => { this.sortTrainDestination('Rockport') }}>Click Here</button>
          </section>
            <ul>
            {
              this.state.csvData.map((key, index) => {
                return (
                <Listing key={ index } timestamp={ `${moment.unix(key.ScheduledTime).format('h:mm:ss A')}` } origin={ key.Origin } trip={ key.Trip } destination={ key.Destination } status={ key.Status }/>
              )})
            }
            </ul>
          </div>
            )
    }
}

export default Board;
