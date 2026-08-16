import styles from "./sections.module.css";

export function LeadSection() {
  return (
    <section className={styles.leadSection} id="contacts" aria-labelledby="contacts-title"><div className={`container ${styles.leadGrid}`}>
      <div className={styles.leadCopy}><p className="eyebrow">Персональная встреча</p><h2 id="contacts-title">Увидеть<br />MONUMENT</h2><p>Оставьте контакты — специалист проекта свяжется с вами и подберёт удобное время для приватного просмотра.</p></div>
      <form className={styles.form} noValidate><div className={styles.field}><label htmlFor="name">Ваше имя</label><input id="name" name="name" autoComplete="name" /></div><div className={styles.field}><label htmlFor="phone">Телефон</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+7 999 000-00-00" /></div><label className={styles.consent}><input name="consent" type="checkbox" /><span>Соглашаюсь с обработкой персональных данных</span></label><button className={`button buttonSolid ${styles.submit}`} type="submit">Записаться на просмотр <span aria-hidden="true">→</span></button></form>
    </div></section>
  );
}
