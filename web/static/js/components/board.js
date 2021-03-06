import React from 'react';
import axios from 'axios';
import {csvParse} from 'd3';
import Listing from './departure-list';
import sortBy from 'lodash.sortby';
import moment from 'moment';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://cors-anywhere.herokuapp.com/http://developer.mbta.com/lib/gtrtfs/Departures.csv';
        this.state = {
            loading: true,
            csvData: [],
            currentDest: []
        };

    }

    uniq(a) {
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }

    componentDidMount() {
        //empty array to contain current destinations
        let destinations = [];
        axios.get(this.rootURL).then((response) => {
            this.setState({
                loading: false,
                hideLoc: false,
                csvData: csvParse(response.data),
                currentDest: sortBy(csvParse(response.data), [(o) => {
                        destinations.push(o.Destination)
                    }
                ])
            }, () => {
                //build array and then on callback, send to state object.
                return this.setState({currentDest: this.uniq(destinations)})
            })
        })
    }

    buildData() {
      axios.get(this.rootURL).then((response) => {
          this.setState({
              loading: false,
              hideLoc: false,
              csvData: csvParse(response.data)
      })
    })
  }

    sortTrainDestination(dest) {
        let sortedArray = [];
        //We sort with the Lodash utility, send the results to an array and then return the new state.
        sortBy(this.state.csvData, (o) => {
            (o.Destination === '' + dest + '')
                ? sortedArray.push(o)
                : this.setState({csvData: []})
        });
        return this.setState({csvData: sortedArray});
    }

    render() {
        return (
            <div>
                <section className="boarding-header">
                    <h1 className="boarding-h1">MBTA Live Train Departures</h1>
                </section>
                <section className={this.state.hideLoc
                    ? 'hidden'
                    : 'boarding-currentTime'}>
                    <span className="last-checked">Last Checked</span>
                    <time className="currentTime">{`${moment().format('h:mm:ss A')}`}</time>
                    <p>Filter By available location:</p>
                </section>
                <button style={{marginTop: '10px', marginLeft: '10px'}} className={this.state.hideLoc
                    ? ''
                    : 'hidden'} onClick={() => { this.buildData() }}>Go Back</button>
                <section className={this.state.hideLoc
                    ? 'hidden'
                    : 'boarding-controls'}>
                    <ul>
                        {this.state.currentDest.map((key, index) => {
                            return (
                                <li className="board-filter" key={index}>
                                    <button className="button-select" onClick={() => {
                                        this.sortTrainDestination(key);
                                        this.setState({hideLoc: true})
                                    }}>{`${key}`}</button>
                                </li>
                            )
                        })
}
                    </ul>
                </section>
                <section className="boarding-listing">
                    <ul>
                        {this.state.csvData.map((key, index) => {
                            return (<Listing key={index} timestamp={`${moment.unix(key.ScheduledTime).format('h:mm:ss A')}`} origin={key.Origin} trip={key.Trip} destination={key.Destination} status={key.Status}/>)
                        })
}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Board;
