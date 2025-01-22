import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '@/context/cartContext';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Header>
      <Nav>
        <Logo>Mendi Brechó</Logo>

        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/products">Product</Link>
          <Link href="/about">About Us</Link>
          {/**<Link href="/sales">SALE</Link> */}
          <Link href="/favorite">Favorite</Link>
        </NavLinks>

        <Icons>
          <Link href="/cart">
            <CartIcon>
              <FaShoppingCart title="Cart" />
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </CartIcon>
          </Link>
          <Link href="/profile">
            <FaUserCircle title="Profile" />
          </Link>
        </Icons>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9f9f9;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #000000;

    &:hover {
      color: #555;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: #000;

  svg {
    cursor: pointer;

    &:hover {
      color: #555;
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;
