import styles from './Banner.module.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => (
  <div className={styles.Banner} data-testid="Banner">
    <Carousel>
        <div>
            <img alt="descrição do slide 1" src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170138608/70143581-e-commerce-banner.jpg" />
        </div>
        <div>
            <img alt="descrição do slide 1" src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170138608/70143581-e-commerce-banner.jpg" />
        </div>
        <div>
            <img alt="descrição do slide 1" src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170138608/70143581-e-commerce-banner.jpg" />
        </div>
    </Carousel>
  </div>
);

export default Banner;
