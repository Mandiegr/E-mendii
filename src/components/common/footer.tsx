import styled from 'styled-components';


export default function Footer() {


  return (
    <FooterContainer>
      <FooterTop>
        <FooterContent>
          <FooterDetails>
            <h4>URBAN OUTFITTERS</h4>
            <p>
              <strong>Location:</strong> Augusto Corrê - PA<br />
              <strong>Contact:</strong> +61 3 8376 6284<br />
              <strong>Email:</strong> MendiBrechó@gmail.com<br />
              <strong>Published:</strong> May 26, 2024
            </p> 
            <SocialLinks>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </SocialLinks>
          </FooterDetails>

          <FooterDetails>
            <h4>SHOPPING</h4>
            <ul>
              <li><a href="#">Your Cart</a></li>
              <li><a href="#">Your Orders</a></li>
              <li><a href="#">Compared Items</a></li>
              <li><a href="#">Wishlist Items</a></li>
              <li><a href="#">Shipping Details</a></li>
            </ul>
          </FooterDetails>

          <FooterDetails>
            <h4>MORE LINKS</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Gift Center</a></li>
              <li><a href="#">Buying Guides</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Clearance</a></li>
            </ul>
          </FooterDetails>

          <FooterLinks>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li>
                <a href="#">Products</a>
              </li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">SALE</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </FooterLinks>
        </FooterContent>
      </FooterTop>

      <FooterBottom>
        <p>&copy;  E-Mendii, 2025. Todos os direitos reservados.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: #e6e6ba;
  color: #606c38;
  font-family: 'Arial', sans-serif;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #2a401a;
    }
  }
`;

const FooterTop = styled.div`
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const FooterDetails = styled.div`
  flex: 1;
  min-width: 200px;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #241f1f;
    text-transform: uppercase;
  }

  p {
    font-size: 0.9rem;
    color: #2e2b2b;
    margin: 0.5rem 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;

      a {
        font-size: 0.9rem;
        display: inline-block;
      }
    }
  }
`;

const FooterLinks = styled(FooterDetails)``;

const FooterBottom = styled.div`
  background: #c5c534;
  padding: 1rem 2rem;
  text-align: center;

  p {
    font-size: 0.85rem;
    color: #2e2b2b;
    margin-top: 1rem;
  }
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;

  a {
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      color: #2a401a;
    }
  }
`;



