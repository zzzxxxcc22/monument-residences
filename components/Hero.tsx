import Image from "next/image";
import { siteData } from "@/data/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image className={styles.image} src="/images/hero.webp" alt="Вечерний вид на Москву-реку из резиденции MONUMENT" fill priority sizes="100vw" />
      <div className={styles.scrim} />
      <div className={`container ${styles.content}`}>
        <p className="eyebrow">{siteData.eyebrow}</p>
        <h1 className={`displayTitle ${styles.title}`} id="hero-title">Архитектура<br />личного<br />пространства</h1>
        <p className={styles.lead}>{siteData.description}</p>
        <a className="button" href="#residences">Смотреть резиденции <span aria-hidden="true">→</span></a>
      </div>
      <div className={styles.stats}><div><strong>17</strong><span>этажей</span></div><div><strong>104</strong><span>резиденции</span></div><div><strong>2026</strong><span>сдача</span></div><div><strong>Москва</strong><span>Хамовники</span></div></div>
      <a className={styles.scroll} href="#about">Прокрутите вниз <span aria-hidden="true" /></a>
    </section>
  );
}
