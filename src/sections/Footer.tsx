import Button from "../components/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.area1}>
        <div className={styles.title}>Acerca de</div>
        <div className={`${styles.texts} ${styles.message}`}>
          Queremos crear experiencias a través de herramientas de vanguardia que
          hagan crecer sus negocios, fruto de entregar mayor valor agregado a
          sus clientes internos y externos.
        </div>
        <div className={styles.button}>
          <Button
            text="Ver más"
            color="#40c0cb"
            bg="#000000"
            padding="7px 10px"
          />
        </div>
      </div>
      <div className={styles.area2}>
        <div className={styles.title}>Nuestros Servicios</div>
        <div className={`${styles.servicesBox} ${styles.texts}`}>
          <div className={styles.branding}>
            <div className={styles.categoria}>omnitrek branding</div>
            <div className={styles.services}>
              <ul>
                <li>SEO</li>
                <li>SEM</li>
                <li>SMO</li>
                <li>Display Marketing</li>
                <li>Email Marketing</li>
                <li>Ver más ...</li>
              </ul>
            </div>
          </div>
          <div className={styles.branding}>
            <div className={styles.categoria}>omnitrek solutions</div>
            <div className={styles.services}>
              <ul>
                <li>CRM</li>
                <li>Service Desk</li>
                <li>ERP</li>
                <li>Enterprise Social</li>
                <li>Network</li>
              </ul>
            </div>
          </div>
          <div className={styles.branding}>
            <div className={styles.categoria}>omnitrek development</div>
            <div className={styles.services}>
              <ul>
                <li>Multi platform apps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.area3}>
        <div className={styles.title}>Follow Us</div>
      </div>
    </div>
  );
};

export default Footer;
