import Image from "next/image";
import styles from "./sections.module.css";

export function Plans() {
  return (
    <section className={styles.section} id="plans" aria-labelledby="plans-title"><div className="container">
      <div className={styles.header}><div><p className="eyebrow">Планировки</p><h2 className="sectionTitle" id="plans-title">Продуманная геометрия жизни</h2></div><p className={styles.intro}>Каждая резиденция разделяет приватные и гостевые сценарии, сохраняя длинные перспективы и естественный свет.</p></div>
      <div className={styles.planCard}><div className={styles.planImage}><Image src="/images/floor-plan.svg" alt="Планировка гранд-резиденции площадью 128 квадратных метров" width={900} height={680} /></div><div className={styles.planBody}><div><p className="eyebrow">Гранд-резиденция</p><h3>Три спальни<br />и вид на реку</h3><div className={styles.planMeta}><div><strong>128 м²</strong><span>площадь</span></div><div><strong>12</strong><span>этаж</span></div><div><strong>3,4 м</strong><span>потолки</span></div><div><strong>2</strong><span>ванные</span></div></div></div><a className="button buttonSolid" href="#contacts">Получить презентацию <span aria-hidden="true">→</span></a></div></div>
    </div></section>
  );
}
