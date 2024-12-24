"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Address",
    content: "123 Innovation Street, Tech City, TC 12345"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "+1 (555) 123-4567"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "hello@agency.com"
  }
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contactInfo.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-card"
        >
          <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
            {item.icon}
          </div>
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.content}</p>
        </motion.div>
      ))}
    </div>
  );
}