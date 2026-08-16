import Image from "next/image";
import styles from "./sections.module.css";

export function Location() {
  return (
    <section className={styles.section} aria-labelledby="location-title"><div className="container"><div className={styles.locationGrid}>
      <div className={styles.locationBody}><div><p className="eyebrow">Расположение</p><h2 id="location-title">Хамовники. Москва рядом</h2><p>Тихий переулок у набережной и быстрый маршрут к главным культурным и деловым точкам столицы.</p></div><div className={styles.times}><div><strong>5 мин</strong><span>Москва-река</span></div><div><strong>8 мин</strong><span>Парк Горького</span></div><div><strong>12 мин</strong><span>Кремль</span></div></div></div>
      <div className={styles.map}><Image src="/images/location-map.svg" alt="Схема расположения MONUMENT в Хамовниках" width={1000} height={700} /></div>
    </div></div></section>
  );
}
