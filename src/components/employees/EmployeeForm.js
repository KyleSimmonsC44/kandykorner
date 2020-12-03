import React, { useContext, useRef, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css";

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const location = useRef(null);
  const pay = useRef(null)
  const manager = useRef(null)
  const fullTime = useRef(null)

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getLocations();
  }, []);

  const constructNewEmployee = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: name.current.value,
        pay: parseInt(pay.current.value),
        locationId,
        manager: manager.current.checked,
        fullTime: fullTime.current.checked,        
      }).then(() => props.history.push("/employees"));
    }
  };

  return (
    <form className="employeeForm">
        <div className="testForm">
            <div className="testDiv">
      <h2 className="employeeForm__title">New Employee</h2>

      <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input
              type="text"
              id="employeeName"
              ref={name}
              required
              autoFocus
              className="form-control"
              placeholder="Employee name"
              />
          </div>
        </fieldset>
      <fieldset>
          <div className="form-group">
            <label htmlFor="employeePay">Hourly Rate: </label>
            <input
              type="text"
              id="employeePay"
              ref={pay}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Pay"
              />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select
              defaultValue=""
              name="location"
              ref={location}
              id="employeeLocation"
              className="form-control"
              >
              <option value="0">Select a location</option>
              {locations.map((e) => (
                  <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="checkBox">
            <input
             type="checkbox"
             name="manager"
             ref={manager}
             id="employeeManager"
             className="check"
             >
            </input>
            <label htmlFor="manager">Management</label>
          </div>
        </fieldset>
        <fieldset>
          <div className="checkBox">
            <input
             type="checkbox"
             name="fullTime"
             ref={fullTime}
             id="employeeFullTime"
             className="check"
             >
            </input>
            <label htmlFor="fullTime">Full Time</label>
          </div>
        </fieldset>
        <div className="button">
          <button
            type="submit"
            onClick={(evt) => {
              console.log("when will this display?")
                evt.preventDefault(); // Prevent browser from submitting the form
                constructNewEmployee();
            }}
            className="btn btn-primary"
            >
            Save Employee
          </button>
            </div>
        </div>
      </div>
    </form>
  );
};