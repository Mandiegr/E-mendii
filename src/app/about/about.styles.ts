import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  text-align: center;
  background-color: #e6e6ba;
  color: #0e0d0d;
  padding: 50px 20px;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const TextWrapper = styled.div`
  flex: 1;

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
  }
`;
