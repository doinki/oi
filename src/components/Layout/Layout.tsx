import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <>
      <Header />
      <main className="overflow-hidden px-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
