export interface Residence {
  id: string;
  title: string;
  rooms: string;
  area: number;
  price: number;
  image: string;
  accent: string;
}

export interface FloorAvailability {
  floor: number;
  available: number;
  label: string;
}

export interface SiteData {
  brand: string;
  eyebrow: string;
  title: string;
  description: string;
  residences: Residence[];
  floors: FloorAvailability[];
  gallery: { image: string; label: string; alt: string }[];
  amenities: { number: string; title: string; text: string }[];
}

export const siteData: SiteData = {
  brand: "MONUMENT",
  eyebrow: "Премиальный дом в Хамовниках",
  title: "Архитектура личного пространства",
  description:
    "Клубный дом у Москвы-реки, где классическая пластика фасада встречается с современным ритмом жизни.",
  residences: [
    {
      id: "studio",
      title: "Камерная резиденция",
      rooms: "1 спальня",
      area: 54,
      price: 24900000,
      image: "/images/residence-1.webp",
      accent: "Панорамная гостиная",
    },
    {
      id: "family",
      title: "Семейная резиденция",
      rooms: "2 спальни",
      area: 86,
      price: 36500000,
      image: "/images/residence-2.webp",
      accent: "Мастер-спальня",
    },
    {
      id: "grand",
      title: "Гранд-резиденция",
      rooms: "3 спальни",
      area: 128,
      price: 52900000,
      image: "/images/residence-3.webp",
      accent: "Вид на Москву-реку",
    },
    {
      id: "penthouse",
      title: "Пентхаус",
      rooms: "4 спальни",
      area: 218,
      price: 89000000,
      image: "/images/residence-4.webp",
      accent: "Приватная терраса",
    },
  ],
  floors: Array.from({ length: 17 }, (_, index) => {
    const floor = 17 - index;
    const available = floor === 12 ? 4 : ((floor * 3) % 5) + 1;

    return {
      floor,
      available,
      label: `${available} ${available === 1 ? "резиденция" : "резиденции"}`,
    };
  }),
  gallery: [
    {
      image: "/images/interior-main.webp",
      label: "Гостиная",
      alt: "Панорамная гостиная резиденции MONUMENT",
    },
    {
      image: "/images/interior-detail.webp",
      label: "Мастер-спальня",
      alt: "Мастер-спальня в тёплых природных оттенках",
    },
    {
      image: "/images/kitchen.webp",
      label: "Кухня",
      alt: "Кухня с островом, мягкой подсветкой и видом на вечерний город",
    },
  ],
  amenities: [
    { number: "01", title: "Приватный парк", text: "Зелёный двор только для резидентов." },
    { number: "02", title: "Лаунж-гостиная", text: "Пространство для встреч и неспешного отдыха." },
    { number: "03", title: "Фитнес-клуб", text: "Тренировки и восстановление внутри дома." },
    { number: "04", title: "Сервис 24/7", text: "Консьерж и бытовые задачи в любое время." },
  ],
};
