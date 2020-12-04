import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { ProductList } from "../products/ProductList";
import { ProductContext, ProductProvider } from "../products/ProductProvider";
import "../location/Location.css";
import { ProductTypeProvider } from "../ProductType/ProductTypeProvider";
import { EmployeeList } from "../employees/EmployeeList";
import { EmployeeProvider } from "../employees/EmployeeProvider";
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerCandyContext, CustomerCandyProvider } from "../cart/CustomerCandyProvider";
import { UserContext, UserProvider } from "../auth/UserProvider";
import { CartList } from "../cart/CartList"

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
            <CustomerCandyProvider>

            <Route
              exact
              path="/products"
              render={(props) => <ProductList {...props} />}
              />
              </CustomerCandyProvider>
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
      <article className="carts">
        <CustomerCandyProvider>
          <ProductProvider>
            <UserProvider>
            <Route
              exact
              path="/cart"
              render={(props) => <CartList {...props} />}
            />
            </UserProvider>
          </ProductProvider>
        </CustomerCandyProvider>
      </article>
    </>
  );
};


