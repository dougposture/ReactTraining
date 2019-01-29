import React from 'react';
import { Car } from '../models/Car';
import { CarViewRow } from './CarViewRow';

interface CarTableProps {
    cars: Car[];
    deleteCarHandler: (carId: number) => void,
}

export const CarTable = (props :CarTableProps) =>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.cars.map(car =>
                <CarViewRow key = {car.id} car={car}/>
                )}
        </tbody>
    </table>