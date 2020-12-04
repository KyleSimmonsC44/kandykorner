import React, { useContext, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { UserContext } from "../auth/UserProvider"
import { ProductContext } from "../products/ProductProvider"
import { Cart } from "../cart/Cart"

export const CartList = ({history}) => {
    const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext)
    const { user, getUser } = useContext(UserContext)
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        getUser()
        .then(getProducts)
        .then(getCustomerCandy)
    }, [])


    return (
        <>
            <h1>Cart</h1>
                

            <div className="test">
                { 
                    customerCandy.map(cc => {
                        const currentUser = parseInt(localStorage.getItem("kandy_customer"))
                        const product = products.find(product => product.id === cc.productId)
                        if(cc.customerId === currentUser){
                            return <Cart key={cc.id} item={cc} user={currentUser} product={product} />
                        }
                    })
                }
                </div>
        </>
    )
}