import React from "react";
import "../../../styles/global.scss"
import style from "./SectionCeremony.module.scss";

export default function SectionCeremony() {

  const images = {
    church: {
      src: require("../../../assets/images/placeholder.jpeg"),
      alt: "Katedra w Łowiczu"
    },
    // wedding: {
    //   src: require("../../../assets/images/wedding.jpg"),
    //   alt: "Ślub"
    // }
  }

  return (
    <section className={style.weddingInfo}>
      <div className="container">
        <h2 className={style.title}>Ceremonia Ślubna</h2>
        <div className="row">
          <div className={`column ${style.imageWrapper}`}>
            <img
              src={images.church.src}
              alt={images.church.alt}
              className={style.image}
            />
          </div>
          <div className={`column ${style.details}`}>
            <p className={style.dateTime}>
              <strong>Data:</strong> 20 sierpnia 2024<br />
              <strong>Godzina:</strong> 15:00
            </p>
            <p className={style.location}>
              <strong>Miejsce:</strong><br />
              Katedra w Łowiczu<br />
              ul. Katedralna 1, 99-400 Łowicz
            </p>
            <p className={style.description}>
              Ceremonia odbędzie się w pięknej Katedrze w Łowiczu, znanej ze swojej wyjątkowej architektury i niepowtarzalnej atmosfery. Zapraszamy serdecznie wszystkich naszych bliskich do wspólnego świętowania.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
