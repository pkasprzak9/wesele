import React from "react";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import babyImage from '../../assets/images/baby.png';

export default function Header({ timeLeft, onClick, clickCounter}) {
  if (!timeLeft) return null;

  return (
    <header className={style.Header} id="header" onClick={onClick}>
      <p className={style.intro}>Joanna i Piotr zapraszają na</p>
      <h1 className={style.title}>Ceremonię Zaślubin</h1>
      <div className={style.countdown}>
        <h2>Pozostało</h2>
        <p>Dni: <span className={style.number}>{timeLeft.days}</span></p>
        <p>Godziny: <span className={style.number}>{timeLeft.hours}</span></p>
        <p>Minuty: <span className={style.number}>{timeLeft.minutes}</span></p>
        <p>Sekundy: <span className={style.number}>{timeLeft.seconds}</span></p>
      </div>
      {clickCounter >= 100 ? <img src={babyImage} alt="baby" className={style.hiddenSection} /> : null}
      <div className={style.moreInfo}>
        <FontAwesomeIcon icon={faChevronUp} />
        <p><Link to="ceremony" smooth={true} duration={500}>zobacz więcej</Link></p>
        </div>
    </header>
  );
}
