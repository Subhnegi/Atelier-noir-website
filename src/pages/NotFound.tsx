import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="bg-ivory min-h-[70vh] flex items-center pt-20">
      <Container className="text-center max-w-2xl mx-auto">
        <h1 className="text-8xl font-serif text-charcoal mb-8">404</h1>
        <h2 className="text-2xl font-serif text-charcoal mb-6">Page not found.</h2>
        <p className="text-charcoal/70 font-light mb-12">
          The space you are looking for does not exist or has been moved.
        </p>
        <Button to="/">Return Home</Button>
      </Container>
    </div>
  );
}
