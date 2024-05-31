import ImageSlider from "../components/ImageSlider";
import styles from "./Home.module.css";
import SlideImg1 from "./../assets/images/omnitrek-desarrollamos-estrategias-digitales-vanguardistas.jpg";
import SlideImg2 from "./../assets/images/omnitrek-lleva-tu-negocio-al-siguiente-nivel.webp";
import SlideImg3 from "./../assets/images/omnitrek-pensamos-diferente.webp";

const Home = () => {
  const images = [SlideImg2, SlideImg1, SlideImg3];
  const titles = [
    "Lleva tu nego  cio al siguiente nivel",
    "Desarrollamos Estrategias Digitales Vanguardistas",
    "Pensamos Diferente",
  ];
  return (
    <div className={styles.container}>
      Home
      <ImageSlider images={images} titles={titles} />
    </div>
  );
};

export default Home;
