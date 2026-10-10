import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full bg-charcoal text-ivory overflow-hidden flex flex-col justify-end pb-24 md:pb-32">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
        animate={shouldReduceMotion ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
          alt="Contemporary architecture with natural light"
          className="w-full h-full object-cover origin-center"
          initial={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
        />
        {/* Adjusted overlay gradient to keep the headline readable while preserving building details */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />
      </motion.div>

      <Container className="relative z-10 w-full">
        <motion.div 
          className="max-w-4xl space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-xs md:text-sm font-semibold tracking-widest uppercase text-ivory/90">
            Architecture &middot; Interiors &middot; Spatial Design
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-balance">
            Designed around the way you live.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-ivory/90 max-w-xl font-light">
            Architecture and interiors shaped by light, material and purpose.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button variant="secondary" to="/work" className="w-full sm:w-auto">
              Explore our work
            </Button>
            <Button variant="outline" to="/contact" className="w-full sm:w-auto border-ivory text-ivory hover:bg-ivory hover:text-charcoal">
              Start a project
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
