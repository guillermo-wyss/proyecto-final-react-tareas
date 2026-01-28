export async function fetchQuote() {
    const res = await fetch("https://api.github.com/zen");
    if (!res.ok) throw new Error("No se pudo obtener la frase.");
  
    const text = await res.text(); // devuelve texto plano
    return { content: text, author: "GitHub Zen" };
  }
  