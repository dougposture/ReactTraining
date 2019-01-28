import React from 'react';

const cars = [
    {
        id: 0, 
        make: 'Dodge', 
        model: 'Stratus', 
        year: 2004, 
        color: 'Silver', 
        price: 7500
    },
    {
        id: 1,
        make: 'Scion',
        model: 'xB',
        year: 2010, 
        color: 'Silver', 
        price: 12500
    }
    ];

export const CarTool = () => {
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
                {cars.map(car => (
                <tr key={car.id}>
                    <td>{car.id}</td>
                    <td> {car.make}</td>
                    <td> {car.model}</td>
                    <td> {car.year}</td>
                    <td> {car.color}</td>
                    <td> {car.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>

};