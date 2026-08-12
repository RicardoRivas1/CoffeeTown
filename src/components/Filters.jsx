export default function Filters({ categories = [], active, onChange }) {
  return (
    <div className="sticky top-0 z-30 bg-bg pt-3.5 pb-2.5 px-5">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {categories?.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              onClick={() => onChange(c.id)}
              className={`flex-shrink-0 px-4 py-[10px] rounded-full border text-[12px] font-bold whitespace-nowrap select-none transition-all active:scale-95 ${
                isActive
                  ? "bg-[#5C1D24] border-[#3c2a21] text-[#FDF6EE]"
                  : "bg-card border-line text-ink-soft"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}