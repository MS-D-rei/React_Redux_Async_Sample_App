import Card from '@/components/UI/Card';
import {
  ProductItemActionsDiv,
  ProductItemLI,
  ProductItemPriceDiv,
} from '@/components/Shop/ProductItemStyle';

interface ProductItemProps {
  title: string;
  price: number;
  description: string;
}

function ProductItem({ title, price, description }: ProductItemProps) {
  return (
    <ProductItemLI>
      <Card>
        <header>
          <h3>{title}</h3>
          <ProductItemPriceDiv>${price.toFixed(2)}</ProductItemPriceDiv>
        </header>
        <p>{description}</p>
        <ProductItemActionsDiv>
          <button>Add to Cart</button>
        </ProductItemActionsDiv>
      </Card>
    </ProductItemLI>
  );
}

export default ProductItem;
