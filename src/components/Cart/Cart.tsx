import Card from '@/components/UI/Card';
import { useAppSelector } from '@/hooks/store-hooks';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              quantity: cartItem.quantity,
              price: cartItem.price,
              totalPrice: cartItem.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
}

export default Cart;
