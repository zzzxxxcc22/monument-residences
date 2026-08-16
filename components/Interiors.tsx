"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";
import galleryStyles from "./Interiors.module.css";
import styles from "./sections.module.css";

export function Interiors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = siteData.gallery[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="interiors-title"><div className="container">
      <div className={styles.header}><div><p className="eyebrow">Интерьеры</p><h2 className="sectionTitle" id="interiors-title">Тихая роскошь в каждой детали</h2></div><p className={styles.intro}>Натуральный камень, тёплый шпон и мягкие фактуры создают нейтральную основу для личной коллекции предметов и искусства.</p></div>
      <div className={`${styles.split} ${styles.splitReverse}`}><div className={`${styles.body} ${galleryStyles.body}`}><div><p className="eyebrow">{activeImage.label}</p><h3>Пространство, наполненное вечерним светом</h3><p>Панорамные окна открывают город, а продуманное освещение сохраняет камерность дома.</p><div className={galleryStyles.tabs} role="tablist" aria-label="Галерея интерьеров">{siteData.gallery.map((item, index) => <button className={index === activeIndex ? galleryStyles.active : ""} key={item.label} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>{item.label}</button>)}</div></div><a className="textLink" href="#plans">Выбрать резиденцию <span aria-hidden="true">→</span></a></div><div className={styles.media}><Image key={activeImage.image} src={activeImage.image} alt={activeImage.alt} fill sizes="(max-width: 900px) 100vw, 60vw" /></div></div>
    </div></section>
  );
}
