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
        <p className={style.title}>Ceremonia Ślubna</p>
        <div className="row">
          <div className={`column ${style.imageWrapper}`}>
            <img
              src={images.church.src}
              alt={images.church.alt}
              className={style.image}
            />
          </div>
          <div className={`column ${style.details}`}>
            <div className={style.detailsText}>
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
            <div className={style.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.4485010468597!2d19.941139177222222!3d52.10796787195607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be612c38cb329%3A0x8354b20408d76f2a!2sBazylika%20katedralna%20Wniebowzi%C4%99cia%20NMP%20i%20%C5%9Bw.%20Miko%C5%82aja%20w%20%C5%81owiczu!5e0!3m2!1spl!2spl!4v1722021914520!5m2!1spl!2spl" className="map" style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
