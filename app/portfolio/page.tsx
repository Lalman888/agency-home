"use client";

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectGrid } from '@/components/sections/project-grid';
import { CategoryFilter } from '@/components/sections/category-filter';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online shopping experience",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    category: "Web Development",
    slug: "ecommerce-platform"
  },
  {
    title: "Brand Identity",
    description: "Complete brand redesign",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
    category: "Design",
    slug: "brand-identity"
  },
  {
    title: "Mobile App",
    description: "Cross-platform fitness application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    category: "Mobile",
    slug: "fitness-app"
  }
];

// const categories = [...new Set(projects.map(project => project.category))];
const categories = Array.from(new Set(projects.map(project => project.category)));


export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  return (
    <div className="pt-16">
      <HeroSection
        title="Our Portfolio"
        description="Explore our latest projects and success stories"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProjectGrid
            projects={projects}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </div>
  );
}