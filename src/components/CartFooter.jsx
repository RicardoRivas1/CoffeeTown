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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-line shadow-2xl z-50 transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Lado Izquierdo: Precios e Información */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full">
              {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
            </span>
            <button 
              onClick={onClear}
              className="text-[11px] text-red-500 underline hover:text-red-700"
            >
              Vaciar
            </button>
          </div>
          <p className="text-base font-bold text-ink mt-0.5">
            Total: ${totalUSD.toFixed(2)}
          </p>
          {bcvRate > 0 && (
            <p className="text-xs text-ink-soft">
              Bs. {totalVES.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          )}
        </div>

        {/* Lado Derecho: Botón directo a WhatsApp */}
        <button
          onClick={handleSendWhatsApp}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-5 rounded-2xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <span>Pedir por WhatsApp</span>
        </button>
      </div>
    </div>
  );
}