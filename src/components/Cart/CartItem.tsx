import {
  CartItemActionsDiv,
  CartItemDetailsDiv,
  CartItemLI,
  CartItemPriceDiv,
  CartItemQuantityDiv,
} from '@/components/Cart/CartItemStyle';
import { CartItemType } from '@/components/Cart/types'
import { useAppDispatch } from '@/hooks/store-hooks';
import { increaseItemInCart, removeItemFromCart } from '@/store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const {id, title, quantity, totalPrice, price } = item;
  const dispatch = useAppDispatch();

  const increaseItemHandler = () => {
    dispatch(increaseItemInCart(id));
  }

  const decreaseItemHandler = () => {
    dispatch(removeItemFromCart(id));
  }

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
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </CartItemActionsDiv>
      </CartItemDetailsDiv>
    </CartItemLI>
  );
}

export default CartItem;
