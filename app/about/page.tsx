"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { TeamSection } from '@/components/sections/team-section';
import { ValuesSection } from '@/components/sections/values-section';
import { Heart, Lightbulb, Target } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Over 10 years of experience in digital design and branding."
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Full-stack developer with a passion for clean, efficient code."
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "Digital marketing expert specializing in growth strategies."
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
    icon: <Lightbulb className="h-8 w-8" />
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project we undertake.",
    icon: <Target className="h-8 w-8" />
  },
  {
    title: "Passion",
    description: "We love what we do and it shows in our work.",
    icon: <Heart className="h-8 w-8" />
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <HeroSection
        title="About Our Agency"
        description="We're a team of passionate creators, innovators, and problem solvers dedicated to transforming digital experiences."
      />
      <ValuesSection values={values} />
      <TeamSection members={teamMembers} />
    </div>
  );
}