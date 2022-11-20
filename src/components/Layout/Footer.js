import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.socialList}>
        <li className={styles.socialList}>
          <FaFacebook />
        </li>
        <li className={styles.socialList}>
          <FaInstagram />
        </li>
        <li className={styles.socialList}>
          <FaLinkedin />
        </li>
      </ul>
      <p>Nosso rodapé</p>
    </footer>
  );
};

export default Footer;
