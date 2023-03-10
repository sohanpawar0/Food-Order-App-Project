import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
   //templete string and 2 digit of no k lia 
   import { useContext } from "react";
   import CartContext from "../../store/cart-context";

const MealItem = (props) => {
   const cartCtx=   useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;//to access dynamicaly data by user and 2 desimal no
    const addToCartHandler = amount =>{
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price

      });

    };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description }>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
<MealItemForm onAddToCart = {addToCartHandler}/>
      </div>
    </li>
  );
};
export default MealItem;
