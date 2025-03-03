import React from 'react';
import useProductList from '../customHooks/UseProductList';
import ProductItem from './ProductItem';

const ProductListApp = () => {
  const { products, handleAddToCart } = useProductList();

  return (
    <>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
};

export default ProductListApp;
