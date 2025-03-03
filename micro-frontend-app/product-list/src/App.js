import React, { Suspense, lazy } from 'react';

const ProductListComponent = lazy(() => import('./pages/ProductList'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductListComponent />
      </Suspense>
    </>
  );
};

export default App;
