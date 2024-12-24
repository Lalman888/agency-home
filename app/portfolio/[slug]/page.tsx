'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGallery } from '@/components/sections/project-gallery';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

// export function generateStaticParams() {
//   return Object.keysx(projects).map((slug) => ({
//     slug,
//   }));
// }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16">
      <HeroSection title={project.title} description={project.description} />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Button asChild variant="ghost">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <ProjectGallery images={project.images} />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
              <p className="text-muted-foreground mb-8">{project.challenge}</p>

              <h3 className="text-2xl font-semibold mb-4">Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Results</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
