import React, { useRef, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "./NavBar.module.scss";

export default function NavBar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar} ref={sidebarRef}>
      <div className={styles.menuToggle}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon  onClick={setIsOpen} icon={isOpen? faTimes : faBars} className={styles.icon}/>
        </div>
      </div>
      <ul className={`${styles.links} ${isOpen && styles.showMenu}`}>
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
      </ul>
    </nav>
  );
}
