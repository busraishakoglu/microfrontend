import { useCallback } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addToCart } from 'container/store/productSlice';

const useProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items, shallowEqual);

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  return { products, handleAddToCart };
};

export default useProductList;
