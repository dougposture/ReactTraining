import React from 'react';

import { Car } from '../models/Car';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

interface CarTableProps {
    cars: Car[],
    onDeleteCar: (carId: number) => void,
    onEditCar: (carId: number) => void,
}

export const CarTable = ({cars,onDeleteCar, onEditCar}: CarTableProps) =>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cars.map
                (car => 
                    <CarViewRow 
                        key = {car.id}
                        car = {car}
                        onDeleteCar = {onDeleteCar} 
                        onEditCar = {onEditCar}
                    />
                )   
            }
        </tbody>
    </table>