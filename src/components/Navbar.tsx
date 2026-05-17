import Icon from "@/components/ui/icon";
import { Page, MARQUEE_ITEMS } from "@/data/shop";

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  totalQty: number;
  onCartOpen: () => void;
}

export default function Navbar({ page, setPage, totalQty, onCartOpen }: NavbarProps) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-2">
            <span className="font-oswald text-2xl font-bold tracking-widest text-gradient">NOVA</span>
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
              onClick={onCartOpen}
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

      <div className="bg-[#FF5A00] overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-white font-oswald text-sm font-semibold tracking-widest uppercase mx-8">
              {item} <span className="opacity-50 mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
