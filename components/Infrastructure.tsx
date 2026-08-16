import Image from "next/image";
import { siteData } from "@/data/site";
import styles from "./sections.module.css";

export function Infrastructure() {
  return (
    <section className={styles.section} id="infrastructure" aria-labelledby="infrastructure-title"><div className="container">
      <div className={styles.header}><div><p className="eyebrow">Инфраструктура</p><h2 className="sectionTitle" id="infrastructure-title">Город остаётся снаружи</h2></div><p className={styles.intro}>Внутри дома всё необходимое для спокойного ежедневного ритма — от приватного сада до сервиса, который знает ваши привычки.</p></div>
      <div className={styles.split}><div className={styles.media}><Image src="/images/park.webp" alt="Приватный вечерний парк MONUMENT" fill sizes="(max-width: 900px) 100vw, 54vw" /></div><div className={styles.body}><div><p className="eyebrow">Только для резидентов</p><h3>Собственная территория тишины</h3><div className={styles.amenities}>{siteData.amenities.map((item) => <div className={styles.amenity} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></div></div>
    </div></section>
  );
}
