import { useEffect, useState } from "react";
import { fetchQuote } from "../services/api";

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      setLoading(true);
      const q = await fetchQuote();
      setQuote(q);
    } catch (e) {
      setError(e.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h2>Inicio</h2>
      <p>Proyecto Final React (Lista de Tareas)</p>

      <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 10 }}>
        <h3>Frase motivacional (API)</h3>

        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}

        {quote && !loading && !error && (
          <blockquote style={{ margin: 0 }}>
            “{quote.content}”
            <footer style={{ marginTop: 8, fontWeight: 700 }}>
              — {quote.author}
            </footer>
          </blockquote>
        )}

        <button onClick={load} style={{ marginTop: 10 }}>
          Nueva frase
        </button>
      </div>
    </section>
  );
}
