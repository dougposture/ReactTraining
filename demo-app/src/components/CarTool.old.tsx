import React, { useState } from "react";

import { Car } from "../models/Car";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

interface CarToolProps {
  cars: Car[];
  editCarId: number;
}

export const CarTool = ({ cars, editCarId}: CarToolProps) => {
  const [car, carId] = useState('');

  const editCar = () =>{
    carId(car);
  }
  addCar = (newCar: Car) => {
    const car = {
      ...newCar,
      id: Math.max(...cars.map(car => car.id as number), 0) + 1
    };

    this.setState({
      cars: cars.concat(car),
      editCarId: -1
    });
  };

  deleteCar = (carId: number) => {
    this.setState({
      cars: cars.filter(car => car.id !== carId),
      editCarId: -1
    });
  };
  editCar = (carId: number) => {
    this.setState({
      editCarId: carId
    });
  };
  cancelCar = () => {
    this.setState({
      editCarId: -1
    });
  };

  saveCar = (car: Car) => {
    const newCars = cars.slice();
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.setState({
      cars: newCars,
      editCarId: -1
    });
  };

  //Class function.
  render() {
    return (
      <>
        <ToolHeader headerText="Car Tool" />
        <CarTable
          cars={this.state.cars}
          onDeleteCar={this.deleteCar}
          onEditCar={this.editCar}
          editCarId={this.state.editCarId}
          onSaveCar={this.saveCar}
          onCancelCar={this.cancelCar}
        />
        <CarForm buttonText="Add Car" onSubmitCar={this.addCar} />
      </>
    );
  }
}
