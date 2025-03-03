import React, { memo } from 'react';

const ProductItem = memo(({ product, onAddToCart }) => {

  return (
    <>
      <span>{product.name}</span>
      <button onClick={() => onAddToCart(product)}>Add</button>
    </>
  );
});

export default ProductItem;
