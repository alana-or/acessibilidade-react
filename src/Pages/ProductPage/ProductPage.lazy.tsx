import React, { lazy, Suspense } from 'react';

const LazyProductPage = lazy(() => import('./ProductPage'));

const ProductPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductPage {...props} />
  </Suspense>
);

export default ProductPage;
