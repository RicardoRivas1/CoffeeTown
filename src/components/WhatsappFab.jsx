const WHATSAPP_NUMBER = "584241598047";
const WHATSAPP_MESSAGE = "¡Hola Coffee Town! Vi su catálogo web y quisiera hacer un pedido.";

export default function WhatsappFab() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[22px] left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[480px] bg-gradient-to-br from-[#25D366] to-[#1DAE54] text-white border-none rounded-2xl py-[15px] px-5 text-[15px] font-extrabold flex items-center justify-center gap-2.5 shadow-fab z-40 tracking-wide active:scale-[0.97] transition-transform"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.14.82.84-3.06-.2-.32a8.02 8.02 0 0 1-1.24-4.24c0-4.44 3.62-8.06 8.07-8.06 2.15 0 4.18.84 5.7 2.36a8 8 0 0 1 2.36 5.71c0 4.44-3.62 8.16-7.73 8.16Zm4.42-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      Pedir por WhatsApp
    </button>
  );
}
