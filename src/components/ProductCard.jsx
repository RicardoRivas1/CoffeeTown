import { Plus } from "lucide-react";

const badgeStyles = {
  hot: "bg-[#FDECE3] text-[#B4502A]",
  star: "bg-[#FDF3D8] text-[#95700B]",
};

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-card rounded-card shadow-card overflow-hidden flex gap-3.5 p-3 border border-black/[0.03] animate-rise">
      <img
        src={product.img}
        alt={product.name}
        loading="lazy"
        className="w-[104px] h-[104px] rounded-2xl object-cover flex-shrink-0 bg-accent-soft"
      />
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
        <div className="flex items-start justify-between gap-1.5">
          <h3 className="text-[16px] font-semibold leading-tight text-ink m-0">{product.name}</h3>
          {product.badge && (
            <span
              className={`text-[12.5px] font-extrabold px-[9px] py-1 rounded-full whitespace-nowrap flex-shrink-0 ${badgeStyles[product.badge]}`}
            >
              {product.badgeText}
            </span>
          )}
        </div>
        <p className="text-[12.5px] leading-snug text-ink-soft m-0 line-clamp-2">{product.desc}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-display font-semibold text-[17px] text-accent-dark">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAdd?.(product)}
            aria-label={`Agregar ${product.name}`}
            className="w-[34px] h-[34px] rounded-xl bg-accent-soft text-accent-dark flex items-center justify-center flex-shrink-0 transition-all active:scale-90 active:bg-accent active:text-white"
          >
            <Plus size={17} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </div>
  );
}