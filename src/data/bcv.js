// src/data/bcv.js
export async function fetchBcvRate() {
  try {
    const res = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
    const data = await res.json();
    return data.promedio; // Retorna el precio del dólar BCV en Bs.
  } catch (error) {
    console.error("Error al obtener la tasa BCV:", error);
    return 0; // Tasa por defecto si falla la API
  }
}