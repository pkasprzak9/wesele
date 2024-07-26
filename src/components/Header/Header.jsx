import React from "react";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Header({ timeLeft }) {
  if (!timeLeft) return null;

  return (
    <header className={style.Header}>
      <p className={style.intro}>Piotrek & Asia Zapraszają na</p>
      <h1 className={style.title}>Ceremonię Zaślubin</h1>
      <div className={style.countdown}>
        <h2>Pozostało</h2>
        <h3>Dni: {timeLeft.days}</h3>
        <h3>Godziny: {timeLeft.hours}</h3>
        <h3>Minuty: {timeLeft.minutes}</h3>
        <h3>Sekundy: {timeLeft.seconds}</h3>
      </div>

      <div className={style.moreInfo}>
        <FontAwesomeIcon icon={faChevronUp} />
        <p>zobacz więcej</p>
        </div>
    </header>
  );
}
