import Image from "next/image";
import styles from "./sections.module.css";

export function Interiors() {
  return (
    <section className={styles.section} aria-labelledby="interiors-title"><div className="container">
      <div className={styles.header}><div><p className="eyebrow">Интерьеры</p><h2 className="sectionTitle" id="interiors-title">Тихая роскошь в каждой детали</h2></div><p className={styles.intro}>Натуральный камень, тёплый шпон и мягкие фактуры создают нейтральную основу для личной коллекции предметов и искусства.</p></div>
      <div className={`${styles.split} ${styles.splitReverse}`}><div className={styles.body}><div><p className="eyebrow">Гостиная</p><h3>Пространство, наполненное вечерним светом</h3><p>Панорамные окна открывают город, а продуманное освещение сохраняет камерность дома.</p></div><a className="textLink" href="#plans">Выбрать резиденцию <span aria-hidden="true">→</span></a></div><div className={styles.media}><Image src="/images/interior-main.webp" alt="Гостиная MONUMENT с панорамным видом" fill sizes="(max-width: 900px) 100vw, 60vw" /></div></div>
    </div></section>
  );
}
