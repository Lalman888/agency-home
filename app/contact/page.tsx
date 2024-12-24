"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { ContactForm } from '@/components/sections/contact-form';
import { ContactInfo } from '@/components/sections/contact-info';

export default function ContactPage() {
  return (
    <div className="pt-16">
      <HeroSection
        title="Get in Touch"
        description="Let's discuss your next project and bring your ideas to life"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
          <div className="mt-16 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}