export interface Project {
  title: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
}

export const projects: Record<string, Project> = {
  'ecommerce-platform': {
    title: "E-commerce Platform",
    description: "A modern online shopping experience built with Next.js",
    images: [
      { url: "https://images.unsplash.com/photo-1661956602116-aa6865609028", alt: "Homepage design" },
      { url: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4", alt: "Product page" },
      { url: "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f", alt: "Checkout flow" },
      { url: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45", alt: "Mobile view" }
    ],
    challenge: "Creating a scalable and performant e-commerce solution",
    solution: "Implemented server-side rendering and optimized database queries",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    results: [
      "50% faster page load times",
      "30% increase in conversion rate",
      "Improved SEO rankings"
    ]
  }
};