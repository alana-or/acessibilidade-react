import { IProduct } from '../../Interfaces/IProduct';
import Rating from '../Rating/Rating';
import styles from './ProductItem.module.scss';

const ProductItem = (
  {id, title, img, rating, priceWithOutDiscount, price, installments, installmentsPrice}:IProduct
  ) => (
<a href={id.toString()} className="col-12 col-sm-6 col-md-4 col-lg-3" data-testid="ProductItem">
  <div className={`${styles.card} card m-3`}>
    <img src={img} alt={title} aria-hidden="true"/>
    <div className="card-body">
      <h5 className="card-title fs-6">{title}</h5>
      <Rating {...rating} />
      <p className="d-flex flex-column" aria-label={`preço sem disconto ${priceWithOutDiscount} preço atual ${price}`}>
        <span className="text-decoration-line-through">R$ {priceWithOutDiscount}</span>
        <span className="fs-5 fw-bold">R$ {price}</span>
      </p>
      <p className="m-0" 
        aria-label={`à vista no cartão ou no Pix ou ${installments} vezes sem juros de ${installmentsPrice}`}>
          à vista no cartão ou no Pix<br/>{installments}x sem juros R$ {installmentsPrice}
      </p>
      <span className={`d-flex align-items-center fw-bold my-2 ${styles.truck}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        <span className="px-2">Frete reduzido</span>
      </span>
    </div>
  </div>
</a>
);

export default ProductItem;
