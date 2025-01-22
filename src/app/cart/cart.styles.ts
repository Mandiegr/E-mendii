import { styled } from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CartItems = styled.div`
  flex: 1;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const ProductDetailsText = styled.p`
  margin: 4px 0;
  font-size: 14px;
`;

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  select {
    padding: 5px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #b4c404;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #a0b300;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid #ccc;
  padding: 20px;
  flex-shrink: 0;
  max-height: 200px;
`;

export const SummaryDetails = styled.div`
  p {
    font-size: 16px;
    margin: 0;
  }

  strong {
    font-weight: bold;
  }
`;

export const CheckoutButton = styled.button`
  padding: 15px;
  background-color: #b4c404;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #a0b300;
  }
`;

export const EmptyCart = styled.p`
  font-size: 18px;
  text-align: center;
  color: #888;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #b4c404;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #a0b300;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
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

export const Price = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;
