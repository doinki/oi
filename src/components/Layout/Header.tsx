import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between px-16 py-6">
      <strong className="text-4xl">
        <NavLink to="/" title="Go to oi Home">
          oi
        </NavLink>
      </strong>
    </header>
  );
}
