import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { services } from '../../data/services';

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div 
            className="lg:col-span-1"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Expertise
            </h2>
            <p className="text-charcoal/70 font-light max-w-sm">
              Our multidisciplinary approach ensures every detail of a project is considered from the ground up to the finest interior finish.
            </p>
          </motion.div>
          
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={index}
                  className={`py-8 md:py-12 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 border-charcoal/10 ${index === 0 ? 'border-t' : 'border-t'}`}
                >
                  <span className="text-sm font-semibold text-charcoal/40 w-12 shrink-0">
                    {service.id}
                  </span>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif text-charcoal mb-4">{service.title}</h3>
                    <p className="text-charcoal/70 font-light max-w-md">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
