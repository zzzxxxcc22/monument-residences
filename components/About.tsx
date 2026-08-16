import Image from "next/image";
import styles from "./sections.module.css";

export function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className="container">
        <div className={styles.header}><div><p className="eyebrow">О проекте</p><h2 className="sectionTitle" id="about-title">Современная архитектура в самом сердце Москвы</h2></div><p className={styles.intro}>MONUMENT продолжает традицию московского доходного дома — точные пропорции, благородный камень и выразительный силуэт, рассчитанный на десятилетия.</p></div>
        <div className={styles.split}>
          <div className={styles.media}><Image src="/images/exterior.webp" alt="Фасад клубного дома MONUMENT вечером" fill sizes="(max-width: 900px) 100vw, 54vw" /></div>
          <div className={styles.body}><div><p className="eyebrow">Архитектура</p><h3>Дом, который становится частью города</h3><p>Светлый известняк, бронзовые детали и двухсветная аркада создают спокойный, узнаваемый образ.</p></div><div className={styles.facts}><div className={styles.fact}><strong>17</strong><span>этажей</span></div><div className={styles.fact}><strong>104</strong><span>резиденции</span></div><div className={styles.fact}><strong>3,4 м</strong><span>высота потолков</span></div><div className={styles.fact}><strong>2026</strong><span>готовность</span></div></div></div>
        </div>
      </div>
    </section>
  );
}
