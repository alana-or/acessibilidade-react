import React, { lazy, Suspense } from 'react';

const LazyRating = lazy(() => import('./Rating'));

const Rating = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRating value={0} stars={0} {...props} />
  </Suspense>
);

export default Rating;
