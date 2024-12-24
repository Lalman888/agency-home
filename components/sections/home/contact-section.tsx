"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your ideas into reality with our expert team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
              </div>
              <Input placeholder="Subject" required />
              <Textarea
                placeholder="Tell us about your project"
                className="h-32"
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Why Contact Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">Get expert consultation on your project</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">Discuss custom solutions for your business</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">Learn about our development process</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">Get a free project estimate</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}