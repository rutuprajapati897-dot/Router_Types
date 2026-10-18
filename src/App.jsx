
import { useState } from "react";
import HashPage from "./Pages/HashPage";
import MemoryPage from "./Pages/MemoryPage";
import StaticPage from "./Pages/StaticPage";

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
