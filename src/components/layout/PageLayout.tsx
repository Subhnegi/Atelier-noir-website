import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-ivory text-charcoal">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
