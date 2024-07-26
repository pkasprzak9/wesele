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
            <a href="#later">ślub</a>
          </li>
          <li>
            <a href="#later">przyjęcie</a>
          </li>
          <li>
            <a href="#later">plan uroczystości</a>
          </li>
          <li>
            <a href="#later">hotel</a>
          </li>
          <li>
            <a href="#later">potwierdzenie obecności</a>
          </li>
          <li>
            <a href="#later">kontakt</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
