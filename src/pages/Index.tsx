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

type Page = "home" | "contacts";
type AuthModal = "login" | "register" | null;

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [authModal, setAuthModal] = useState<AuthModal>(null);
  const [authForm, setAuthForm] = useState({ email: "", password: "", name: "" });

  return (
    <div className="min-h-screen bg-[#0a0612] font-golos">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#0a0612]/90 backdrop-blur-md border-b border-[#2d1b4e] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-2">
            <span className="font-oswald text-2xl font-bold tracking-widest text-gradient">ShopPlay</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setPage("home")}
              className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${page === "home" ? "text-[#a855f7]" : "text-foreground hover:text-[#a855f7]"}`}
            >
              Главная
            </button>
            <button
              onClick={() => setPage("contacts")}
              className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors ${page === "contacts" ? "text-[#a855f7]" : "text-foreground hover:text-[#a855f7]"}`}
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage("contacts")}
              className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Send" size={16} />
              <span>Telegram: @Qwerty_Police</span>
            </button>
            <button
              onClick={() => setAuthModal("login")}
              className="border border-[#2d1b4e] hover:border-[#a855f7] hover:text-[#a855f7] text-foreground px-4 py-2 rounded-full font-semibold text-sm transition-all"
            >
              Вход
            </button>
            <button
              onClick={() => setAuthModal("register")}
              className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-4 py-2 rounded-full font-semibold text-sm transition-all btn-glow"
            >
              Регистрация
            </button>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="bg-[#a855f7] overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-white font-oswald text-sm font-semibold tracking-widest uppercase mx-8">
              {item} <span className="opacity-50 mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PAGES */}
      {page === "home" && <HomePage />}
      {page === "contacts" && <ContactsPage />}

      {/* AUTH MODAL */}
      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setAuthModal(null)} />
          <div className="relative bg-[#130d24] rounded-3xl shadow-2xl w-full max-w-md animate-scale-in border border-[#2d1b4e]">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => { setAuthModal("login"); setAuthForm({ email: "", password: "", name: "" }); }}
                className={`flex-1 py-4 font-oswald font-bold text-lg uppercase tracking-wider transition-colors rounded-tl-3xl ${authModal === "login" ? "text-[#a855f7] border-b-2 border-[#a855f7]" : "text-muted-foreground hover:text-foreground"}`}
              >
                Вход
              </button>
              <button
                onClick={() => { setAuthModal("register"); setAuthForm({ email: "", password: "", name: "" }); }}
                className={`flex-1 py-4 font-oswald font-bold text-lg uppercase tracking-wider transition-colors rounded-tr-3xl ${authModal === "register" ? "text-[#a855f7] border-b-2 border-[#a855f7]" : "text-muted-foreground hover:text-foreground"}`}
              >
                Регистрация
              </button>
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-8">
              {authModal === "login" ? (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                      placeholder="your@email.ru"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Пароль</label>
                    <input
                      type="password"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow mt-2"
                  >
                    Войти
                  </button>
                  <p className="text-center text-sm text-muted-foreground">
                    Нет аккаунта?{" "}
                    <button onClick={() => setAuthModal("register")} className="text-[#a855f7] font-semibold hover:underline">
                      Зарегистрироваться
                    </button>
                  </p>
                </form>
              ) : (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Имя</label>
                    <input
                      type="text"
                      value={authForm.name}
                      onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                      placeholder="Александр"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      value={authForm.email}
                      onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                      placeholder="your@email.ru"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Пароль</label>
                    <input
                      type="password"
                      value={authForm.password}
                      onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow mt-2"
                  >
                    Создать аккаунт
                  </button>
                  <p className="text-center text-sm text-muted-foreground">
                    Уже есть аккаунт?{" "}
                    <button onClick={() => setAuthModal("login")} className="text-[#a855f7] font-semibold hover:underline">
                      Войти
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const categories = ["Все", "Электроника", "Аксессуары", "Lifestyle", "Спорт"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0612] min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, #a855f7 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #7c3aed 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f74bf30a-d3f6-422e-9f78-66619bd6e3a8/files/1551c3e4-dbe2-4206-a887-60a4a706ad22.jpg)` }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0a0612] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" />
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
                className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow flex items-center gap-2 justify-center"
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
      <section className="bg-[#0f0920] py-12 border-b border-[#2d1b4e]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "Truck", title: "Бесплатная доставка", desc: "От 3 000 ₽" },
            { icon: "RotateCcw", title: "Возврат 14 дней", desc: "Без вопросов" },
            { icon: "Shield", title: "Гарантия", desc: "Оригинальные товары" },
            { icon: "Headphones", title: "Поддержка 24/7", desc: "Всегда на связи" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-4">
              <div className="w-10 h-10 bg-[#a855f7]/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon name={f.icon as never} size={20} className="text-[#a855f7]" />
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
              КАТАЛОГ <span className="text-[#a855f7]">ТОВАРОВ</span>
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
                    ? "bg-[#a855f7] text-white shadow-lg shadow-purple-900"
                    : "bg-[#130d24] border border-[#2d1b4e] text-foreground hover:border-[#a855f7] hover:text-[#a855f7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 100} />
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
            <span className="text-[#d946ef]">НА ВСЁ</span>
          </h2>
          <p className="text-white/70 mb-6">По промокоду <strong className="text-white">SHOP20</strong> до конца месяца</p>
          <button className="bg-white text-[#4F46E5] px-8 py-3 rounded-2xl font-oswald font-bold uppercase tracking-wider hover:bg-white/90 transition-all">
            Получить скидку
          </button>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product, delay }: { product: (typeof PRODUCTS)[0]; delay: number }) {
  return (
    <div
      className="bg-[#130d24] rounded-3xl overflow-hidden card-hover animate-fade-in border border-[#2d1b4e] group"
      style={{ animationDelay: `${delay}ms`, opacity: 0, animationFillMode: "forwards" }}
    >
      <div className="relative overflow-hidden h-56">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
            product.badge === "Хит" ? "bg-[#a855f7]" :
            product.badge === "Новинка" ? "bg-[#7c3aed]" :
            product.badge === "Топ" ? "bg-[#d946ef]" :
            product.badge === "Эксклюзив" ? "bg-[#1e0a3c]" :
            "bg-[#a855f7]"
          }`}>
            {product.badge}
          </span>
        </div>
        <button className="absolute top-3 right-3 w-9 h-9 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-muted-foreground hover:text-[#d946ef] transition-colors">
          <Icon name="Heart" size={16} />
        </button>
      </div>

      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-oswald font-bold text-xl mb-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} name="Star" size={12} className={i < Math.floor(product.rating) ? "text-[#a855f7] fill-[#a855f7]" : "text-[#2d1b4e]"} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-oswald text-2xl font-bold text-[#a855f7]">{product.price.toLocaleString("ru")} ₽</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">{product.oldPrice.toLocaleString("ru")} ₽</span>
            )}
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm bg-[#a855f7] hover:bg-[#9333ea] text-white btn-glow transition-all duration-300">
            <Icon name="ShoppingBag" size={16} />
            Купить
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
        <p className="text-[#a855f7] font-semibold uppercase tracking-widest text-sm mb-3">Мы всегда на связи</p>
        <h1 className="font-oswald text-5xl md:text-7xl font-black">
          КОНТАКТЫ <span className="text-gradient">& СВЯЗЬ</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* INFO */}
        <div className="space-y-6 animate-fade-in delay-100">
          {[
            { icon: "Send", title: "Telegram", value: "@QWERTY_Police", desc: "Писать: Пн–Вс 11:00–22:00", color: "bg-[#a855f7]/10 text-[#a855f7]" },
            { icon: "Mail", title: "Gmail", value: "kvertiks66@gmail.com", desc: "Ответим в течение дня", color: "bg-[#7c3aed]/10 text-[#a855f7]" },
            { icon: "Package", title: "Доставка", value: "По всей России", desc: "Avito, СДЭК, Почта России", color: "bg-[#d946ef]/10 text-[#d946ef]" },
            { icon: "MessageCircle", title: "Telegram", value: "@nova_shop", desc: "Быстрые ответы в чате", color: "bg-[#4c1d95]/30 text-[#c4b5fd]" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 bg-[#130d24] rounded-2xl border border-[#2d1b4e] hover:border-[#a855f7]/40 transition-all card-hover">
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

          <div className="p-5 bg-[#0f0920] border border-[#2d1b4e] rounded-2xl text-white">
            <h3 className="font-oswald text-xl font-bold mb-3">Мы в соцсетях</h3>
            <div className="flex gap-3">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Twitter", label: "VK" },
              ].map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-2 bg-white/10 hover:bg-[#a855f7] px-4 py-2 rounded-xl text-sm font-medium transition-all"
                >
                  <Icon name={s.icon as never} size={16} />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#130d24] rounded-3xl p-8 border border-[#2d1b4e] shadow-sm animate-fade-in delay-200">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4 animate-scale-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-green-500" />
              </div>
              <h3 className="font-oswald text-2xl font-bold">Сообщение отправлено!</h3>
              <p className="text-muted-foreground">Мы ответим вам в течение 2 часов</p>
              <button onClick={() => setSent(false)} className="text-[#a855f7] font-semibold hover:underline">
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
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
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
                    className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Сообщение</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите, чем мы можем помочь..."
                    className="w-full px-4 py-3 bg-[#0a0612] border border-[#2d1b4e] rounded-xl text-sm text-foreground focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-4 rounded-2xl font-oswald font-bold text-lg uppercase tracking-wider transition-all btn-glow flex items-center justify-center gap-2"
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
          ЧАСТЫЕ <span className="text-[#a855f7]">ВОПРОСЫ</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "Как быстро доставляете?", a: "Доставка по Москве — 1-2 дня, по России — 3-7 рабочих дней в зависимости от региона." },
            { q: "Можно вернуть товар?", a: "Да, возврат возможен в течение 14 дней после получения заказа без объяснения причин." },
            { q: "Какие способы оплаты?", a: "Принимаем карты Visa, MasterCard, МИР, наличные при получении, СБП, ЮMoney и другие." },
            { q: "Есть ли гарантия?", a: "Все товары имеют гарантию производителя. На электронику — минимум 12 месяцев." },
          ].map((item) => (
            <div key={item.q} className="bg-[#130d24] border border-[#2d1b4e] rounded-2xl p-6 hover:border-[#a855f7]/40 transition-all">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <span className="text-[#a855f7] font-oswald font-bold">Q.</span>
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