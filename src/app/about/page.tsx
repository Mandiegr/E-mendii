"use client";

import Navbar from "@/components/common/NavBar";
import React from "react";
import { Container, Header, Content, Section, ImageWrapper, TextWrapper } from "./about.styles";



const AboutUsPage = () => {
  return (
    <Container>
        <Navbar/>
      <Header>
     
        <h1>About Us</h1>
        <p>Discover who we are and what drives us.</p>
      </Header>
      <Content>
        <Section>
          <ImageWrapper>
            <img src="https://i.pinimg.com/736x/98/0a/e9/980ae95318b86a73892045c94df80265.jpg" alt="Our Team" />
          </ImageWrapper>
          <TextWrapper>
            <h2>Our Mission</h2>
            <p>
              At our core, we strive to deliver exceptional experiences to our customers. 
              Our mission is to provide innovative solutions and build a community where 
              everyone feels valued.
            </p>
          </TextWrapper>
        </Section>
        <Section>
          <TextWrapper>
            <h2>Our Values</h2>
            <p>
              Integrity, innovation, and customer satisfaction are the pillars of our work. 
              We believe in continuous growth and making a positive impact on society.
            </p>
          </TextWrapper>
          <ImageWrapper>
          <img src="https://i.pinimg.com/736x/98/0a/e9/980ae95318b86a73892045c94df80265.jpg" alt="Our Team" />
          </ImageWrapper>
        </Section>
        <Section>
          <TextWrapper>
            <h2>Our Vision</h2>
            <p>
              We envision a world where technology bridges gaps and empowers individuals 
              to achieve their dreams. Join us on this journey of innovation and discovery.
            </p>
          </TextWrapper>
        </Section>
      </Content>
    </Container>
  );
};

export default AboutUsPage;
