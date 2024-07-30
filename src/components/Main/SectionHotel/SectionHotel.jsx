import React from "react";
import styles from "./SectionHotel.module.scss";

export default function SectionHotel() {
  return (
    <section className={styles.sectionHotel} id="hotel">
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Hotel</h2>
          <p className={styles.info}>Tutaj pojawią się informacje dotyczące zakwaterowania.</p>
          <div className={styles.row}>
            <p className={styles.description}>Zameldowanie:</p>
            <p className={styles.time}>-</p>
          </div>
          <div className={styles.row}>
            <p className={styles.description}>Śniadanie:</p>
            <p className={styles.time}>-</p>
          </div>
          <div className={styles.row}>
            <p className={styles.description}>Wymeldowanie:</p>
            <p className={styles.time}>-</p>
          </div>
        </div>
      </div>
    </section>
  )
}
