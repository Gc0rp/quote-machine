import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';

import reset from './constants/css/reset';

import QuoteBox from './components/quote-box'

const GlobalStyle = createGlobalStyle`${reset}`;

const MOUNT_NODE = document.getElementById('quote-box');

ReactDOM.render(
    <QuoteBox />,
    MOUNT_NODE
);
