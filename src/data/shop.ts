export type CartItem = { id: number; name: string; price: number; qty: number; image: string };
export type Page = "home" | "contacts";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  badge: string;
  image: string;
  rating: number;
  reviews: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "AirFlow Pro Max",
    category: "Электроника",
    price: 12990,
    oldPrice: 17990,
    badge: "Хит",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/1551c3e4-dbe2-4206-a887-60a4a706ad22.jpg",
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 2,
    name: "Nova Style Kit",
    category: "Аксессуары",
    price: 4490,
    oldPrice: null,
    badge: "Новинка",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/e3bd1045-414e-4b05-a2a3-4044838d045b.jpg",
    rating: 4.7,
    reviews: 128,
  },
  {
    id: 3,
    name: "Urban Vibe Set",
    category: "Lifestyle",
    price: 8990,
    oldPrice: 11500,
    badge: "-22%",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/89b4aa08-d89e-4c9d-a9a6-31818bfa7370.jpg",
    rating: 4.8,
    reviews: 217,
  },
  {
    id: 4,
    name: "Pulse Edition X",
    category: "Спорт",
    price: 6790,
    oldPrice: null,
    badge: "Топ",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/1551c3e4-dbe2-4206-a887-60a4a706ad22.jpg",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 5,
    name: "Glow Series Pro",
    category: "Аксессуары",
    price: 3290,
    oldPrice: 4500,
    badge: "-27%",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/e3bd1045-414e-4b05-a2a3-4044838d045b.jpg",
    rating: 4.5,
    reviews: 63,
  },
  {
    id: 6,
    name: "Metro Capsule",
    category: "Lifestyle",
    price: 15900,
    oldPrice: null,
    badge: "Эксклюзив",
    image: "https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/89b4aa08-d89e-4c9d-a9a6-31818bfa7370.jpg",
    rating: 5.0,
    reviews: 41,
  },
];

export const MARQUEE_ITEMS = [
  "БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000₽",
  "ВОЗВРАТ 14 ДНЕЙ",
  "ОРИГИНАЛЬНЫЕ ТОВАРЫ",
  "ОПЛАТА ЛЮБЫМ СПОСОБОМ",
  "ПОДДЕРЖКА 24/7",
];
