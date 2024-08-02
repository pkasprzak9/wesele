import React from "react";
import styles from "./SectionPresence.module.scss";

export default function SectionPresence() {
  return (
    <section className={styles.presence}>
      <div className={styles.container}>
        <h2 className={styles.title}>Potwierdzenie obecności</h2>
        <p className={styles.text}>
          Prosimy o potwierdzenie obecności do 30 sierpnia 2024 r. telefonicznie, bądź drogą mailową.
        </p>
      </div>
    </section>
  );
}
