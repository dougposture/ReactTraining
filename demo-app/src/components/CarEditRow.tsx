import React from "react";

import { Car } from "../models/Car";

interface CarEditRowProps {
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  car: Car;
}

interface CarEditRowState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [x: string]: any;
}

export class CarEditRow extends React.Component<
  CarEditRowProps,
  CarEditRowState
> {
  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    color: this.props.car.color,
    price: this.props.car.price
  };

  change = ({
    target: { name, value, type }
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        [name]: type === "number" ? Number(value) : value
      },
      () => console.log(this.state)
    );
  };

  saveCar = () => {
    const newCar = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price,
      id: this.props.car.id
    };

    this.props.onSaveCar(newCar);

    this.setState({
      make: "",
      model: "",
      year: 1900,
      color: "",
      price: 1
    });
  };

  cancelCar = () => {
    this.props.onCancelCar();
  };

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td>
          <input
            type="text"
            id="make-input"
            name="make"
            value={this.state.make}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="model-input"
            name="model"
            value={this.state.model}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="year-input"
            name="year"
            value={this.state.year}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="color-input"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="price-input"
            name="price"
            value={this.state.price}
            onChange={this.change}
          />
        </td>
        <td>
          <button type="button" onClick={this.saveCar}>
            Save Car
          </button>
        </td>
        <td>
          <button type="button" onClick={this.cancelCar}>
            Cancel Car
          </button>
        </td>
      </tr>
    );
  }
}
