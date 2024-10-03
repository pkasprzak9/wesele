import React from "react";
import styles from "./SectionPlan.module.scss";

export default function SectionPlan() {
  return (
    <section className={styles.plan} id="plan">
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Plan Uroczystości</h2>
          <div className={styles.textWrapper}>
            <div className={styles.daySection}>
              <h3 className={styles.dayTitle}>Dzień 1</h3>
              <div className={styles.row}>
                <p className={styles.time}>15:00</p>
                <p className={styles.description}>Ślub</p>
              </div>
              <div className={styles.row}>
                <p className={styles.time}>16:00</p>
                <p className={styles.description}>Wesele</p>
              </div>
            </div>
            <div className={styles.daySection}>
              <h3 className={styles.dayTitle}>Dzień 2</h3>
              <div className={styles.row}>
                <p className={styles.time}>14:30</p>
                <p className={styles.description}>Poprawiny</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
