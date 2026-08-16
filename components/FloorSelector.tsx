"use client";

import Image from "next/image";
import { useState } from "react";

import { siteData } from "@/data/site";
import styles from "./FloorSelector.module.css";

export function FloorSelector() {
  const [selectedFloor, setSelectedFloor] = useState(17);
  const selected = siteData.floors.find(({ floor }) => floor === selectedFloor) ?? siteData.floors[0];

  return (
    <div className={styles.selector} aria-label="Доступность по этажам">
      <div className={styles.copy}><p className="eyebrow">Интерактивный этаж</p><h3>{selected.floor} этаж</h3><p aria-live="polite">{selected.available} {selected.available === 1 ? "свободная резиденция" : "свободные резиденции"}</p><a className="textLink" href="#plans">Смотреть планировки <span aria-hidden="true">→</span></a></div>
      <div className={styles.building}><Image src="/images/exterior.webp" alt="Высотный силуэт MONUMENT" fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
      <div className={styles.floors} role="tablist" aria-label="Выбор этажа">
        {siteData.floors.map(({ floor }) => <button className={floor === selectedFloor ? styles.activeFloor : ""} key={floor} type="button" role="tab" aria-selected={floor === selectedFloor} aria-label={`${floor} этаж`} onClick={() => setSelectedFloor(floor)}>{String(floor).padStart(2,"0")}</button>)}
      </div>
    </div>
  );
}
