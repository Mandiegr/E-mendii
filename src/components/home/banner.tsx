import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerContainer>
      <h1>Mendisss Brechó</h1>
      <p>Make your everyday look prettier with MEJIWOO Korean Made</p>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  background-color: #E6E6BA;
  background-size: cover;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
`;
