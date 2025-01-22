import { styled } from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export const ImageGallery = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative; 
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  border: 1px solid #ccc;
`;

export const ProductInfo = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

export const Dropdown = styled.select`
  padding: 10px;
  margin-bottom: 20px;
`;

export const AddToBagButton = styled.button`
  background-color: #d9d34d;
  color: white;
  border: none;
  padding: 15px 20px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
 
  &:hover {
    background-color: #9c9930dd;
  }
`;

export const RelatedProducts = styled.div`
  margin-top: 40px;
`;

export const RelatedItem = styled.div`
  text-align: center;
  margin: 10px;
  flex: 1;
  min-width: 200px;
`;

export const RelatedImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border: 1px solid #ccc;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute; 
  bottom: 50px;
  right: 10px; 
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export const DiscountedPrice = styled.span`
  color: red;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
`;
