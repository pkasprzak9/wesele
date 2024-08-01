import React from "react";
import styles from "./SectionPresence.module.scss";

export default function SectionPresence() {
  return (
    <section className={styles.presence}>
      <div className={styles.container}>
        <h2 className={styles.title}>Potwierdzenie obecności</h2>
        <p className={styles.text}>
          Prosimy o potwierdzenie obecności do 30 sierpnia 2024 r. telefonicznie, mailowo lub poprzez formularz kontaktowy.
        </p>
        <form className={styles.form} action="">
          <input className={styles.formInput} type="text" placeholder="Imię i nazwisko" required/>
          <input className={styles.formInput} type="email" placeholder="Adres e-mail" required/>
          <input className={styles.formInput} type="tel" placeholder="Numer telefonu" required/>
          <textarea className={styles.formInput} placeholder="Wiadomość" required></textarea>
          <button className={styles.submit} type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
}
