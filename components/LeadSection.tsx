"use client";

import { FormEvent, useState } from "react";
import { LeadErrors, validateLead } from "@/lib/lead-validation";
import styles from "./sections.module.css";

export function LeadSection() {
  const [errors, setErrors] = useState<LeadErrors>({});
  const [isSent, setIsSent] = useState(false);

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors = validateLead({ name: String(form.get("name") ?? ""), phone: String(form.get("phone") ?? ""), consent: form.get("consent") === "on" });
    setErrors(nextErrors);
    setIsSent(Object.keys(nextErrors).length === 0);
  };

  return (
    <section className={styles.leadSection} id="contacts" aria-labelledby="contacts-title"><div className={`container ${styles.leadGrid}`}>
      <div className={styles.leadCopy}><p className="eyebrow">Персональная встреча</p><h2 id="contacts-title">Увидеть<br />MONUMENT</h2><p>Оставьте контакты — специалист проекта свяжется с вами и подберёт удобное время для приватного просмотра.</p></div>
      <form className={styles.form} noValidate onSubmit={submitLead}><div className={styles.field}><label htmlFor="name">Ваше имя</label><input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <span className={styles.error} id="name-error">{errors.name}</span> : null}</div><div className={styles.field}><label htmlFor="phone">Телефон</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+7 999 000-00-00" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />{errors.phone ? <span className={styles.error} id="phone-error">{errors.phone}</span> : null}</div><div><label className={styles.consent}><input name="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} /><span>Соглашаюсь с обработкой персональных данных</span></label>{errors.consent ? <span className={styles.error}>{errors.consent}</span> : null}</div><button className={`button buttonSolid ${styles.submit}`} type="submit">Записаться на просмотр <span aria-hidden="true">→</span></button><p className={styles.status} aria-live="polite">{isSent ? "Спасибо! Мы свяжемся с вами." : ""}</p></form>
    </div></section>
  );
}
