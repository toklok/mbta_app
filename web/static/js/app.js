// Import dependencies
import "phoenix_html";
import { Socket } from "phoenix";
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js'

require('/home/jcurtis/mbta_app/web/static/css/app.scss')

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);
