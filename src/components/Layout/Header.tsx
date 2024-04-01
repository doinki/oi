import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between px-16 py-6">
      <strong className="text-4xl">
        <NavLink title="Go to oi Home" to="/">
          oi
        </NavLink>
      </strong>
    </header>
  );
}
