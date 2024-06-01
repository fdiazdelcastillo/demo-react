import styles from "./Button.module.css";
import { useState } from "react";

type ButtonProps = {
  text: String;
  link?: String;
  bg: string;
  color: string;
  padding: string;
};

const Button = ({ text, link, bg, color, padding }: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className={styles.container}
      style={{
        background: isHover ? color : bg,
        color: isHover ? bg : color,
        padding: padding,
        border: `2px solid ${isHover ? bg : color}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </div>
  );
};

export default Button;
