import ImageSlider from "../components/ImageSlider";
import styles from "./Home.module.css";
import SlideImg1 from "./../assets/images/omnitrek-desarrollamos-estrategias-digitales-vanguardistas.jpg";
import SlideImg2 from "./../assets/images/omnitrek-lleva-tu-negocio-al-siguiente-nivel.webp";
import SlideImg3 from "./../assets/images/omnitrek-pensamos-diferente.webp";

const Home = () => {
  const images = [SlideImg1, SlideImg2, SlideImg3];
  return (
    <div className={styles.container}>
      Home
      <ImageSlider images={images} />
    </div>
  );
};

export default Home;
