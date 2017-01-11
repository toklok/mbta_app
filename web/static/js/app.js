// Import dependencies
import "phoenix_html";
import { Socket } from "phoenix";
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.js'
require('../css/app.scss');

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
