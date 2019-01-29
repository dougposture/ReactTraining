import React from 'react';

import {Car } from '../models/Car';

interface CarEditRowProps {
    onEditCar: (car: Car) => void;
    submitText?: string;
    cancelText?: string;
    cars:Car[];
}

interface CarEditRowState {
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    [x: string]: any;

}

export class CarEditRow extends React.Component<CarEditRowProps, CarEditRowState> {

    static defaultprops = {
        submitText: "Save",
        cancelText: "Cancel",
    };

    state = {
        make: '',
        model: '',
        year: 0,
        color: '',
        price: 0,
        cars: this.props.cars.concat(),

    };
    change = ({ target: { name, value, type } } : React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                [ name ]: type === 'number' ? Number(value) : value,
            },
            () => {
                console.log(this.state);
            },
        );
    }

    editCar = () => {
        const newCar = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            price: this.state.price
          };

        this.props.onEditCar(newCar);
        
        this.setState({
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0,
        });
    };

    cancelCar = (carId: number) =>{
        this.setState({
            cars: this.state.cars.filter(cars => cars.id !== carId),
          });
    }
    
    render(){
        // <label htmlFor="car-id">{this.state.id}</label>

        return <form>
        <div>
            <label htmlFor="car-make">Make</label>
            <input type="type" id="car-make" name="make" 
                value={this.state.make} onChange={this.change} />
            
            <label htmlFor="car-model">Model</label>
            <input type="type" id="car-model" name="model" 
                value={this.state.model} onChange={this.change} />
            
            <label htmlFor="car-year">Year</label>
            <input type="number" id="car-year" name="year" 
                value={this.state.year} onChange={this.change} />
            
            <label htmlFor="car-color">Color</label>
            <input type="type" id="car-color" name="color" 
                value={this.state.color} onChange={this.change} />
            
            <label htmlFor="car-price">Price</label>
            <input type="number" id="car-price" name="price" 
                value={this.state.price} onChange={this.change} />
        </div>
            <button type="button" onClick={this.editCar}>{this.props.submitText}</button>
    </form>
    };
}