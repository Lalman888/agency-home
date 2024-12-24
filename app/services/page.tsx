"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { ServiceGrid } from '@/components/sections/service-grid';
import { Code, Palette, Megaphone, LineChart, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technology.",
    icon: <Code className="h-8 w-8" />,
    slug: "web-development"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience.",
    icon: <Palette className="h-8 w-8" />,
    slug: "design"
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    icon: <Megaphone className="h-8 w-8" />,
    slug: "digital-marketing"
  },
  {
    title: "Analytics & SEO",
    description: "Data-driven insights and search engine optimization.",
    icon: <LineChart className="h-8 w-8" />,
    slug: "analytics-seo"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: <Smartphone className="h-8 w-8" />,
    slug: "mobile-development"
  },
  {
    title: "Web Consulting",
    description: "Expert guidance for your digital transformation journey.",
    icon: <Globe className="h-8 w-8" />,
    slug: "consulting"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <HeroSection
        title="Our Services"
        description="Comprehensive digital solutions tailored to your needs"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid services={services} />
        </div>
      </section>
    </div>
  );
}