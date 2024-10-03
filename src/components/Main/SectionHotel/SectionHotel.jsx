import React from "react";
import styles from "./SectionHotel.module.scss";

export default function SectionHotel() {
  return (
    <section className={styles.sectionHotel} id="hotel">
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Hotel</h2>
          <div className={styles.text}>
            <p className={styles.info}>Po odbiór kart należy zgłosić się do recepcji.</p>
            <div className={styles.row}>
              <p className={styles.description}>Zameldowanie:</p>
              <p className={styles.time}>12:00</p>
            </div>
            <div className={styles.row}>
              <p className={styles.description}>Śniadanie:</p>
              <p className={styles.time}>7:00 - 10:00</p>
            </div>
            <div className={styles.row}>
              <p className={styles.description}>Wymeldowanie:</p>
              <p className={styles.time}>14:30</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
