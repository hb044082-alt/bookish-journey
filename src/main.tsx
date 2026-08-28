import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

type RamResponse = {
  ram_mb: number;
};

function App() {
  const [ram, setRam] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/get-ram")
      .then((response) => response.json() as Promise<RamResponse>)
      .then((data) => setRam(data.ram_mb))
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>RAM API</h1>
      <p>
        {ram === null ? "Loading..." : `RAM: ${ram} MB`}
      </p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
