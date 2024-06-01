import styles from "./Header.module.css";
import Logo from "./../assets/images/Logo omnitrek.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./../assets/images/MenuButton.svg";
import Button from "../components/Button";

type HeaderProps = {};

type MenuOptionsLink = {
  name: string;
  link: string;
};

type MenuOptions = MenuOptionsLink[];

const menuOptions: MenuOptions = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/AboutUs" },
  { name: "Services", link: "/Services" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact Us", link: "/ContactUS" },
];

let menuList: React.ReactNode[] = [];

for (let i = 0; i < menuOptions.length; i++) {
  let menuOption = menuOptions[i];
  menuList = [
    ...menuList,
    <Link className={styles.link} key={i} to={menuOption.link}>
      {menuOption.name}
    </Link>,
  ];
}

const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.img} src={Logo} alt="" />
        </Link>
      </div>
      <div className={styles.navbar}>{menuList}</div>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hMButton} onClick={toggleMenu}>
          <img src={MenuButton} alt="Menu Button" width={30} height={30} />
        </div>
        <div
          className={`${styles.hMBox} ${isOpen ? styles.open : styles.closed}`}
        >
          {menuList}
        </div>
      </div>
      <div className={styles.button}>
        <Button
          text="Compartamos"
          color="#ffffff"
          bg="#40c0cb"
          padding="7px 16px"
        />
      </div>
    </div>
  );
};

export default Header;
