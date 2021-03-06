import React from "react";

import { Car } from "../models/Car";

import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";

interface CarTableProps {
  cars: Car[];
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  editCarId: number;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

export const CarTable = ({
  cars,
  onDeleteCar,
  onEditCar,
  editCarId,
  onSaveCar,
  onCancelCar
}: CarTableProps) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        car.id === editCarId ? (
          <CarEditRow
            key={car.id}
            car={car}
            onSaveCar={onSaveCar}
            onCancelCar={onCancelCar}
          />
        ) : (
          <CarViewRow
            key={car.id}
            car={car}
            onDeleteCar={onDeleteCar}
            onEditCar={onEditCar}
          />
        )
      )}
    </tbody>
  </table>
);