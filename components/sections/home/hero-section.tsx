"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { HeroBackground } from './hero-background';
import { TechSphere } from './tech-sphere';

export function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <HeroBackground />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Empowering Businesses with Digital Innovation
              </h1>
              <p className="text-xl text-white/90 mb-8">
                AI, Blockchain, and Web Development solutions tailored to achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 border-white/20" 
                  asChild
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <TechSphere />
          </motion.div>
        </div>
      </div>
    </section>
  );
}