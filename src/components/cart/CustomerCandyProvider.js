import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerCandyContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])

    const getCustomerCandy = () => {
        return fetch("http://localhost:8088/orders")
            .then(res => res.json())
            .then(setCustomerCandy)
    }

    const addCustomerCandy = customerCandy => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandy)
        })
            .then(getCustomerCandy)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, addCustomerCandy, getCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}