import { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { StudioIntro } from '../components/home/StudioIntro';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Services } from '../components/home/Services';
import { DesignPhilosophy } from '../components/home/DesignPhilosophy';
import { ContactCTA } from '../components/home/ContactCTA';

export function Home() {
  useEffect(() => {
    document.title = 'Atelier Noir | Premium Architecture & Interior Design';
  }, []);

  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedProjects />
      <Services />
      <DesignPhilosophy />
      <ContactCTA />
    </>
  );
}
