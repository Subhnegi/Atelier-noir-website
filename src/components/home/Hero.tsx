import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full bg-charcoal text-ivory overflow-hidden flex flex-col justify-end pb-24 md:pb-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          alt="Contemporary architecture with natural light"
          className="w-full h-full object-cover"
        />
        {/* Adjusted overlay gradient to keep the headline readable while preserving building details */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />
      </div>
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-ivory/90">
            Architecture &middot; Interiors &middot; Spatial Design
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-balance">
            Designed around the way you live.
          </h1>
          <p className="text-lg md:text-xl text-ivory/90 max-w-xl font-light">
            Architecture and interiors shaped by light, material and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button variant="secondary" to="/work" className="w-full sm:w-auto">
              Explore our work
            </Button>
            <Button variant="outline" to="/contact" className="w-full sm:w-auto border-ivory text-ivory hover:bg-ivory hover:text-charcoal">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
