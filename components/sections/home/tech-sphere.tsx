"use client";

import { motion } from 'framer-motion';
import { Code, Brain, Database } from 'lucide-react';

export function TechSphere() {
  const iconSize = "h-8 w-8";
  const sphereRadius = 120;
  const numIcons = 8;

  return (
    <div className="relative h-[400px] w-[400px] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      >
        {[...Array(numIcons)].map((_, i) => {
          const angle = (i * 2 * Math.PI) / numIcons;
          const x = sphereRadius * Math.cos(angle);
          const y = sphereRadius * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 text-primary"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
              whileHover={{ scale: 1.2 }}
            >
              {i % 3 === 0 ? (
                <Code className={iconSize} />
              ) : i % 3 === 1 ? (
                <Brain className={iconSize} />
              ) : (
                <Database className={iconSize} />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center Sphere */}
      <motion.div
        className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}