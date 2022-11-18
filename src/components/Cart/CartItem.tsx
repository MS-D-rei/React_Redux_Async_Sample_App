import {
  CartItemActionsDiv,
  CartItemDetailsDiv,
  CartItemLI,
  CartItemPriceDiv,
  CartItemQuantityDiv,
} from '@/components/Cart/CartItemStyle';

interface CartItemProps {
  item: { title: string; quantity: number; total: number; price: number };
}

function CartItem({ item }: CartItemProps) {
  const { title, quantity, total, price } = item;
  return (
    <CartItemLI>
      <header>
        <h3>{title}</h3>
        <CartItemPriceDiv>
          ${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
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
