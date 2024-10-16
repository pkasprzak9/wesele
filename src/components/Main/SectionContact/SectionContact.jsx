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
            Joanna: <a href="tel:+123 123 123">123 123 123</a><br />
            Piotr: <a href="tel:+321 321 321">321 321 321</a>
          </div>
          <div className={`${styles.col} ${styles.text}`}>
            <span className={styles.highlight}>E-mail</span><br />
            <a href="mailto: supermail@mail.com" >supermail@mail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
