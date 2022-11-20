import ProductItem from '@/components/Shop/ProductItem';
import { ProductsSection } from '@/components/Shop/ProductsStyle';
import { ProductType } from '@/components/Shop/types';

const DUMMY_PRODUCTS: ProductType[] = [
  {
    id: 'p1',
    title: 'My First Book',
    price: 6,
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    title: 'My Second Book',
    price: 7,
    description: 'The second book I ever wrote',
  },
  {
    id: 'p3',
    title: 'My Third Book',
    price: 8,
    description: 'The third book I ever wrote',
  },
];

function Products() {
  return (
    <ProductsSection>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </ProductsSection>
  );
}

export default Products;
