import Image from "next/image";
import { siteData } from "@/data/site";
import { FloorSelector } from "./FloorSelector";
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
        <FloorSelector />
      </div>
    </section>
  );
}
