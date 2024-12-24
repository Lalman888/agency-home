import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Ensure this utility function is correctly implemented

interface MenuItemProps {
  href: string;
  label: string;
  index: number;
  onClick?: () => void; // Made optional
}

export function MenuItem({ href, label, index, onClick }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Increased y offset for a more noticeable animation
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7, // Slower entry animation
        delay: index * 0.15, // Increased delay for a staggered effect
        ease: [0.25, 1, 0.5, 1], // Smoother easing curve
      }}
      className="overflow-hidden"
    >
      <Link
        href={href}
        // onClick={onClick}
        className="group relative flex items-center justify-center py-6 text-4xl md:text-6xl font-bold transition-colors"
        aria-label={`Navigate to ${label}`} // Added ARIA label for accessibility
      >
        <span className="relative">
          {/* Initial Label */}
          <span
            className="block transition-all group-hover:-translate-y-full group-hover:opacity-0 duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
          >
            {label}
          </span>
          {/* Hover Label */}
          <span
            className="absolute top-0 left-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] text-primary"
          >
            {label}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
