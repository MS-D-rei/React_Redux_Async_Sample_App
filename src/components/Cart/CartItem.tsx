import {
  CartItemActionsDiv,
  CartItemDetailsDiv,
  CartItemLI,
  CartItemPriceDiv,
  CartItemQuantityDiv,
} from '@/components/Cart/CartItemStyle';
import { CartItemType } from '@/components/Cart/types'

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { title, quantity, totalPrice, price } = item;
  return (
    <CartItemLI>
      <header>
        <h3>{title}</h3>
        <CartItemPriceDiv>
          ${totalPrice.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </CartItemPriceDiv>
      </header>
      <CartItemDetailsDiv>
        <CartItemQuantityDiv>
          x <span>{quantity}</span>
        </CartItemQuantityDiv>
        <CartItemActionsDiv>
          <button>-</button>
          <button>+</button>
        </CartItemActionsDiv>
      </CartItemDetailsDiv>
    </CartItemLI>
  );
}

export default CartItem;
