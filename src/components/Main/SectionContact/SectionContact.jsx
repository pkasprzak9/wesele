import React from "react";
import styles from "./SectionContact.module.scss";

export default function SectionContact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kontakt</h2>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.text}`}>
            <span className={styles.highlight}>Telefon</span><br />
            Piotr: <a href="tel:+48 509 109 440">+48 509 109 440</a><br />
            Joanna: <a href="tel:+48 721 108 947">+48 721 108 947</a><br />
          </div>
          <div className={`${styles.col} ${styles.text}`}>
            <span className={styles.highlight}>E-mail</span><br />
            <a href="mailto: wesele2024.kontakt@gmail.com" >wesele2024.kontakt@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
