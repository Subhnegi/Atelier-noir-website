import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';

export function ProjectDetails() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Atelier Noir`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="bg-ivory pb-24">
      {/* Hero */}
      <div className="w-full h-[70vh] min-h-[500px]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="pt-16 md:pt-24">
        {/* Header */}
        <header className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed">
              {project.overview}
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-10 space-y-6 text-sm">
            <div>
              <span className="block font-semibold uppercase tracking-wider text-charcoal/50 mb-1">Sector</span>
              <span>{project.sector}</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-charcoal/50 mb-1">Service</span>
              <span>{project.category}</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-charcoal/50 mb-1">Location</span>
              <span>{project.location}</span>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-wider text-charcoal/50 mb-1">Year</span>
              <span>{project.year}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24">
          <div className="md:col-span-5 space-y-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-4">Design Concept</h2>
              <p className="text-charcoal/80 font-light leading-relaxed">
                {project.concept}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-4">Material Palette</h2>
              <p className="text-charcoal/80 font-light leading-relaxed">
                {project.materialPalette}
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7">
            {project.gallery[0] && (
              <img
                src={project.gallery[0]}
                alt="Project detail 1"
                className="w-full h-auto"
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Remaining Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-32">
          {project.gallery.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project detail ${i + 2}`}
              className="w-full h-[60vh] object-cover"
              loading="lazy"
            />
          ))}
        </div>

        {/* Navigation & CTA */}
        <div className="border-t border-charcoal/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="block text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-2">Next Project</span>
            <Link to={`/work/${nextProject.slug}`} className="text-2xl md:text-3xl font-serif text-charcoal hover:opacity-70 transition-opacity">
              {nextProject.title}
            </Link>
          </div>
          <Button variant="outline" to="/contact">
            Start a similar project
          </Button>
        </div>
      </Container>
    </article>
  );
}
