import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { ProductList } from "../products/ProductList";
import { ProductProvider } from "../products/ProductProvider";
import "../location/Location.css";
import { ProductTypeProvider } from "../ProductType/ProductTypeProvider";
import { EmployeeList } from "../employees/EmployeeList";
import { EmployeeProvider } from "../employees/EmployeeProvider";
import { EmployeeForm } from "../employees/EmployeeForm"

export const ApplicationViews = (props) => {
  return (
    <>
      <article className="locations">
        <LocationProvider>
          <Route
            exact
            path="/locations"
            render={(props) => <LocationList {...props} />}
          />
        </LocationProvider>
      </article>
      <article className="products">
        <ProductProvider>
          <ProductTypeProvider>
            <Route
              exact
              path="/products"
              render={(props) => <ProductList {...props} />}
            />
          </ProductTypeProvider>
        </ProductProvider>
      </article>
      <article className="employees">
        <EmployeeProvider>
          <LocationProvider>
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />

            <Route
              exact
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
          </LocationProvider>
        </EmployeeProvider>
      </article>
    </>
  );
};


