import ProductItem from '@/components/Shop/ProductItem';
import { ProductsSection } from '@/components/Shop/ProductsStyle';

function Products() {
  return (
    <ProductsSection>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="Test" price={7} description="First product" />
      </ul>
    </ProductsSection>
  );
}

export default Products;
