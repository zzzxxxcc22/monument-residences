"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const links = [["О проекте", "#about"], ["Резиденции", "#residences"], ["Инфраструктура", "#infrastructure"], ["Ход строительства", "#construction"], ["Контакты", "#contacts"]] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#main" aria-label="MONUMENT — на главную">MONUMENT</a>
        <nav className={styles.nav} aria-label="Основная навигация">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className={styles.cta} href="#contacts">Записаться</a>
        <button className={styles.menu} type="button" aria-label="Открыть меню" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}><span /><span /></button>
      </div>
      {isOpen ? (
        <div className={styles.mobilePanel} id="mobile-navigation" role="dialog" aria-label="Мобильная навигация">
          <nav className={styles.mobileNav} aria-label="Навигация на мобильном устройстве">
            {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setIsOpen(false)}><span>0{index + 1}</span>{label}</a>)}
          </nav>
          <a className={styles.mobileCta} href="#contacts" onClick={() => setIsOpen(false)}>Записаться на просмотр <span aria-hidden="true">→</span></a>
        </div>
      ) : null}
    </header>
  );
}
