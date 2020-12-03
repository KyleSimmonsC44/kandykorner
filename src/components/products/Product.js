import React from "react"
import "./Product.css"


export function Product({product, productType}) {
        return (
            <section className="product">
         <h3 className="product__name">{product.name}</h3>
         <div className="product__price">Cost: {product.price}</div>
         <p className="product__productType">Type: {productType.type}</p>
         </section>
        )
   
}