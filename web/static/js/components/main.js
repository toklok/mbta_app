import React from 'react';
import axios from 'axios';
import { csvParse } from 'd3-dsv';

class Main extends React.Component {
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
              const csvData = csvParse(response.data);
              this.setState({
                csvData: csvData
              })
            })
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
            )
    }
}

export default Main;
