import React from 'react';

import { Car } from '../models/Car';

interface CarToolProps {
    cars: Car[];
}

export const CarTool = (props: CarToolProps) => {
    return <>
        <header>
            <h1>Car Tool</h1>
        </header>

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
                {props.cars.map(Car => 
                <tr key={Car.id}>
                    <td>{Car.id}</td>
                    <td> {Car.make}</td>
                    <td> {Car.model}</td>
                    <td> {Car.year}</td>
                    <td> {Car.color}</td>
                    <td> {Car.price}</td>
                </tr>
            )}
            </tbody>
        </table>
        </>

};