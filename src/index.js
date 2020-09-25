import React from 'react';
import {render} from 'react-dom';
import 'normalize.css'
import App from './App';
import {GlobalStyle} from './global-styles'

render(<>
    <GlobalStyle />
    <App /></>, 
    document.getElementById('root'));
