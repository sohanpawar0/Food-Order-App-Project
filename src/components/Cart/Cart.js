import { useContext } from "react";

import CartItem from "./CartItem";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
// import Modal from "../UI/Modal";
// state and reduser both are hooks to manage state

const Cart = (props) => {
 const order=()=>{
  alert("tq for order")
 }
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; // enterd amount by user and  add 2 desimal nu.
  const hasItems = cartCtx.items.length > 0;

  
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount: 1 });
    // cartCtx.addItem(item);
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}//to CartItem
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Ammount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={order}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
