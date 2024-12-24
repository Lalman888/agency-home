import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { navItems } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";

interface NavMenuProps {
  setIsOpen: (open: boolean) => void;
}

export function NavMenu({ setIsOpen }: NavMenuProps) {
  return (
    <motion.div
      className="flex flex-col h-screen bg-background/95 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Close Icon */}
      <motion.button
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
        whileHover={{ scale: 1.2 }} // Animations on hover
        whileTap={{ scale: 0.9 }} // Tap feedback animation
        className="absolute top-6 right-6 p-4 rounded-full hover:bg-muted/20 transition"
      >
        {/* Using Heroicons X-Mark Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2} // Make the stroke bolder
          stroke="currentColor"
          className="w-10 h-10 text-muted-foreground" // Increased size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>

      {/* Menu Items Container */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {navItems.map((item, index) => (
          <MenuItem
            key={item.href}
            href={item.href}
            label={item.label}
            index={index}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="p-8 flex justify-between items-center border-t">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Agency
        </div>
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
