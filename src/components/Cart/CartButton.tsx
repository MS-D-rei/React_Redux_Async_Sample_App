import { CartButtonBadgeSpan, CartButtonButton } from "@/components/Cart/CartButtonStyle";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import { toggle } from "@/store/uiSlice";

function CartButton() {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggle());
  }

  return (
    <CartButtonButton onClick={toggleCartHandler}>
      <span>My Cart</span>
      <CartButtonBadgeSpan>{cartQuantity}</CartButtonBadgeSpan>
    </CartButtonButton>
  )
}

export default CartButton;