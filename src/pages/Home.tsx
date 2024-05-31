import ImageSlider from "../components/ImageSlider";
import styles from "./Home.module.css";
import SlideImg1 from "./../assets/images/omnitrek-desarrollamos-estrategias-digitales-vanguardistas.jpg";
import SlideImg2 from "./../assets/images/omnitrek-lleva-tu-negocio-al-siguiente-nivel.webp";
import SlideImg3 from "./../assets/images/omnitrek-pensamos-diferente.webp";

const Home = () => {
  const images = [SlideImg2, SlideImg1, SlideImg3];

  const texts = [
    {
      title: "Lleva tu negocio al siguiente nivel",
      complement: "",
      button: "Compartamos",
    },
    {
      title: "Desarrollamos Estrategias Digitales Vanguardistas",
      complement: "Para Potenciar Tu Rentabilidad",
      button: "Descubre cómo",
    },
    { title: "Pensamos Diferente", complement: "", button: "Conócenos" },
  ];
  return (
    <div className={styles.container}>
      <ImageSlider images={images} texts={texts} />
    </div>
  );
};

export default Home;
