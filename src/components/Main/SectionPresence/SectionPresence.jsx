import React from "react";
import styles from "./SectionPresence.module.scss";

export default function SectionPresence() {
  return (
    <section className={styles.presence} id="confirm">
      <div className={styles.container}>
        <h2 className={styles.title}>Potwierdzenie obecności</h2>
        <p className={styles.text}>
        Prosimy o potwierdzenie obecności do 22 sierpnia 2024 r. telefonicznie lub mailowo. Przy potwierdzaniu prosimy o podanie ewentualnych specjalnych wymagań dietetycznych (np. wegańska, bezglutenowa).
        </p>
      </div>
    </section>
  );
}
