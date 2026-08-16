import Image from "next/image";
import styles from "./sections.module.css";

export function Construction() {
  return (
    <section className={styles.section} id="construction" aria-labelledby="construction-title"><div className="container">
      <div className={styles.header}><div><p className="eyebrow">Ход строительства</p><h2 className="sectionTitle" id="construction-title">Дом обретает форму</h2></div><p className={styles.intro}>Монолитные работы завершены на 12-м этаже. Параллельно начинается монтаж фасадного камня и инженерных систем.</p></div>
      <div className={styles.media}><Image src="/images/construction.webp" alt="Строительство MONUMENT на уровне двенадцатого этажа" fill sizes="100vw" /><div className={styles.constructionOverlay}><p className="eyebrow">Август 2026</p><strong>12 этаж</strong><span>Свободно 4 резиденции</span></div></div>
    </div></section>
  );
}
