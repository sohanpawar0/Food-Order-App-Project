import React from "react";

const CartContext =  React.createContext({
items:[],
totalAmount: 0,
addItem:(item) =>{}, //to add data to cart /remove data to cart
removeItem:(id)=>{}

});
export default CartContext;