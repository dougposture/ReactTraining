import React from 'react';

interface ColorToolProps{
    colors: string[];
}
interface ColorToolState{
    color: string;
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {
    
    state = {
        color: '',
    };

    /* Code above runs:
    constructor(props: ColorToolProps){
        super(props);

        this.state ={
            color:'',
        };
    } 
    */

    change = (e: React.ChangeEvent<HTMLInputElement>) => {
        // class arrow function. Using event handling, ALWAYS use arrow function. not valid JS but used for proper binding of "this" for event handlers.
        this.setState({
            color:e.target.value,
        });
    }

    render (){
    return <>
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            {this.props.colors.map( (color) => <li key={color} >{color}</li>)}
        </ul>
        <form>
            <div>
                <label htmlFor="color-input">New Color</label>
                <input type="text" id="color-input" value={this.state.color} onChange={this.change} />
            </div>
        </form>
        </>;
    }
};