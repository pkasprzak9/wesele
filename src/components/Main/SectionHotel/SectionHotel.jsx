import React from "react";
import styles from "./SectionHotel.module.scss";

export default function SectionHotel() {
  return (
    <section className={styles.sectionHotel} id="hotel">
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Hotel</h2>
          <p className={styles.info}>Tutaj pojawią się informacje dotyczące zakwaterowania.</p>
        </div>
      </div>
    </section>
  )
}
