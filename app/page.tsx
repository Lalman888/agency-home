"use client";

import { HomeHeroSection } from '@/components/sections/home/hero-section';
import { ServicesSection } from '@/components/sections/home/services-section';
import { FeaturedWork } from '@/components/sections/home/featured-work';
import { TestimonialsSection } from '@/components/sections/home/testimonials-section';
import { IndustriesSection } from '@/components/sections/home/industries-section';
import { AboutSection } from '@/components/sections/home/about-section';
import { ContactSection } from '@/components/sections/home/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHeroSection />
      <ServicesSection />
      <FeaturedWork />
      <TestimonialsSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}