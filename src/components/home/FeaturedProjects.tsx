import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

const MotionLink = motion.create(Link);

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <section className="py-24 md:py-32 bg-linen">
      <Container>
        <motion.div 
          className="flex justify-between items-end mb-16"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Selected Works</h2>
          <Button variant="ghost" to="/work" className="hidden md:inline-flex p-0 hover:bg-transparent hover:opacity-70 border-b border-charcoal rounded-none pb-1 group">
            View all projects
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {featured.map((project, index) => (
            <MotionLink 
              key={project.slug} 
              to={`/work/${project.slug}`}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-4 focus-visible:ring-offset-linen ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-charcoal/5 mb-5 relative">
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 origin-center"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 transition-transform duration-500 ease-out group-hover:translate-x-2">
                <h3 className="text-base md:text-lg font-serif text-charcoal group-hover:text-charcoal/70 transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                </h3>
                <span className="text-[11px] md:text-xs uppercase tracking-widest text-charcoal/60">
                  {project.category} &middot; {project.location.split(',')[0]}
                </span>
              </div>
            </MotionLink>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Button variant="outline" to="/work">
            View all projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
