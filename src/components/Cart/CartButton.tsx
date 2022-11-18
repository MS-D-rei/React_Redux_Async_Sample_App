import { CartButtonBadgeSpan, CartButtonButton } from "@/components/Cart/CartButtonStyle";

function CartButton() {
  return (
    <CartButtonButton>
      <span>My Cart</span>
      <CartButtonBadgeSpan>1</CartButtonBadgeSpan>
    </CartButtonButton>
  )
}

export default CartButton;