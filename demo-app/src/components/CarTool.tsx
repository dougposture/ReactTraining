import React from 'react';

import { Car } from '../models/Car';
import { ToolHeader } from '../components/Toolheader';
import { CarTable } from '../components/CarTable';
import { CarForm } from '../components/CarForm';
 
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
    addCar = (newCar: Car) =>{

        const car = {
            ...newCar,
            id: Math.max(...this.state.cars.map(cars => cars.id as number), 0) + 1,
        }

        this.setState(
        {
            cars: this.state.cars.concat(newCar),
        }
        );
    } 

    deleteCar = (carId : number) =>{
        this.setState({
            cars: this.state.cars.filter(cars => cars.id !== carId),
          });
    };

    editCar = (cardId: number) =>{
        this.setState({
            
          });
    };

    render(){
    return <>
        <ToolHeader headerText='Car Tool' />
        <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} onEditCar={this.editCar} />
        <CarForm buttonText="Add Car" onAddCar={this.addCar} />
        </>
        
    }
};