import Banner from '../../components/Banner/Banner';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className="container" data-testid="HomePage">
    <div className="mt-5">
      <Banner />
    </div>
    <div className={`d-flex flex-wrap ${styles.ProductPage}`}>
    </div>
  </div>
);

export default HomePage;
