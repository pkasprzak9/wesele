import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "./NavBar.module.scss";

export default function NavBar({ isOpen, setIsOpen }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuToggle}>
        <FontAwesomeIcon  onClick={setIsOpen} icon={isOpen? faTimes : faBars} className={styles.icon}/>
      </div>
      <ul className={`${styles.links} ${isOpen && styles.showMenu}`}>
        <div className={styles.container}>
          <li>
            <a href="#later">Ceremonia Ślubu</a>
          </li>
          <li>
            <a href="#later">Przyjęcie</a>
          </li>
          <li>
            <a href="#later">Plan Uroczystości</a>
          </li>
          <li>
            <a href="#later">Potwierdzenie Obecności</a>
          </li>
          <li>
            <a href="#later">FAQ</a>
          </li>
          <li>
            <a href="#later">Kontakt</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
