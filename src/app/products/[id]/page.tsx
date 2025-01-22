'use client'

import { notFound } from 'next/navigation';
import Navbar from '@/components/common/NavBar';
import { useCart } from '@/context/cartContext';
import { useProducts } from '@/context/productContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Container, MainContent, ImageGallery, MainImage, FavoriteButton, ProductInfo, ProductTitle, Price, DiscountedPrice, OriginalPrice, Description, Dropdown, AddToBagButton, RelatedProducts, RelatedItem, RelatedImage } from './details.styles';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = params;
  const { products, toggleFavorite } = useProducts();
  const product = products.find((item) => item.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return notFound();
  }

  return (
    <Container>
      <Navbar />
      <MainContent>
        <ImageGallery>
          <MainImage src={product.image} alt={product.name} />
          <FavoriteButton onClick={() => toggleFavorite(product.id)}>
            {products.find((p) => p.id === product.id)?.isFavorite ? (
              <FaHeart color="red" size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
          </FavoriteButton>
          <h2>{product.name}</h2>
        </ImageGallery>
        <ProductInfo>
          <ProductTitle>Checked Duvet Cover Set</ProductTitle>
             <Price>
            {product.discount ? (
              <>
                <DiscountedPrice>
                  R$. {(product.price * (1 - product.discount / 100)).toLocaleString()}
                </DiscountedPrice>
                <OriginalPrice>R$. {product.price.toLocaleString()}</OriginalPrice>
              </>
            ) : (
              `R$. ${product.price.toLocaleString()}`
            )}
          </Price>

          <Description>{product.description}</Description>
          <Dropdown>
            <option>{product.size}</option>
          </Dropdown>
          <AddToBagButton onClick={() => addToCart(product)}>
            Add to cart
          </AddToBagButton>
        </ProductInfo>
      </MainContent>
      <RelatedProducts>
        <h2>Also You May Like</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 3)
            .map((relatedProduct) => (
              <RelatedItem key={relatedProduct.id}>
                <RelatedImage src={relatedProduct.image} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
                <p>${(relatedProduct.price / 1000).toFixed(2)}</p>
              </RelatedItem>
            ))}
        </div>
      </RelatedProducts>
    </Container>
  );
}

