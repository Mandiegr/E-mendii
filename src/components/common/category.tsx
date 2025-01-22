'use client';
import styled from 'styled-components';
import { useProducts } from '@/context/productContext';

export default function Category() {
  const { setFilterCategory } = useProducts(); 

  const handleCategoryClick = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <Header>
      <Nav>
        <NavLinks>
          <a onClick={() => handleCategoryClick('dress')}>Dress</a>
          <a onClick={() => handleCategoryClick('bottons')}>Bottons</a>
          <a onClick={() => handleCategoryClick('t-shirt')}>T-shirts</a>
          <a onClick={() => handleCategoryClick('sales')}>Sales</a>
          <a onClick={() => handleCategoryClick('all')}>All Products</a>
        </NavLinks>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #e6e6ba;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
  }
`;
