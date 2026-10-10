import { Container } from '../ui/Container';

export function DesignPhilosophy() {
  const principles = [
    { title: 'Light and proportion', desc: 'Harnessing natural elements as primary building materials.' },
    { title: 'Honest materials', desc: 'Selecting textures that age gracefully and ground the space.' },
    { title: 'Spaces for everyday living', desc: 'Prioritizing functional beauty over stark minimalism.' }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone text-ivory">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-charcoal/20">
            <img 
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80" 
              alt="Material detail showing natural stone and light"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-12 pl-0 md:pl-12">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              A quiet, enduring language.
            </h2>
            <div className="space-y-8">
              {principles.map((p, i) => (
                <div key={i} className="border-l border-ivory/20 pl-6">
                  <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                  <p className="text-ivory/80 font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
