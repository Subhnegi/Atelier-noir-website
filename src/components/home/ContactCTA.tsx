import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function ContactCTA() {
  return (
    <section className="py-32 md:py-48 bg-ivory text-center">
      <Container>
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal">
            Have a space in mind?
          </h2>
          <p className="text-xl text-charcoal/70 font-light pb-4">
            Let's discuss what it could become.
          </p>
          <Button variant="primary" to="/contact" className="px-8 py-4 text-lg">
            Start a project
          </Button>
        </div>
      </Container>
    </section>
  );
}
