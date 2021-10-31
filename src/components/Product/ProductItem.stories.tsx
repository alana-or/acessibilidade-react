/* eslint-disable */
import { IProduct } from '../../Interfaces/IProduct';
import ProductItem from './ProductItem';

export default {
  title: "ProductItem",
};

let value: IProduct;

export const Default = () => <ProductItem {...value} />;

Default.story = {
  name: 'default',
};
