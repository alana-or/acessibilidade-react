import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./HomePage'));

const HomePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default HomePage;
