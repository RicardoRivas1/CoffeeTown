import React from "react";
import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard.jsx";
import { sectionTitles } from "../data/products.js";

function Section({ title, items, onAdd, totalCount }) {
  return (
    <>
      <div className="px-5 pt-4.5 pb-2 flex items-baseline justify-between">
        <h2 className="text-[19px] font-semibold text-ink m-0">{title}</h2>
        <span className="text-[12.5px] font-semibold text-ink-soft">
          {totalCount !== undefined ? totalCount : items.length} items
        </span>
      </div>
      <div className="px-5 pt-1.5 pb-2.5 grid grid-cols-1 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

export default function ProductGrid({ products = [], activeCat, query = "", onAdd }) {
  // 1. Caso sin resultados de búsqueda
  if (!products || products.length === 0) {
    return (
      <div className="px-8 py-14 text-center text-ink-soft">
        <SearchX size={40} className="mx-auto mb-2.5 text-accent" strokeWidth={1.8} />
        <p className="text-sm font-semibold m-0">
          No encontramos nada con ese nombre.
          <br />
          Intenta con otra búsqueda.
        </p>
      </div>
    );
  }

  // 2. Si la pestaña activa es "todos" y no hay texto en la búsqueda
  const groupByCategory = activeCat === "todos" && !query.trim();

  if (groupByCategory) {
    return (
      <>
        {Object.keys(sectionTitles).map((catId, index) => {
          const items = products.filter((p) => p.cat === catId);
          if (items.length === 0) return null;

          return (
            <Section
              key={catId}
              title={sectionTitles[catId]}
              items={items}
              totalCount={index === 0 ? products.length : items.length}
              onAdd={onAdd}
            />
          );
        })}
      </>
    );
  }

  // 3. Si seleccionó una categoría específica o está buscando
  const filteredProducts = products.filter((p) => {
    const matchesCat = activeCat === "todos" || p.cat === activeCat;
    const matchesQuery =
      !query.trim() ||
      (p.title || p.name || "").toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const title = activeCat === "todos" ? "Resultados" : sectionTitles[activeCat] || "Productos";

  return <Section title={title} items={filteredProducts} onAdd={onAdd} />;
}