// src/components/CartFooter.jsx
import React from 'react';

export default function CartFooter({ cart, bcvRate, onClear }) {
  // 1. Si no hay ítems en el carrito, no muestra nada
  if (!cart || cart.length === 0) return null;

  // 2. Calcular Totales
  const totalUSD = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalVES = totalUSD * bcvRate;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 3. Crear el mensaje de WhatsApp estructurado
  const handleSendWhatsApp = () => {
    const phoneNumber = "584241598047"; 

    let message = "☕ *¡Hola, Coffee Town! Quisiera realizar el siguiente pedido:*\n\n";

    cart.forEach((item) => {
      const subtotal = (item.price * item.quantity).toFixed(2);
      message += `• *${item.quantity}x* ${item.title || item.name} - $${subtotal}\n`;
    });

    message += `\n----------------------------------\n`;
    message += `💰 *Total USD:* $${totalUSD.toFixed(2)}\n`;
    if (bcvRate > 0) {
      message += `🇻🇪 *Total Bs. (Tasa BCV ${bcvRate.toFixed(2)}):* Bs. ${totalVES.toFixed(2)}\n`;
    }
    message += `----------------------------------\n`;
    message += `📝 *Método de Pago:* (Pago Móvil / Efectivo / Zelle)\n`;
    message += `📍 *Ubicación / Retiro:* \n`;

    const url = `https://wa.me/${584241598047}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

 return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-line flex items-center justify-between gap-3 pointer-events-auto">
        <div>
          <p className="text-xs font-medium text-ink-soft m-0">
            {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
          </p>
          <p className="text-base font-bold text-ink m-0">
            ${totalUSD.toFixed(2)}{' '}
            {bcvRate > 0 && (
              <span className="text-xs font-normal text-ink-soft">
                (~Bs. {totalVES.toFixed(2)})
              </span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClear}
            className="p-2 text-ink-soft hover:text-red-500 transition-colors"
            title="Vaciar carrito"
          >
            🗑️
          </button>
          <button
            onClick={handleSendWhatsApp}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-green-500/20 transition-all active:scale-95"
          >
            <span>Pedir por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
