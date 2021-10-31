import React, { lazy, Suspense } from 'react';
import { IProduct } from '../../Interfaces/IProduct';

const LazyProductItem = lazy(() => import('./ProductItem'));

let value: IProduct;

const ProductItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductItem {...value} {...props} />
  </Suspense>
);

export default ProductItem;
