import styles from "./Header.module.css";

const links = [["О проекте", "#about"], ["Резиденции", "#residences"], ["Инфраструктура", "#infrastructure"], ["Ход строительства", "#construction"], ["Контакты", "#contacts"]] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#main" aria-label="MONUMENT — на главную">MONUMENT</a>
        <nav className={styles.nav} aria-label="Основная навигация">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className={styles.cta} href="#contacts">Записаться</a>
        <button className={styles.menu} type="button" aria-label="Открыть меню" aria-expanded="false"><span /><span /></button>
      </div>
    </header>
  );
}
