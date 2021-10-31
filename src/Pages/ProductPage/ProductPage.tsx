import ProductItem from '../../components/Product/ProductItem';
import {products} from '../../Data/products'

const ProductPage = () => (
  <div className="container" data-testid="ProductPage">
    <h2 className="m-3">Ofertas do dia</h2>
    <div className="d-flex flex-wrap">
      { products.map((product) => <ProductItem key={product.id} {...product} /> )}
    </div>
  </div>
);

export default ProductPage;
