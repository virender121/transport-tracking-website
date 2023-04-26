import React, { useState } from 'react'

const VehicleManagement = () => {
    const [vehicles, setVehicles] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleAddVehicle = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newVehicle = {
            name: formData.get('name'),
            make: formData.get('make'),
            model: formData.get('model'),
            year: formData.get('year')
        }
        setVehicles([...vehicles, newVehicle]);
        e.target.reset();
        setFormSubmitted(true);
    }

    return (
        <div>
            <h2>Vehicle Management</h2>
            {formSubmitted ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle, index) => {
                            return (
                                <tr key={index}>
                                    <td>{vehicle.name}</td>
                                    <td>{vehicle.make}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.year}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <form onSubmit={handleAddVehicle}>
                <div>
                    <label htmlFor="name">NAME </label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                    <label htmlFor="lastname">LAST NAME </label>
                    <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" />
                </div>
                <div>
                    <label htmlFor="phonenumber">Phone </label>
                    <input type="number" id="phonenumber" name="phonenumber" placeholder="Enter your phone number" />
                </div>
                <div>
                    <label htmlFor="address">ADDRESS </label>
                    <textarea id="address" name="address" placeholder="Enter your address"></textarea>
                </div>
                <div>
                    <label htmlFor="city">CITY </label>
                    <input type="text" id="city" name="city" placeholder="Enter your city" />
                </div>
                <div>
                    <label htmlFor="state">STATE/PROVINCE </label>
                    <input type="text" id="state" name="state" placeholder="Enter your state" /><br />
                </div>
                <div>
                    <label htmlFor="pincode">POSTAL/ZIPCODE </label>
                    <input type="text" id="postal code" name="postalcode" placeholder="Enter your postal code" /><br />
                </div>
                <div>
                    <label htmlFor="year">Year: </label>
                    <input type="text" id="year" name="year" placeholder="Enter your year" /><br />
                </div>
                <button type="submit">Add Vehicle</button>
            </form>
            
            )}
        </div>
    )
}

export default VehicleManagement
