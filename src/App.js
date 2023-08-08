import { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("Click to generate a quote!");
  const [author, setAuthor] = useState("");

  const handleFetching = async function () {
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error("Something went wrong with fetching.");

      const data = await res.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main className="container">
      <div className="quotes-box">
        <div className="quotes">"{quote}"</div>
        <div className="quotes author">- {author}</div>
        <button onClick={handleFetching} className="btn btn-primary">
          Generate Quote
        </button>
      </div>
    </main>
  );
}
