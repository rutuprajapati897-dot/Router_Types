
import { HashRouter, Routes, Route, Link } from "react-router-dom";

export default function HashPage() {
  return (
    <HashRouter>
      <h2>HashRouter</h2>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route path="/about" element={<h3>About Page</h3>} />
      </Routes>
    </HashRouter>
  );
}
