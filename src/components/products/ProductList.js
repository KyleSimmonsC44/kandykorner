import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "../ProductType/ProductTypeProvider";
import { Product } from "./Product";
import "./Product.css";

export const ProductList = () => {
  // This state changes when `getLocations()` is invoked below
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);
  const { products, getProducts } = useContext(ProductContext);

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(() => {
    console.log("LocationList: Initial render before data");
    getProductTypes().then(getProducts);
  }, []);

  /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */

  return (
    <div className="products">
      {products.map((prod) => {
        const productType = productTypes.find(
          (pt) => pt.id === prod.productTypeId
        );

        return (
          <Product key={prod.id} product={prod} productType={productType} />
        );
      })}
    </div>
  );
};
