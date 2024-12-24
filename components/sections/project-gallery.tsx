"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative aspect-video rounded-lg overflow-hidden"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}