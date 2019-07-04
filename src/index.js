import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';


import { createGlobalStyle } from 'styled-components';


import reset from './constants/css/reset';

import boxStyle from './constants/css/boxStyle';
import QuoteBox from './components/quote-box';


const GlobalStyle = createGlobalStyle`${boxStyle}`;

const MOUNT_NODE = document.getElementById('quote-box');

ReactDOM.render(
    
    <Fragment>

        <GlobalStyle/>
        <QuoteBox/>
    </Fragment>
    ,
    MOUNT_NODE
);
