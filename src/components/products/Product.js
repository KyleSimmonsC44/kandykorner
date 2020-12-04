import "./Product.css";
import React, { useContext, useRef, useEffect } from "react";
import { CustomerCandyContext, CustomerCandyProvider } from "../cart/CustomerCandyProvider";
import { ProductContext } from "./ProductProvider";

export function Product({ product, productType }) {
  const amount = useRef(null);
  const { addCustomerCandy, customerCandy } = useContext(CustomerCandyContext);

  return (
    <section className="product">
      <h3 className="product__name">{product.name}</h3>
      <div className="product__price">Cost: $ {product.price}</div>
      <p className="product__productType">Type: {productType.type}</p>
      <label for="amount">How many would you like:</label>
      <div className="flexOption">
        <select name="amount" id={product.id} ref={amount}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="addButton">
        <button
          type="submit"
          id={product.id}
          onClick={(evt) => {
            evt.preventDefault(); // Prevent browser from submitting the form
            const customerId = parseInt(localStorage.getItem("kandy_customer"));
            const productId = parseInt(product.id);
              addCustomerCandy({
                customerId,
                productId,
                amount: parseInt(amount.current.value),
              });
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

