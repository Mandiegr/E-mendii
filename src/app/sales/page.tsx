
/*'use client';
import styled from 'styled-components';
import Navbar from '@/components/common/NavBar';
import Link from 'next/link';
import { useProducts } from '@/context/productContext';

export default function PromotionsPage() {
    const { products } = useProducts();
  
    const promotionProducts = products.filter(product => product.category === 'sales');
  
    return (
      <>
        <Navbar />
        <Header>
          <h1>Itens em Promoção</h1>
          <p>Não perca essas ofertas incríveis!</p>
        </Header>
        <PromotionsContainer>
          <PromotionGrid>
            {promotionProducts.map((product) => {
              const discountedPrice = product.discount
                ? product.price - (product.price * product.discount) / 100
                : product.price;
  
              return (
                <PromotionCard key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <PriceContainer>
                      {product.discount && (
                        <OriginalPrice>{`R$ ${product.price.toLocaleString()}`}</OriginalPrice>
                      )}
                      <DiscountedPrice>{`R$ ${discountedPrice.toLocaleString()}`}</DiscountedPrice>
                    </PriceContainer>
                  </Link>
                </PromotionCard>
              );
            })}
          </PromotionGrid>
        </PromotionsContainer>
      </>
    );
  }
  

const PromotionsContainer = styled.div`
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const Header = styled.header`
  text-align: center;
  background-color: #e6e6ba;
  color: #333;
  padding: 50px 20px;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }
`;

const PromotionGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PromotionCard = styled.div`
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
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const OriginalPrice = styled.span`
  font-size: 1.1rem;
  color: red;
  text-decoration: line-through;
`;

const DiscountedPrice = styled.span`
  font-size: 1.5rem; 
  color: black;
  font-weight: bold;
`;
*/