import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mt-4 mb-1 px-5">
      <Search
        size={18}
        className="absolute left-[35px] top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar en el menú…"
        autoComplete="off"
        className="w-full py-[13px] pl-[42px] pr-4 rounded-2xl border border-line bg-card text-[15px] text-ink shadow-card outline-none placeholder:text-[#B6AA9C] focus:border-accent transition-colors"
      />
    </div>
  );
}
