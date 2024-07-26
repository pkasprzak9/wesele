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
            <a href="#later" onClick={setIsOpen}>ślub</a>
          </li>
          <li>
            <a href="#later" onClick={setIsOpen}>przyjęcie</a>
          </li>
          <li>
            <a href="#later" onClick={setIsOpen}>plan uroczystości</a>
          </li>
          <li>
            <a href="#later" onClick={setIsOpen}>hotel</a>
          </li>
          <li>
            <a href="#later" onClick={setIsOpen}>potwierdzenie obecności</a>
          </li>
          <li>
            <a href="#later" onClick={setIsOpen}>kontakt</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
