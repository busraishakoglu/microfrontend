import React, { Suspense, lazy } from 'react';

const CartComponent = lazy(() => import('./pages/Cart'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <CartComponent />
      </Suspense>
    </>
  );
};

export default App;
