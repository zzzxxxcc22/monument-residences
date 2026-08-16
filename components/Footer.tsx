import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}><div className={styles.inner}>
      <div><a className={styles.brand} href="#main">MONUMENT</a><p>Премиальный дом в Хамовниках</p></div>
      <nav aria-label="Навигация в подвале"><a href="#about">О проекте</a><a href="#residences">Резиденции</a><a href="#infrastructure">Инфраструктура</a><a href="#construction">Строительство</a></nav>
      <div className={styles.contact}><a href="tel:+74950000000">+7 495 000-00-00</a><a href="mailto:hello@monument.house">hello@monument.house</a></div>
      <p className={styles.copy}>© 2026 MONUMENT. Концептуальный проект для портфолио.</p>
    </div></footer>
  );
}
