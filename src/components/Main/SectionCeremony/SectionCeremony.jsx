import React from "react";
import "../../../styles/global.scss"
import styles from "./SectionCeremony.module.scss";

export default function SectionCeremony() {

  return (
    <section className={styles.ceremonyInfo} id="ceremony">
      <div className={styles.container}>
        <p className={styles.title}>Ślub</p>
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.details} ${styles.card}`}>
            <p className={styles.dateTime}>
              <strong>Data<br/></strong> 20 sierpnia 2024 <br />
              <strong>Godzina<br/></strong> 15:00
            </p>
            <p className={styles.location}>
              <strong>Miejsce</strong><br />
              Katedra w Łowiczu<br />
              ul. Katedralna 1, Łowicz
            </p>
            <p className={styles.description}>
              Ceremonia odbędzie się w pięknej Katedrze w Łowiczu, znanej ze swojej wyjątkowej architektury i niepowtarzalnej atmosfery. Zapraszamy serdecznie wszystkich naszych bliskich do wspólnego świętowania.
            </p>
            <p>Aby nie zapomnieć, <span className={styles.underline}>dodaj datę do swojego kalendarza</span>.</p>
          </div>
          <div className={styles.column}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.4485010468597!2d19.941139177222222!3d52.10796787195607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be612c38cb329%3A0x8354b20408d76f2a!2sBazylika%20katedralna%20Wniebowzi%C4%99cia%20NMP%20i%20%C5%9Bw.%20Miko%C5%82aja%20w%20%C5%81owiczu!5e0!3m2!1spl!2spl!4v1722021914520!5m2!1spl!2spl" className={styles.map} style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
