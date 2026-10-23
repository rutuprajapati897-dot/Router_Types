import { NavLink } from "react-router-dom";

function Navbar() {
  const style = ({ isActive }) =>
    `rounded-xl px-5 py-3 font-semibold transition ${
      isActive
        ? "bg-white text-indigo-700 shadow"
        : "text-indigo-100 hover:bg-indigo-700"
    }`;

  return (
    <nav className="flex flex-wrap justify-center gap-3 bg-indigo-950 p-4">
      <NavLink to="/" className={style}>🏠 Home</NavLink>
      <NavLink to="/about" className={style}>💡 About</NavLink>
      <NavLink to="/contact" className={style}>📩 Contact</NavLink>
    </nav>
  );
}

export default Navbar;