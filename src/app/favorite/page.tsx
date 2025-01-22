"use client";

import React from "react";
import Navbar from "@/components/common/NavBar";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useProducts } from "@/context/productContext";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { Container, Content, EmptyMessage, FavoriteItems, FavoriteItem, ImageContainer, ProductImage, HeartIcon, Footer, ProductPrice, CartButton } from "./favorite.styles";

const FavoritePage = () => {
  const { products, toggleFavorite } = useProducts();
  const { addToCart } = useCart();

  const favoriteProducts = products.filter((product) => product.isFavorite);

  return (
    <Container>
      <Navbar />
      <Content>
        {favoriteProducts.length === 0 ? (
          <EmptyMessage>Você ainda não tem produtos favoritos.</EmptyMessage>
        ) : (
          <FavoriteItems>
            {favoriteProducts.map((product) => (
              <FavoriteItem key={product.id}>
               <Link href={`/products/${product.id}`} passHref>
                  <ImageContainer>
                    <ProductImage src={product.image} alt={product.name} />
                    <HeartIcon onClick={(e) => {
                      e.preventDefault(); 
                      toggleFavorite(product.id);
                    }}>
                      <FaHeart color="red" size={20} />
                    </HeartIcon>
                  </ImageContainer>
                </Link>
                <Footer>
                  <ProductPrice>R$ {product.price.toLocaleString()}</ProductPrice>
                  <CartButton onClick={() => addToCart(product)}>
                    <FaShoppingCart size={20} />
                  </CartButton>
                </Footer>
              </FavoriteItem>
            ))}
          </FavoriteItems>
        )}
      </Content>
    </Container>
  );
};

export default FavoritePage;
