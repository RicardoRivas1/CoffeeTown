import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="px-5 pt-6 pb-1">
      <div className="flex items-center gap-3">
       <img 
  src="images (1).jpg" 
  alt="Coffee Town" 
  className="w-16 h-16 rounded-2xl object-cover shadow-md"
/>
        <div>
          <h1 className="text-2xl font-bold leading-tight text-ink m-0">Coffee Town</h1>
          <p className="text-[12.5px] font-medium tracking-wide text-ink-soft m-0 mt-0.5">
            Café de Especialidad &amp; Repostería
          </p>
        </div>
      </div>
    </header>
  );
}
