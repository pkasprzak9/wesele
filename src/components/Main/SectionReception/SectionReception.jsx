import React from "react";
import "../../../styles/global.scss"
import styles from "./SectionReception.module.scss";

export default function SectionCeremony() {

  return (
    <section className={styles.receptionInfo}>
      <div className={styles.container}>
        <p className={styles.title}>Przyjęcie</p>
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.details} ${styles.card}`}>
            <p className={styles.location}>
              <strong>Miejsce</strong><br />
              Hotel Rozdroże<br />
              Aleja Lipowa 37, Nieborów
            </p>
            <p className={styles.description}>
              Po ceremonii zapraszamy wszystkich gości na przyjęcie weselne, które odbędzie się w Hotelu Rozdroże w Nieborowie.
            </p>
          </div>
          <div className={styles.column}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.6629220337636!2d20.0611705766527!3d52.06766106962078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be110c11d8f27%3A0xbb5d10db487e1735!2sHotel%20Rozdro%C5%BCe%20Niebor%C3%B3w!5e0!3m2!1sen!2spl!4v1722092126972!5m2!1sen!2spl"className={styles.map} style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
