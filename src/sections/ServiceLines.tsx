import styles from "./ServiceLines.module.css";
import { sLData } from "../data/SLData";
import React from "react";
import ServiceLine from "../components/ServiceLine";

const ServiceLines = () => {
  let sLList: React.ReactNode[] = [];
  for (let i = 0; i < sLData.length; i++) {
    let sL = sLData[i];
    sLList = [
      ...sLList,
      <ServiceLine
        company={sL.company}
        line={sL.line}
        icon={sL.icon}
        description={sL.description}
        button={sL.button}
      />,
    ];
  }

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.title}>Nuestras Líneas de Servicio</div>
        <div className={styles.description}>
          Para apoyarte en el logro de tus objetivos, en nuestra Agencia Digital
          basados en el Marketing y Desarrollo, hemos diseñado las siguientes
          Líneas de Servicio:
        </div>
      </div>
      <div className={styles.serviceLines}>{sLList}</div>
    </div>
  );
};

export default ServiceLines;
