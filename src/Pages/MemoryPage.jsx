
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

export default function MemoryPage() {
  return (
    <MemoryRouter>
      <h2>MemoryRouter</h2>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route path="/about" element={<h3>About Page</h3>} />
      </Routes>
    </MemoryRouter>
  );
}
