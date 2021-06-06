import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggelAction } from "../../store/toggelReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cartSlice.totalQuantity);

  const toggelHandler = () => {
    dispatch(toggelAction.toggel());
  };
  return (
    <button className={classes.button} onClick={toggelHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
