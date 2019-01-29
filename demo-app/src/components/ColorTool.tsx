import React from 'react';

interface ColorToolProps{
    colors: string[];
}
interface ColorToolState{
    color: string;
    newcolor: string[];
    [ x: string ]: any;
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {
    
    state = {
        color: '',
        newcolor: this.props.colors.slice(),
    };

    /* Code above runs:
    constructor(props: ColorToolProps){
        super(props);

        this.state ={
            color:'',
        };
    } 
    */

    change = ({ target: { name, value, type } }: React.ChangeEvent<HTMLInputElement>) => {
        // class arrow function. Using event handling, ALWAYS use arrow function. 
        // not valid JS but used for proper binding of "this" for event handlers.
        this.setState({
            [ name ]: type === 'number' ? Number(value) : value,
        }, 
        () => {
            console.log(this.state);
        }
        );
    }
    addColor = () =>{
        this.setState(
            {
            colors: this.state.newcolor.concat(this.state.color),
            color:'',
        }
        );
    }
    render (){
    return <>
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            {this.state.newcolor.map( (color) => <li key={color} >{color}</li>)}
        </ul>
        <form>
            <div>
                <label htmlFor="color-input">New Color</label>
                <input type="type" id="color-input" name="color" value={this.state.color} onChange={this.change} />
            </div>
                <button type="button" onClick={this.addColor}>Add Color</button>
        </form>
        </>;
    }
};