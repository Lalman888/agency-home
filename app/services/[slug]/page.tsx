"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { ServiceFeatures } from '@/components/sections/service-features';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

const services = {
  'web-development': {
    title: "Web Development",
    description: "Custom web solutions built with modern technologies",
    features: [
      {
        title: "Custom Development",
        description: "Tailored solutions that perfectly match your business needs"
      },
      {
        title: "Modern Stack",
        description: "Built with Next.js, React, and other cutting-edge technologies"
      },
      {
        title: "Responsive Design",
        description: "Websites that work flawlessly across all devices"
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast loading speeds and optimal user experience"
      }
    ]
  },
  // Add other services here
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="pt-16">
      <HeroSection
        title={service.title}
        description={service.description}
        primaryCta={{
          text: "Get Started",
          href: "/contact",
          icon: <ArrowRight className="ml-2 h-4 w-4" />
        }}
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceFeatures features={service.features} />
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}