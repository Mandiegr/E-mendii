"use client";

import React, {  useState } from "react";
import Navbar from "@/components/common/NavBar";
import { useCart } from "@/context/cartContext";
import Pbar from "@/components/common/category";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useProducts } from "@/context/productContext";
import { Container, Content, EmptyCart, CartSection, CartItems, CartItem, ProductDetails, ProductImage, ProductInfo, ProductName, ProductDetailsText, Price, DiscountedPrice, OriginalPrice, QuantitySelector, FavoriteButton, ProductActions, RemoveButton, Summary, SummaryDetails, CheckoutButton, ModalOverlay, Modal, ModalButtons, ConfirmButton, CancelButton } from "./cart.styles";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const { toggleFavorite, products } = useProducts();
  const [productToRemove, setProductToRemove] = useState<string | null>(null);

  const confirmRemove = () => {
    if (productToRemove) {
      removeFromCart(productToRemove);
      setProductToRemove(null);
    }
  };

  const cancelRemove = () => {
    setProductToRemove(null);
  };

  return (
    <Container>
      <Navbar />
      <Pbar />
      <Content>
        {cart.length === 0 ? (
          <EmptyCart>Não há produtos no carrinho</EmptyCart>
        ) : (
          <CartSection>
            <CartItems>
              {cart.map((product) => (
                <CartItem key={product.id}>
                  <ProductDetails>
                    <ProductImage src={product.image} alt={product.name} />
                    <ProductInfo>
                      <ProductName>{product.name}</ProductName>
                      <ProductDetailsText>
                        <strong>Art. No:</strong> {product.artNo}
                      </ProductDetailsText>
                      <ProductDetailsText>
                        <strong>Color:</strong> {product.color}
                      </ProductDetailsText>
                      <ProductDetailsText>
                        <strong>Size:</strong> {product.size}
                      </ProductDetailsText>
                      <ProductDetailsText>
                      <Price>
            {product.discount ? (
              <>
                <DiscountedPrice>
                  R$. {(product.price * (1 - product.discount / 100)).toLocaleString()}
                </DiscountedPrice>
                <OriginalPrice>R$. {product.price.toLocaleString()}</OriginalPrice>
              </>
            ) : (
              `R$. ${product.price.toLocaleString()}`
            )}
                 </Price>
                      </ProductDetailsText>
                    </ProductInfo>
                  </ProductDetails>
                  <QuantitySelector>
                    <FavoriteButton onClick={() => toggleFavorite(product.id)}>
                      {products.find((p) => p.id === product.id)?.isFavorite ? (
                        <FaHeart color="red" size={20} />
                      ) : (
                        <FaRegHeart size={20} />
                      )}
                    </FavoriteButton>
                    <select id={`quantity-${product.id}`} defaultValue={product.quantity}>
                      {[...Array(10)].map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </QuantitySelector>
                  <ProductActions>
                    <RemoveButton onClick={() => setProductToRemove(product.id)}>Remover</RemoveButton>
                  </ProductActions>
                </CartItem>
              ))}
            </CartItems>
            <Summary>
              <SummaryDetails>
                <p>
                  <strong>Total:</strong> R${" "}
                  {cart.reduce(
                    (total, product) => total + product.price * product.quantity,
                    0
                  ).toLocaleString()}
                </p>
              </SummaryDetails>
              <CheckoutButton>Finalizar Compra</CheckoutButton>
            </Summary>
          </CartSection>
        )}
      </Content>

      {productToRemove && (
        <ModalOverlay>
          <Modal>
            <p>Tem certeza de que deseja remover este produto?</p>
            <ModalButtons>
              <ConfirmButton onClick={confirmRemove}>Confirmar</ConfirmButton>
              <CancelButton onClick={cancelRemove}>Cancelar</CancelButton>
            </ModalButtons>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CartPage;

