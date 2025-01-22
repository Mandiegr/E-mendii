import { styled } from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FavoriteItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; 
  cursor: pointer;
`;

export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeartIcon = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
`;

export const CartButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #888;
`;
