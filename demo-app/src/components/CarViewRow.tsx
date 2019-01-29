import React from "react";

import { Car } from "../models/Car";
import { CarEditRow } from "./CarEditRow";

interface CarViewRowProps {
  car: Car;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
}

export const CarViewRow = ({
  car,
  onDeleteCar,
  onEditCar
}: CarViewRowProps) => (
  <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button" onClick={() => onDeleteCar(car.id as number)}>
        Delete
      </button>
      <button type="button" onClick={() => onEditCar(car.id as number)}>
        Edit
      </button>
    </td>
  </tr>
);