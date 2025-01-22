import styled from 'styled-components';
import Link from 'next/link';
import { useProducts } from '@/context/productContext';
export default function ProductsInitial() {
  const { products } = useProducts();

  const limitedProducts = products.slice(0, 6);

  return (
    <ProductsContainer>
      <h2>Our Products</h2>
      <ProductGrid>
        {limitedProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link href={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
            <span>${(product.price / 1000).toFixed(2)}</span> 
            </Link>
          </ProductCard>
        ))}
      </ProductGrid>

      <Link href="/products">
        <Button> &gt; View All Products</Button>
      </Link>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #dad9ab;
    margin-top: 2rem;
    border-radius: 2px;
  }
`;

const ProductCard = styled.div`
  width: 200px;
  text-align: center;

  img {
    width: 80%;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #333;
  }

  span {
    font-size: 1.1rem;
    color: #555;
    font-weight: bold;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  background-color: #d9d34d;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
