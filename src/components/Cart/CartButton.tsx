import { CartButtonBadgeSpan, CartButtonButton } from "@/components/Cart/CartButtonStyle";
import { useAppDispatch, useAppSelector } from "@/hooks/store-hooks";
import { toggle } from "@/store/uiSlice";

function CartButton() {
  const dispatch = useAppDispatch();
  const isCartVisible = useAppSelector((state) => state.ui.isCartVisible)

  const toggleCartHandler = () => {
    dispatch(toggle());
  }

  return (
    <CartButtonButton onClick={toggleCartHandler}>
      <span>My Cart</span>
      <CartButtonBadgeSpan>1</CartButtonBadgeSpan>
    </CartButtonButton>
  )
}

export default CartButton;