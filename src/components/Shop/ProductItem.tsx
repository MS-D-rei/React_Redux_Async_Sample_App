import Card from '@/components/UI/Card';
import {
  ProductItemActionsDiv,
  ProductItemLI,
  ProductItemPriceDiv,
} from '@/components/Shop/ProductItemStyle';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { addItemToCart } from '@/store/cartSlice';

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

function ProductItem({ id, title, price, description }: ProductItemProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const addItemToCartHandler = () => {
    dispatch(addItemToCart({
      id: id,
      title: title,
      price: price,
      description: description,
    }));
  }

  return (
    <ProductItemLI>
      <Card>
        <header>
          <h3>{title}</h3>
          <ProductItemPriceDiv>${price.toFixed(2)}</ProductItemPriceDiv>
        </header>
        <p>{description}</p>
        <ProductItemActionsDiv>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </ProductItemActionsDiv>
      </Card>
    </ProductItemLI>
  );
}

export default ProductItem;
