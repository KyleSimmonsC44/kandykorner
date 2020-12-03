import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import {Employee} from "./Employee"
import "./Employee.css"

export const EmployeeList = ({history}) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getLocations()
        .then(getEmployees)
    }, [])


    return (
        <>
            <h1>Employees</h1>
                <div className="buttonDiv">
            <button onClick={() => history.push("/employees/create")}>
                Add Employee
            </button>
                </div>

            <div className="test">

                {
                    employees.map(employee => {
                        const location = locations.find(l => l.id === employee.locationId)
                        return <Employee key={employee.id} employee={employee} location={location} />
                    })
                }
                </div>
        </>
    )
}