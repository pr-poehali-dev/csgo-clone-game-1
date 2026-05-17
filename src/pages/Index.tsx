import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
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

const MARQUEE_ITEMS = ["БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000₽", "ВОЗВРАТ 14 ДНЕЙ", "ОРИГИНАЛЬНЫЕ ТОВАРЫ", "ОПЛАТА ЛЮБЫМ СПОСОБОМ", "ПОДДЕРЖКА 24/7"];

type CartItem = { id: number; name: string; price: number; qty: number; image: string };
type Page = "home" | "contacts";

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [added, setAdded] = useState<number | null>(null);

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (p: (typeof PRODUCTS)[0]) => {
    setCart((prev) => {
      const ex = prev.find((i) => i.id === p.id);
      if (ex) return prev.map((i) => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1, image: p.image }];
    });
    setAdded(p.id);
    setTimeout(() => setAdded(null), 1200);
  };

  const changeQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter((i) => i.qty > 0)
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F7F5] font-golos">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-2">
            <span className="font-oswald text-2xl font-bold tracking-widest text-gradient">ShopPlay</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setPage("home")}
              className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${page === "home" ? "text-[#FF5A00]" : "text-foreground hover:text-[#FF5A00]"}`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("contacts")}
              className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${page === "contacts" ? "text-[#FF5A00]" : "text-foreground hover:text-[#FF5A00]"}`}
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage("contacts")}
              className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Phone" size={16} />
              <span>+7 (000) 000-00-00</span>
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#FF5A00] hover:bg-[#e05200] text-white px-4 py-2 rounded-full font-semibold text-sm transition-all btn-glow"
            >
              <Icon name="ShoppingCart" size={18} />
              <span className="hidden sm:inline">Корзина</span>
              {totalQty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#4F46E5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse-badge">
                  {totalQty}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="bg-[#FF5A00] overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-white font-oswald text-sm font-semibold tracking-widest uppercase mx-8">
              {item} <span className="opacity-50 mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PAGES */}
      {page === "home" && <HomePage addToCart={addToCart} added={added} />}
      {page === "contacts" && <ContactsPage />}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-right">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="font-oswald text-2xl font-bold uppercase">Корзина</h2>
              <button onClick={() => setCartOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="X" size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground p-8">
                <Icon name="ShoppingCart" size={56} />
                <p className="text-lg font-medium">Корзина пуста</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="bg-[#FF5A00] hover:bg-[#e05200] text-white px-6 py-3 rounded-full font-semibold transition-all btn-glow"
                >
                  Перейти к товарам
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center bg-[#F8F7F5] rounded-2xl p-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{item.name}</p>
                        <p className="text-[#FF5A00] font-bold">{item.price.toLocaleString("ru")} ₽</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => changeQty(item.id, -1)}
                          className="w-8 h-8 rounded-full border-2 border-border hover:border-[#FF5A00] flex items-center justify-center font-bold transition-colors"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-bold">{item.qty}</span>
                        <button
                          onClick={() => changeQty(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-[#FF5A00] text-white flex items-center justify-center font-bold hover:bg-[#e05200] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Итого:</span>
                    <span className="font-oswald text-2xl font-bold">{totalPrice.toLocaleString("ru")} ₽</span>
                  </div>
                  <button className="w-full bg-[#FF5A00] hover:bg-[#e05200] text-white py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow flex items-center justify-center gap-2">
                    <Icon name="CreditCard" size={20} />
                    Оформить заказ
                  </button>
                  <p className="text-xs text-center text-muted-foreground">Нажимая кнопку, вы соглашаетесь с условиями</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function HomePage({ addToCart, added }: { addToCart: (p: (typeof PRODUCTS)[0]) => void; added: number | null }) {
  const categories = ["Все", "Электроника", "Аксессуары", "Lifestyle", "Спорт"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0D0D0D] min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, #FF5A00 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #4F46E5 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/1551c3e4-dbe2-4206-a887-60a4a706ad22.jpg)` }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0D0D0D] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-[#FF5A00] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Новая коллекция 2026</span>
            </div>
            <h1 className="font-oswald text-6xl md:text-8xl font-black text-white leading-none mb-6 animate-fade-in delay-100">
              СТИЛЬ <br />
              <span className="text-gradient">БЕЗ</span>{" "}
              <br />
              ГРАНИЦ
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-md font-golos animate-fade-in delay-200">
              Откройте для себя уникальные товары, которые меняют повседневную жизнь. Доставка по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <button
                onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#FF5A00] hover:bg-[#e05200] text-white px-8 py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow flex items-center gap-2 justify-center"
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={20} />
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all flex items-center gap-2 justify-center">
                <Icon name="Play" size={20} />
                О нас
              </button>
            </div>

            <div className="flex gap-8 mt-12 animate-fade-in delay-400">
              {[["5000+", "Товаров"], ["98%", "Довольных"], ["3 дня", "Доставка"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-oswald text-3xl font-bold text-white">{num}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "Truck", title: "Бесплатная доставка", desc: "От 3 000 ₽" },
            { icon: "RotateCcw", title: "Возврат 14 дней", desc: "Без вопросов" },
            { icon: "Shield", title: "Гарантия", desc: "Оригинальные товары" },
            { icon: "Headphones", title: "Поддержка 24/7", desc: "Всегда на связи" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4">
              <div className="w-10 h-10 bg-[#FF5A00]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon name={f.icon as never} size={20} className="text-[#FF5A00]" />
              </div>
              <div>
                <div className="font-semibold text-sm">{f.title}</div>
                <div className="text-muted-foreground text-xs">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-foreground">
              КАТАЛОГ <span className="text-[#FF5A00]">ТОВАРОВ</span>
            </h2>
            <p className="text-muted-foreground mt-2">Выбирайте из тысяч позиций</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#FF5A00] text-white shadow-lg shadow-orange-200"
                    : "bg-white border border-border text-foreground hover:border-[#FF5A00] hover:text-[#FF5A00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} justAdded={added === product.id} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="mx-4 md:mx-8 mb-16 rounded-3xl overflow-hidden relative bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] min-h-[240px] flex items-center">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative px-8 md:px-16 py-12">
          <p className="text-white/70 font-medium uppercase tracking-widest text-sm mb-3">Специальное предложение</p>
          <h2 className="font-oswald text-4xl md:text-6xl font-black text-white mb-4">
            СКИДКА 20%
            <br />
            <span className="text-[#FF5A00]">НА ВСЁ</span>
          </h2>
          <p className="text-white/70 mb-6">По промокоду <strong className="text-white">NOVA20</strong> до конца месяца</p>
          <button className="bg-white text-[#4F46E5] px-8 py-3 rounded-2xl font-oswald font-bold uppercase tracking-wider hover:bg-white/90 transition-all">
            Получить скидку
          </button>
        </div>
      </section>
    </main>
  );
}

function ProductCard({
  product,
  onAdd,
  justAdded,
  delay,
}: {
  product: (typeof PRODUCTS)[0];
  onAdd: (p: (typeof PRODUCTS)[0]) => void;
  justAdded: boolean;
  delay: number;
}) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden card-hover animate-fade-in border border-border group"
      style={{ animationDelay: `${delay}ms`, opacity: 0, animationFillMode: "forwards" }}
    >
      <div className="relative overflow-hidden h-56">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
            product.badge === "Хит" ? "bg-[#FF5A00]" :
            product.badge === "Новинка" ? "bg-[#4F46E5]" :
            product.badge === "Топ" ? "bg-[#F72585]" :
            product.badge === "Эксклюзив" ? "bg-[#0D0D0D]" :
            "bg-[#FF5A00]"
          }`}>
            {product.badge}
          </span>
        </div>
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-muted-foreground hover:text-[#F72585] transition-colors">
          <Icon name="Heart" size={16} />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-oswald font-bold text-xl mb-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="Star" size={12} className={i < Math.floor(product.rating) ? "text-[#FF5A00] fill-[#FF5A00]" : "text-border"} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-oswald text-2xl font-bold text-[#FF5A00]">{product.price.toLocaleString("ru")} ₽</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">{product.oldPrice.toLocaleString("ru")} ₽</span>
            )}
          </div>
          <button
            onClick={() => onAdd(product)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
              justAdded
                ? "bg-green-500 text-white scale-95"
                : "bg-[#FF5A00] hover:bg-[#e05200] text-white btn-glow"
            }`}
          >
            {justAdded ? (
              <>
                <Icon name="Check" size={16} />
                Добавлено
              </>
            ) : (
              <>
                <Icon name="Plus" size={16} />
                В корзину
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="mb-12 animate-fade-in">
        <p className="text-[#FF5A00] font-semibold uppercase tracking-widest text-sm mb-3">Мы всегда на связи</p>
        <h1 className="font-oswald text-5xl md:text-7xl font-black">
          КОНТАКТЫ <span className="text-gradient">& СВЯЗЬ</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* INFO */}
        <div className="space-y-6 animate-fade-in delay-100">
          {[
            { icon: "Phone", title: "Телефон", value: "+7 (000) 000-00-00", desc: "Звонки: Пн–Пт 9:00–20:00", color: "bg-[#FF5A00]/10 text-[#FF5A00]" },
            { icon: "Mail", title: "Email", value: "hello@nova-shop.ru", desc: "Ответим в течение 2 часов", color: "bg-[#4F46E5]/10 text-[#4F46E5]" },
            { icon: "MapPin", title: "Офис", value: "Москва, ул. Примерная, 1", desc: "Пн–Пт 10:00–18:00", color: "bg-[#F72585]/10 text-[#F72585]" },
            { icon: "MessageCircle", title: "Telegram", value: "@nova_shop", desc: "Быстрые ответы в чате", color: "bg-sky-100 text-sky-500" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border hover:border-[#FF5A00]/30 transition-all card-hover">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                <Icon name={item.icon as never} size={22} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.title}</p>
                <p className="font-bold text-lg">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="p-5 bg-[#0D0D0D] rounded-2xl text-white">
            <h3 className="font-oswald text-xl font-bold mb-3">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Twitter", label: "VK" },
              ].map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-2 bg-white/10 hover:bg-[#FF5A00] px-4 py-2 rounded-xl text-sm font-medium transition-all"
                >
                  <Icon name={s.icon as never} size={16} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl p-8 border border-border shadow-sm animate-fade-in delay-200">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4 animate-scale-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-green-500" />
              </div>
              <h3 className="font-oswald text-2xl font-bold">Сообщение отправлено!</h3>
              <p className="text-muted-foreground">Мы ответим вам в течение 2 часов</p>
              <button onClick={() => setSent(false)} className="text-[#FF5A00] font-semibold hover:underline">
                Отправить ещё
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-oswald text-2xl font-bold mb-6">Написать нам</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Александр"
                      className="w-full px-4 py-3 bg-[#F8F7F5] border border-border rounded-xl text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full px-4 py-3 bg-[#F8F7F5] border border-border rounded-xl text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.ru"
                    className="w-full px-4 py-3 bg-[#F8F7F5] border border-border rounded-xl text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Сообщение</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, чем мы можем помочь..."
                    className="w-full px-4 py-3 bg-[#F8F7F5] border border-border rounded-xl text-sm focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF5A00] hover:bg-[#e05200] text-white py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-20 mb-8">
        <h2 className="font-oswald text-3xl font-bold mb-8">
          ЧАСТЫЕ <span className="text-[#FF5A00]">ВОПРОСЫ</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Как быстро доставляете?", a: "Доставка по Москве — 1-2 дня, по России — 3-7 рабочих дней в зависимости от региона." },
            { q: "Можно вернуть товар?", a: "Да, возврат возможен в течение 14 дней после получения заказа без объяснения причин." },
            { q: "Какие способы оплаты?", a: "Принимаем карты Visa, MasterCard, МИР, наличные при получении, СБП, ЮMoney и другие." },
            { q: "Есть ли гарантия?", a: "Все товары имеют гарантию производителя. На электронику — минимум 12 месяцев." },
          ].map((item) => (
            <div key={item.q} className="bg-white border border-border rounded-2xl p-6 hover:border-[#FF5A00]/30 transition-all">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <span className="text-[#FF5A00] font-oswald font-bold">Q.</span>
                {item.q}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}