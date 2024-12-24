"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Building2, Stethoscope, Building, Plane, Radio } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Fintech",
    description: "Revolutionary financial technology solutions"
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Healthcare",
    description: "Digital transformation in healthcare"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Real Estate",
    description: "PropTech innovations"
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Aviation",
    description: "Next-gen aviation technology"
  },
  {
    icon: <Radio className="h-8 w-8" />,
    title: "Media",
    description: "Digital media solutions"
  }
];

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Solutions Across Industries</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise that spans multiple sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all">
                <div className="mb-4 text-primary flex justify-center">{industry.icon}</div>
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}