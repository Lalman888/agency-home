"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Users, Trophy, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "200+",
    label: "Clients Worldwide"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    value: "10+",
    label: "Years Experience"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    value: "500+",
    label: "Projects Completed"
  }
];

export function AboutSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground mb-6">
              10+ Years of Excellence in Digital Solutions
            </p>
            <p className="text-muted-foreground mb-8">
              We're driven by innovation and aligned with your goals. Our team of experts brings
              together deep industry expertise and the latest technology to deliver exceptional results.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center">
                    <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}