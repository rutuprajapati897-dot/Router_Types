
import { useState } from "react";
import HashPage from "./pages/HashPage";
import MemoryPage from "./pages/MemoryPage";
import StaticPage from "./pages/StaticPage";

export default function App() {
  const [type, setType] = useState("hash");

  return (
    <div>
      <h1>React Router Types</h1>

      <button onClick={() => setType("hash")}>HashRouter</button>
      <button onClick={() => setType("memory")}>MemoryRouter</button>
      <button onClick={() => setType("static")}>StaticRouter</button>

      <hr />

      {type === "hash" && <HashPage />}
      {type === "memory" && <MemoryPage />}
      {type === "static" && <StaticPage />}
    </div>
  );
}
