import { useState } from "react";
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

function Pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  const [router, setRouter] = useState("hash");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100">
      <header className="bg-indigo-950 px-5 py-8 text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
          React Practical 03
        </p>
        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
          Router Explorer
        </h1>
        <p className="mt-3 text-indigo-200">
          Discover three types of React Router
        </p>
      </header>

      <main className="mx-auto max-w-4xl p-5">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-lg">
          <label className="mb-3 block font-bold text-gray-700">
            Select Router Type
          </label>

          <select
            value={router}
            onChange={(e) => setRouter(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 outline-none focus:border-indigo-500"
          >
            <option value="hash">HashRouter</option>
            <option value="memory">MemoryRouter</option>
            <option value="static">StaticRouter</option>
          </select>

          <p className="mt-3 text-sm text-gray-500">
            {router === "hash" &&
              "URL includes #. Suitable for static hosting."}
            {router === "memory" &&
              "Navigation stays in memory; the browser URL does not change."}
            {router === "static" &&
              "Used for server-side rendering; see the explanation below."}
          </p>
        </div>

        <section className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {router === "hash" && (
            <HashRouter>
              <Pages />
            </HashRouter>
          )}

          {router === "memory" && (
            <MemoryRouter>
              <Pages />
            </MemoryRouter>
          )}

          {router === "static" && (
            <div className="p-8 text-center">
              <div className="text-6xl">🖥️</div>
              <h2 className="mt-4 text-3xl font-bold text-orange-600">
                StaticRouter
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                StaticRouter provides routing context while rendering React
                pages on a server. It is useful for server-side rendering
                and does not perform interactive browser navigation by itself.
              </p>
              <div className="mt-6 rounded-xl bg-orange-50 p-4 text-orange-800">
                Use StaticRouter in a server-rendering setup.
              </div>
            </div>
          )}
        </section>

        <footer className="py-6 text-center text-sm text-gray-500">
          Built with React Router and Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default App;