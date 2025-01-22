'use client'
import { styled } from 'styled-components';
import Navbar from '@/components/common/NavBar';
import Banner from '@/components/home/banner';
import Products from '@/components/home/products';
import Comments from '@/components/home/commets';
import Footer from '@/components/common/footer';


export default function Home() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Products />
      <Comments />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
`;
