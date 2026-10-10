import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export function Studio() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = 'Studio & Services | Atelier Noir';
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' as const } 
    }
  };

  return (
    <div className="bg-ivory pb-32">
      {/* Intro */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div 
              className="md:col-span-8"
              variants={revealVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-8">
                A rigorous pursuit of quiet spaces.
              </h1>
              <div className="space-y-6 text-lg text-charcoal/80 font-light max-w-2xl leading-relaxed">
                <p>
                  Atelier Noir was founded on the belief that spaces profoundly affect human well-being. We design environments that speak quietly, removing the unessential to reveal the inherent beauty of structure, light, and materiality.
                </p>
                <p>
                  Our work is deeply contextual. Whether a private residence in the hills or a boutique hospitality space in the city, we begin by listening to the landscape and the client.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Image break */}
      <motion.div 
        className="w-full h-[60vh] md:h-[80vh] mb-24"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          alt="Studio atmosphere" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Process */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-serif text-charcoal mb-12">Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-charcoal/10 pt-12">
            <div>
              <span className="text-sm font-semibold text-charcoal/40 block mb-4">Phase 01</span>
              <h3 className="text-xl font-medium mb-4">Discover</h3>
              <p className="text-charcoal/70 font-light">
                We begin with dialogue and site analysis. Understanding the constraints, ambitions, and unique context of the project.
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold text-charcoal/40 block mb-4">Phase 02</span>
              <h3 className="text-xl font-medium mb-4">Develop</h3>
              <p className="text-charcoal/70 font-light">
                Iterative design, material exploration, and spatial planning. We refine the concept until it achieves clarity and purpose.
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold text-charcoal/40 block mb-4">Phase 03</span>
              <h3 className="text-xl font-medium mb-4">Deliver</h3>
              <p className="text-charcoal/70 font-light">
                Precise documentation and collaborative realization. Overseeing the build to ensure the vision translates flawlessly into reality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-linen scroll-mt-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif text-charcoal mb-12 text-center"
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              Core Services
            </motion.h2>
            <div className="space-y-12">
              {services.map((service, i) => (
                <motion.div 
                  key={service.id} 
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 py-8 ${i !== 0 ? 'border-t border-charcoal/10' : ''}`}
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <h3 className="text-2xl font-serif md:w-1/3 shrink-0">{service.title}</h3>
                  <p className="text-charcoal/80 text-lg font-light leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pt-32 text-center">
        <Container>
          <h2 className="text-3xl font-serif mb-8">Ready to begin?</h2>
          <Button to="/contact">Start a project</Button>
        </Container>
      </section>
    </div>
  );
}
