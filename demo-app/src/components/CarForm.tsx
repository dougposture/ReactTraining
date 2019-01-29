import React from "react";

import { Car } from "../models/Car";

interface CarFormProps {
  onSubmitCar: (car: Car) => void;
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

export class CarForm extends React.Component<CarFormProps, CarFormState> {
  static defaultProps = {
    buttonText: "Submit Car",
    id: null
  };

  state = {
    make: "",
    model: "",
    year: 1900,
    color: "",
    price: 1
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

  submitCar = () => {
    const newCar = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price
    };

    this.props.onSubmitCar(newCar);

    this.setState({
      car: "",
      make: "",
      model: "",
      year: 1900,
      color: "",
      price: 1
    });
  };

  render() {
    return (
      <form id="cars-form">
        <div>
          <label htmlFor="make-input">Make: </label>
          <input
            type="text"
            id="make-input"
            name="make"
            value={this.state.make}
            onChange={this.change}
          />
          <br />
          <br />
          <label htmlFor="model-input">Model: </label>
          <input
            type="text"
            id="model-input"
            name="model"
            value={this.state.model}
            onChange={this.change}
          />
          <br />
          <br />
          <label htmlFor="year-input">Year: </label>
          <input
            type="number"
            id="year-input"
            name="year"
            value={this.state.year}
            onChange={this.change}
          />
          <br />
          <br />
          <label htmlFor="color-input">Color: </label>
          <input
            type="text"
            id="color-input"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
          <br />
          <br />
          <label htmlFor="price-input">Price: </label>
          <input
            type="number"
            id="price-input"
            name="price"
            value={this.state.price}
            onChange={this.change}
          />
          <button type="button" onClick={this.submitCar}>
            {this.props.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
