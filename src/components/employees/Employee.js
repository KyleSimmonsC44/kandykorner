import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location}) => (
    <div className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <div className="employee__pay">${employee.pay} per hour</div>
        <div className="employee__manager">{`${employee.manager ? 'Is' : 'Is not' }`} a manager</div>
        <div className="employee__fullTime">{`${employee.fullTime ? 'Is' : 'Is not' }`} a full time employee</div>
    </div>
)


