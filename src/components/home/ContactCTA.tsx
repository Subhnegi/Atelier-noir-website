import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-32 md:py-48 bg-ivory text-center">
      <Container>
        <motion.div 
          className="max-w-2xl mx-auto space-y-8"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal">
            Have a space in mind?
          </h2>
          <p className="text-xl text-charcoal/70 font-light pb-4">
            Let's discuss what it could become.
          </p>
          <Button variant="primary" to="/contact" className="px-8 py-4 text-lg">
            Start a project
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
