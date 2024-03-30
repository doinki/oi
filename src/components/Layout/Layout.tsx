import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export function Layout() {
  return (
    <>
      <Header />
      <main className="overflow-hidden px-16">
        <Outlet />
      </main>
    </>
  );
}
