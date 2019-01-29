import React from 'react';

import { Car } from '../models/Car';

interface CarFormProps {
    onAddCar: (car: Car) => void;
    buttonText?: string;
}

interface CarFormState {
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    [x: string]: any;
}

export class CarForm extends React.Component <CarFormProps, CarFormState> {

    static defaultProps = {
        buttonText: "Submit Car",

    };
    state = {
        make: '',
        model: '',
        year: 0,
        color: '',
        price: 0,
    };
 
    addCar = () => {
        const newCar = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            price: this.state.price
          };
        this.props.onAddCar(newCar);

        this.setState({
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0,
        });
    };
    render(){
        return <form>
        <div>
            <label htmlFor="car-make">Make</label>
            <input type="type" id="car-make" name="make" 
                value={this.state.make} />
            
            <label htmlFor="car-model">Model</label>
            <input type="type" id="car-model" name="model" 
                value={this.state.model} />
            
            <label htmlFor="car-year">Year</label>
            <input type="number" id="car-year" name="year" 
                value={this.state.year} />
            
            <label htmlFor="car-color">Color</label>
            <input type="type" id="car-color" name="color" 
                value={this.state.color} />
            
            <label htmlFor="car-price">Price</label>
            <input type="number" id="car-price" name="price" 
                value={this.state.price} />
        </div>
            <button type="button" onClick={this.addCar}>{this.props.buttonText}</button>
    </form>
    };

}