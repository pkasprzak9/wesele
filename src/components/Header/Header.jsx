import React from "react";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Header({ timeLeft }) {
  if (!timeLeft) return null;

  return (
    <header className={style.Header}>
      <p className={style.intro}>Joanna i Piotr zapraszają na</p>
      <h1 className={style.title}>Ceremonię Zaślubin</h1>
      <div className={style.countdown}>
        <h2>Pozostało</h2>
        <h3>Dni: <span className={style.number}>{timeLeft.days}</span></h3>
        <h3>Godziny: <span className={style.number}>{timeLeft.hours}</span></h3>
        <h3>Minuty: <span className={style.number}>{timeLeft.minutes}</span></h3>
        <h3>Sekundy: <span className={style.number}>{timeLeft.seconds}</span></h3>
      </div>

      <div className={style.moreInfo}>
        <FontAwesomeIcon icon={faChevronUp} />
        <p>zobacz więcej</p>
        </div>
    </header>
  );
}
