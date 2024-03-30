import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex justify-between px-16 py-6">
      <h1>
        <NavLink to="/">oi</NavLink>
      </h1>
    </header>
  );
}
