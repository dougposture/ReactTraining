import React from 'react';

import { Car } from '../models/Car';
import { ToolHeader } from '../components/Toolheader';
import { CarTable } from '../components/CarTable';

interface CarToolProps {
    cars: Car[];
}

interface CarToolState {
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    cars: Car[];
    [x: string ]: any;
}

export class CarTool extends React.Component<CarToolProps, CarToolState> {
    state = {
        make: '',
        model: '',
        year: 0,
        color: '',
        price: 0,
        cars: this.props.cars.concat(),
    }

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
    addCar = () =>{

        const newCar = {
            id: Math.max(...this.state.cars.map(car =>car.id), 0) + 1,
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            price: this.state.price
        }

        this.setState(
        {
            cars: this.state.cars.concat(newCar),
            make:'',
            model: '',
            year: 0,
            color: '',
            price: 0,
        }
        );
    }

    deleteCar = (carId : number) =>{
        this.setState({
            cars: this.state.cars.filter(cars => cars.id !== carId),
          });
      
    };

    render(){
    return <>
        <ToolHeader headerText='Color Tool' />
        <CarTable cars={this.state.cars} deleteCarHandler={this.deleteCar}/>
        <form>
            <div>
                <label htmlFor="car-make">Make</label>
                <input type="type" id="car-make" name="make" value={this.state.make} onChange={this.change} />
                
                <label htmlFor="car-model">Model</label>
                <input type="type" id="car-model" name="model" value={this.state.model} onChange={this.change} />
                
                <label htmlFor="car-year">Year</label>
                <input type="number" id="car-year" name="year" value={this.state.year} onChange={this.change} />
                
                <label htmlFor="car-color">Color</label>
                <input type="type" id="car-color" name="color" value={this.state.color} onChange={this.change} />
                
                <label htmlFor="car-price">Price</label>
                <input type="number" id="car-price" name="price" value={this.state.price} onChange={this.change} />
            </div>
                <button type="button" onClick={this.addCar}>Add Car</button>
        </form>
        </>
    }
};