import styled from 'styled-components';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Comments() {
  return (
    <CommentsContainer>
      <h2>What Our Customers Say</h2>
      <CommentsGrid>
        <CommentCard>
          <img src="https://image.cdn2.seaart.me/2024-12-13/ctdq08le878c73bk0e90-3/0a7b864fd652889ba4f2b9c07cb138bb_high.webp" alt="Beautiful Dress" />
          <h3>Beautiful Dress</h3>
          <Stars>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </Stars>
          <span>- Sarah</span>
          <p>Amazing quality and beautiful designs! Perfect for any occasion.</p>
        </CommentCard>
        <CommentCard>
          <img src="https://image.cdn2.seaart.me/2024-12-13/ctdq08le878c73bk0e90-3/0a7b864fd652889ba4f2b9c07cb138bb_high.webp" alt="Elegant Suit" />
          <h3>Elegant Suit</h3>
          <Stars>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Stars>
          <span>- Alex</span>
          <p>Fits like a glove. I always get compliments when I wear this suit.</p>
        </CommentCard>
        <CommentCard>
          <img src="https://image.cdn2.seaart.me/2024-12-13/ctdq08le878c73bk0e90-3/0a7b864fd652889ba4f2b9c07cb138bb_high.webp" alt="Casual Outfit" />
          <h3>Casual Outfit</h3>
          <Stars>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
          </Stars>
          <span>- Maria</span>
          <p>Great for everyday use. Comfortable and stylish.</p>
        </CommentCard>
        <CommentCard>
          <img src="https://image.cdn2.seaart.me/2024-12-13/ctdq08le878c73bk0e90-3/0a7b864fd652889ba4f2b9c07cb138bb_high.webp" alt="Summer Dress" />
          <h3>Summer Dress</h3>
          <Stars>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Stars>
          <span>- John</span>
          <p>Perfect for warm days. The material is so breathable and soft.</p>
        </CommentCard>
      </CommentsGrid>
    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const CommentsGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CommentCard = styled.div`
  width: 200px;
  text-align: center;
  background: #F7F6F0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  span {
    font-size: 0.9rem;
    color: #777;
    display: block;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 2px;
  }
`;
