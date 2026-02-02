import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">616 East 18 St.</h1>
        <ul className="flex space-x-6">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/amenities" className="hover:text-blue-600">Amenities</NavLink>
          <NavLink to="/resources" className="hover:text-blue-600">Resources</NavLink>
        </ul>
      </nav>
    </header>
  );
}