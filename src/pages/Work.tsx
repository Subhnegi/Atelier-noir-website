import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { projects, type ProjectCategory } from '../data/projects';
import { cn } from '../components/ui/Container';

export function Work() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const categories: ('All' | ProjectCategory)[] = ['All', 'Architecture', 'Interiors', 'Spatial Planning'];

  useEffect(() => {
    document.title = 'Selected Work | Atelier Noir';
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-32 bg-ivory min-h-screen">
      <Container>
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Selected Work</h1>
          <p className="text-lg text-charcoal/70 max-w-2xl font-light">
            An archive of recent commissions across architecture, interior design, and spatial planning.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-charcoal/10 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "text-sm font-medium pb-2 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2",
                filter === cat 
                  ? "border-charcoal text-charcoal" 
                  : "border-transparent text-charcoal/50 hover:text-charcoal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.slug} 
                to={`/work/${project.slug}`}
                className={cn(
                  "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
                  index % 2 === 1 ? 'md:mt-16' : ''
                )}
              >
                <div className="aspect-[4/5] overflow-hidden bg-charcoal/5 mb-5 relative">
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                  <h3 className="text-base md:text-lg font-serif text-charcoal group-hover:text-charcoal/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[11px] md:text-xs uppercase tracking-widest text-charcoal/60">
                    {project.category} &middot; {project.location.split(',')[0]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-lg text-charcoal/60">No projects found in this category.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
