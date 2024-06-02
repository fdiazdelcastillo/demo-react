import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faShield,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ServiceLine.module.css";

type ServiceLineProps = {
  company: string;
  line: string;
  icon: string;
  description: string;
  button: string;
};

const ServiceLine = ({
  company,
  line,
  icon,
  description,
  button,
}: ServiceLineProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.company}>{company}</div>
        <div className={styles.line}>{line}</div>
      </div>
      <div className={styles.icono}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={
            icon === "cogs" ? faCogs : icon === "shield" ? faShield : faTerminal
          }
        />
      </div>
      <div className={styles.description}>{description}</div>
      <Button text={button} bg="#40c0cb" color="#ffffff" padding="10px 20px" />
    </div>
  );
};

export default ServiceLine;
