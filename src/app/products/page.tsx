'use client';

import Navbar from '@/components/common/NavBar';
import Pbar from '@/components/common/category';
import Link from 'next/link';
import { useProducts } from '@/context/productContext';
import { ProductsContainer, ProductGrid, ProductCard } from './product.details';

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <>
      <Navbar />
      <Pbar />
      <ProductsContainer>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <Link href={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                {product.discount ? (
                  <>
                    <span style={{ textDecoration: 'line-through', color: 'red' }}>
                      {`Rp. ${product.price.toLocaleString()}`}
                    </span>
                    <span>{`Rp. ${(product.price * (1 - product.discount / 100)).toLocaleString()}`}</span>
                  </>
                ) : (
                  <span>{`Rp. ${product.price.toLocaleString()}`}</span>
                )}
              </Link>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsContainer>
    </>
  );
}

