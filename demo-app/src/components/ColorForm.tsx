import React from 'react';

interface ColorFormProps {
    onSubmitColor: (color: string) => void;
    buttonText?: string;

}

interface ColorFormState {
    color: string;
    [x: string]: any;
}
export class ColorForm extends React.Component <ColorFormProps, ColorFormState> {

    static defaultProps = {
        buttonText: "Submit Color"
    };

    state = {
        color: ''
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
    };

    submitColor = () => {
        this.props.onSubmitColor(this.state.color);

        this.setState({
            color: '',
        });
    };

    render(){
        return( <form>
                <div>
                    <label htmlFor="color-input">New Color</label>
                    <input type="type" id="color-input" name="color" 
                        value={this.state.color} onChange={this.change} />
                </div>
                <button type="button" onClick={this.submitColor}>{this.props.buttonText}</button>
        </form>
        )
    };
}