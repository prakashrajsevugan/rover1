import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <header className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img
            className="h-9 w-9 rounded-xl shadow-md"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23386cf9'/%3E%3Cstop offset='100%25' stop-color='%239464f7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='28' height='28' rx='7' fill='url(%23g)'/%3E%3Cpath d='M10 17c2.5-2.8 5-4.2 7.5-4.2 2 0 3.4.9 3.4 2.7 0 1.9-1.4 3.3-3.4 3.3-1.4 0-2.6-.6-3.7-1.8l-.5.5c1.3 1.5 2.9 2.2 4.6 2.2 2.6 0 4.7-1.7 4.7-4.3 0-2.6-2-4.1-4.7-4.1-2.8 0-5.6 1.7-8.2 4.6z' fill='%23fff' fill-opacity='0.9'/%3E%3C/svg%3E"
            alt="AST logo"
          />
          <span className="text-xl font-bold tracking-wide">AST</span>
        </Link>

        <div className="flex items-center gap-4 text-white">
          <Link className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10" to="/start">Home</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10" to="/about">About</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10" to="/contact">Contact</Link>
          {username ? (
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                👤 {username}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Sign In / Sign Up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
