import React from 'react';
import ReactDOM from 'react-dom';

// always separate node modules from custom pulls.

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { HelloWorld } from './components/HelloWorld';

const colorList = ['blue', 'green', 'orange', 'purple'];

const carList = [
    {
        id: 0, 
        make: 'Dodge', 
        model: 'Stratus', 
        year: 2004, 
        color: 'Silver', 
        price: 7500
    },
    {
        id: 1,
        make: 'Scion',
        model: 'xB',
        year: 2010, 
        color: 'Silver', 
        price: 12500
    }
    ];

ReactDOM.render(
    <>

    <HelloWorld />
    <CarTool cars={carList}/>
    <ColorTool colors={colorList}/>
    
    </>,
    // react.createElement(HelloWorld),
    // react.createElement(ColorTool, {colors: colorList}, null});
    document.querySelector('#root'),
);