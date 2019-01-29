import React from 'react';

import { Car } from '../models/Car';
import { CarEditRow } from '../components/CarEditRow';

interface CarViewRowProps {
    car: Car,
    onDeleteCar: (carId: number) => void,
    onEditCar: (carID: number) => void,
}
export const CarViewRow = ({car, onDeleteCar, onEditCar}: CarViewRowProps) => {
    
    const deleteCar = () => onDeleteCar(car.id as number);
    const editCar = () => onEditCar(car.id as number);
   return <tr>
        <td>{car.id}</td>
        <td> {car.make}</td>
        <td> {car.model}</td>
        <td> {car.year}</td>
        <td> {car.color}</td>
        <td> {car.price}</td>
        <td><button type="button" onClick={deleteCar} >Delete</button></td>
        <td><button type="button" onClick={editCar} >Edit</button></td>
    </tr>
    }