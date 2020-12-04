import React from "react"
import "./Cart.css"

export const Cart = ({ product, user, item}) => (
    <div className="cart">
        <div className="cart__product">product: {product.name}</div>
        <div className="cart__product">price: ${product.price}</div>
        <div className="cart__pay">Amount: {item.amount}</div>
<div className="car__total">Total: ${product.price*item.amount}</div>
    </div>
)