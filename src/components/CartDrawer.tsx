import Icon from "@/components/ui/icon";
import { CartItem } from "@/data/shop";

interface CartDrawerProps {
  cart: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onChangeQty: (id: number, delta: number) => void;
}

export default function CartDrawer({ cart, totalPrice, onClose, onChangeQty }: CartDrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-right">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-oswald text-2xl font-bold uppercase">Корзина</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="X" size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground p-8">
            <Icon name="ShoppingCart" size={56} />
            <p className="text-lg font-medium">Корзина пуста</p>
            <button
              onClick={onClose}
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
                      onClick={() => onChangeQty(item.id, -1)}
                      className="w-8 h-8 rounded-full border-2 border-border hover:border-[#FF5A00] flex items-center justify-center font-bold transition-colors"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-bold">{item.qty}</span>
                    <button
                      onClick={() => onChangeQty(item.id, 1)}
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
  );
}
