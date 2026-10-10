import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
              Atelier Noir
            </Link>
            <p className="text-ivory/70 max-w-sm text-sm leading-relaxed">
              Spaces that speak quietly. Live beautifully. Architecture and interior design studio shaping thoughtful spaces around the people who inhabit them.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory/50">Studio</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/work" className="text-sm text-ivory/80 hover:text-white transition-colors">Selected Work</Link>
              <Link to="/studio" className="text-sm text-ivory/80 hover:text-white transition-colors">About Us</Link>
              <Link to="/studio#services" className="text-sm text-ivory/80 hover:text-white transition-colors">Services</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory/50">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:studio@example.com" className="text-sm text-ivory/80 hover:text-white transition-colors">studio@example.com</a>
              <Link to="/contact" className="text-sm text-ivory/80 hover:text-white transition-colors">Start a project</Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/50">
            &copy; {new Date().getFullYear()} Atelier Noir. All rights reserved. Demo site only.
          </p>
          <div className="flex gap-4 text-xs text-ivory/50">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Pinterest</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
