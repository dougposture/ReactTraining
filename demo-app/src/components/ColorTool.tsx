import React from 'react';

import { ColorForm } from '../components/ColorForm';

interface ColorToolProps{
    colors: string[];
}
interface ColorToolState{
    colors: string[];
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    state = {
        colors: this.props.colors.slice(),
    };
    addColor = (color: string) =>{
        this.setState(
            {
            colors: this.state.colors.concat(color),
        }
        );
    }
    render (){
    return <>
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            {this.state.colors.map( (color) => <li key={color} >{color}</li>)}
        </ul>
        <ColorForm buttonText="Add Color" onSubmitColor={this.addColor} />
        </>;
    }
};