import Card from '@/components/UI/Card';
import CartItem from './CartItem';

function Cart() {
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, price: 6, totalPrice: 18 }}
        />
      </ul>
    </Card>
  );
}

export default Cart;
