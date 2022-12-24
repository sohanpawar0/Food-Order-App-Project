import classes from './Card.module.css'

// props.children to wrrap all items inside a card like cotainer 
/** <card>
 * {all items from .map method}
 * </card>
 */

const Card =props =>{
    return <div className={classes.card} > {props.children}

    </div>
}
export default Card;