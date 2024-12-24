"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Brain, Blocks, Smartphone, Palette, Database } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites tailored to your business needs using cutting-edge technologies.",
    href: "/services/web-development"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI/ML Services",
    description: "Optimize processes and predict trends with intelligent systems.",
    href: "/services/ai-ml"
  },
  {
    icon: <Blocks className="h-8 w-8" />,
    title: "Blockchain Solutions",
    description: "Build secure, decentralized systems with smart contracts.",
    href: "/services/blockchain"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Cross-platform apps that captivate and engage your users.",
    href: "/services/mobile"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Intuitive designs for outstanding user experiences.",
    href: "/services/design"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for modern applications.",
    href: "/services/cloud"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}