import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { cn } from '../ui/Container';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', to: '/work' },
    { name: 'Studio', to: '/studio' },
    { name: 'Services', to: '/studio#services' },
  ];

  return (
    <motion.header 
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 1.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 transition-colors duration-300"
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-serif tracking-widest uppercase font-semibold text-charcoal hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
          >
            Atelier Noir
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="relative text-sm tracking-wide font-medium text-charcoal/70 hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-4 focus-visible:ring-offset-ivory group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-medium tracking-wide text-ivory bg-charcoal px-6 py-2.5 hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-ivory active:scale-[0.98]"
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-x-0 top-20 bg-ivory border-b border-charcoal/10 transition-all duration-300 ease-in-out overflow-hidden md:hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-lg font-medium text-charcoal p-2 hover:bg-charcoal/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-lg font-medium text-ivory bg-charcoal p-3 text-center hover:bg-black"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
