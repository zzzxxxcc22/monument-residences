import Image from "next/image";
import { siteData } from "@/data/site";
import styles from "./Residences.module.css";

const formatPrice = (price: number) => new Intl.NumberFormat("ru-RU").format(price);

export function Residences() {
  return (
    <section className={styles.section} id="residences" aria-labelledby="residences-title">
      <div className="container">
        <div className={styles.header}><div><p className="eyebrow">Резиденции</p><h2 className="sectionTitle" id="residences-title">Пространства для разных сценариев жизни</h2></div><p>Панорамные окна, правильная геометрия комнат и приватные мастер-зоны в каждой планировке.</p></div>
        <div className={styles.grid}>
          {siteData.residences.map((residence) => <article className={styles.card} data-residence key={residence.id}><div className={styles.image}><Image src={residence.image} alt={`${residence.title}: ${residence.accent}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div><div className={styles.body}><div><span>{residence.rooms}</span><span>{residence.area} м²</span></div><h3>{residence.title}</h3><p>от {formatPrice(residence.price)} ₽</p><a href="#plans">Посмотреть планировку <span aria-hidden="true">→</span></a></div></article>)}
        </div>
        <div className={styles.floorPreview} aria-label="Доступность по этажам"><div><p className="eyebrow">Интерактивный этаж</p><h3>12 этаж</h3><p>4 свободные резиденции с видами на Москву-реку.</p><a className="textLink" href="#plans">Смотреть планировки <span aria-hidden="true">→</span></a></div><div className={styles.building}><Image src="/images/exterior.webp" alt="Высотный силуэт MONUMENT" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><ol className={styles.floors}>{siteData.floors.map(({floor}) => <li className={floor === 12 ? styles.activeFloor : ""} key={floor}>{String(floor).padStart(2,"0")}</li>)}</ol></div>
      </div>
    </section>
  );
}
