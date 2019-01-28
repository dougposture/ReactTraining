import React from 'react';

const colors = ['blue', 'green', 'orange', 'purple'];

export const ColorTool = () => {
    return<>
    <header>
        <h1>Color Tool</h1>
    </header>
    <ul>
        {colors.map( (color) => <li key={color} > {color}</li>)}
    </ul>
    </>
}