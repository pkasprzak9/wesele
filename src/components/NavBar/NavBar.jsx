import React, { useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import styles from "./NavBar.module.scss";

export default function NavBar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, [setIsOpen]);


  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  return (
    <nav className={styles.navbar} ref={sidebarRef}>
      <div className={styles.menuToggle}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon  onClick={setIsOpen} icon={isOpen? faTimes : faBars} className={styles.icon}/>
        </div>
      </div>
      <ul className={`${styles.links} ${isOpen && styles.showMenu}`}>
        <li>
          <Link to="ceremony" smooth={true} duration={500} onClick={setIsOpen}>ślub</Link>
        </li>
        <li>
          <Link to="reception" smooth={true} duration={500} onClick={setIsOpen}>przyjęcie</Link>
        </li>
        <li>
          <Link to="plan" smooth={true} duration={500} onClick={setIsOpen}>plan uroczystości</Link>
        </li>
        <li>
          <Link to="hotel" smooth={true} duration={500} onClick={setIsOpen}>hotel</Link>
        </li>
        <li>
          <Link to="reception" smooth={true} duration={500} onClick={setIsOpen}>potwierdzenie obecności</Link>
        </li>
        <li>
          <Link to="reception" smooth={true} duration={500}>kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
