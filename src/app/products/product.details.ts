import { styled } from "styled-components";

export const ProductsContainer = styled.div`
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
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
