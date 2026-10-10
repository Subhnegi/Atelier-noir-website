import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function StudioIntro() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:col-start-2">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Less, but considered.
            </h2>
          </div>
          <div className="md:col-span-5 space-y-8">
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-light">
              We shape thoughtful spaces around the people who inhabit them. Our approach brings architecture, interiors and materiality together in a quiet, enduring language.
            </p>
            <div>
              <Button variant="ghost" to="/studio" className="p-0 hover:bg-transparent hover:opacity-70 border-b border-charcoal rounded-none pb-1">
                About the studio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
