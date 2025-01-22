"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { products, Product } from '@/utils/products'; 


const getDiscountedPrice = (product: Product): number => {
  const discountRate = 0.1; 
  return product.price * (1 - discountRate);
};

interface ProductsContextProps {
  products: Product[];
  toggleFavorite: (id: string) => void;
  setFilterCategory: (category: string) => void;
  getProductWithDiscount: (id: string) => Product | null;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleFavorite = (id: string) => {
    setProductList((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );


    setFilteredProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );
  };

  const setFilterCategory = (category: string) => {
    if (category === 'all') {
      setFilteredProducts(productList);
    } else {
      setFilteredProducts(productList.filter((product) => product.category === category));
    }
  };

  const getProductWithDiscount = (id: string) => {
    const product = filteredProducts.find((p) => p.id === id);
    if (product) {
      return {
        ...product,
        discountedPrice: getDiscountedPrice(product),
      };
    }
    return null;
  };

  return (
    <ProductsContext.Provider value={{ products: filteredProducts, toggleFavorite, setFilterCategory, getProductWithDiscount }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
