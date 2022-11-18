import Card from '@/components/UI/Card';
import CartItem from './CartItem';

function Cart() {
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
}

export default Cart;
