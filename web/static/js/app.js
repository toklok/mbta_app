// Import dependencies
import "phoenix_html";
import { Socket } from "phoenix";
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

require('../css/app.scss');

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
