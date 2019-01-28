import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/CarTool';
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
    <>
    
    <HelloWorld />
    <CarTool />
    
    </>,
    document.querySelector('#root'),
);