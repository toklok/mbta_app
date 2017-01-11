import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.rootURL = 'https://cors-anywhere.herokuapp.com/http://developer.mbta.com/lib/gtrtfs/Departures.csv';
    }

    componentDidMount() {
        axios.get(this.rootURL)
            .then((response) => {
                console.log(response);
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
