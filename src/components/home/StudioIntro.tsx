import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function StudioIntro() {
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-5 md:col-start-2"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Less, but considered.
            </h2>
          </motion.div>
          <motion.div 
            className="md:col-span-5 space-y-8"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-light">
              We shape thoughtful spaces around the people who inhabit them. Our approach brings architecture, interiors and materiality together in a quiet, enduring language.
            </p>
            <div>
              <Button variant="ghost" to="/studio" className="p-0 hover:bg-transparent hover:opacity-70 border-b border-charcoal rounded-none pb-1 group">
                About the studio
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
