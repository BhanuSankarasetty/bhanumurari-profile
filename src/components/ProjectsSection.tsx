
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import br from "../components/images/BR.png";
import hfd from "../components/images/HFD.png";
import r from "../components/images/R.jpg";
import temp from "../components/images/Temp.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bachelor's Recipe",
    description: "A sleek web app that provides detailed recipes and cooking instructions to help users prepare delicious meals with ease.",
    longDescription: "A Sleek Web App for Effortless Cooking:This modern and user-friendly web application is designed to make home cooking simple, enjoyable, and accessible to everyone—from beginners to seasoned cooks. The platform offers a curated collection of detailed recipes, each with step-by-step cooking instructions, ingredient lists, preparation times, and visual guides. Whether you're looking to cook a quick weekday meal or explore gourmet dishes, the app helps you plan, prep, and perfect your meals with ease.Built using cutting-edge web technologies like React.js and Tailwind CSS, the app ensures a responsive and intuitive interface that works seamlessly across devices. Users can search by ingredients, cuisine, difficulty level, or dietary preferences, making meal planning effortless. With features like recipe bookmarking, user reviews, and dynamic serving size adjustments, it empowers users to cook confidently and creatively in their own kitchens.",
    image: br,
    tags: ["EJS", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://bachelors-recipe.onrender.com/",
    repoUrl: "https://github.com/BhanuSankarasetty/kitchen-kismet-kart",
    featured: true,
  },
  {
    id: 2,
    title: "PlateFul",
    description: "A home food delivery platform connecting users with local chefs, offering fresh, homemade meals while empowering cooks with digital visibility.",
    longDescription: "Empowering Home Cooks, One Delicious Meal at a Time Our platform is a community-driven home food delivery application that bridges the gap between food lovers and local culinary talent. Designed to connect users with verified home chefs, the app offers a unique dining experience built on authenticity, freshness, and human connection. Every meal is homemade with care, giving users an alternative to commercial fast food while providing talented cooks—especially women and small-scale entrepreneurs—with the digital visibility and tools they need to succeed. Through a seamless web and mobile interface, users can browse chef portfolios, explore regional and seasonal dishes, place customized orders, and leave feedback after each meal. For chefs, the platform offers a space to showcase their cooking skills, manage orders, and grow a loyal customer base—all while working from the comfort of their homes. Built with modern technologies like React.js, Node.js, MongoDB, Docker, and AWS, the platform is secure, scalable, and user-friendly.",
    image: hfd,
    tags: ["Node.js", "Firebase", "Tailwind CSS", "React.js","Html","CSS","Jave Scipt","Mongo DB"],
    liveUrl: "https://platefulfood.vercel.app/",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Rental Finder",
    description: "A smart rental platform that connects property owners and tenants, simplifying listings, bookings, and communication with a seamless digital experience.",
    longDescription: "Smarter Rentals, Seamless Experience This smart rental platform reimagines property renting by connecting owners and tenants through a streamlined digital experience. From property listings to bookings and secure communication, every step is made simple, transparent, and efficient. Owners can easily list properties with photos, pricing, and availability, while tenants can search, filter, and book rentals confidently. Features like real-time availability, online payments, and tenant verification make the process smooth and trustworthy. Built with modern tech (React.js, Node.js, MongoDB, AWS), the platform is fast, scalable, and responsive across all devices—making renting or leasing easier than ever for everyone involved.",
    image: r,
    tags: ["React Native", "CSS", "HTML", "TypeScript"],
    liveUrl: "https://rental-platform-one.vercel.app/",
    repoUrl: "https://github.com/BhanuSankarasetty/vibrant-rentals-platform",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A clean, intuitive weather app with 7-day forecasts, location-based data, and severe weather alerts.",
    longDescription: "This weather App provides current conditions and forecasts with interactive visualizations. It includes features like location search, saved locations, hourly and 7-day forecasts, weather maps, and severe weather alerts.",
    image: temp,
    tags: ["React", "OpenWeather API", "Styled Components", "PWA"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
       Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow as a developer.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveProject(project)}
                  >
                    Learn More
                  </Button>
                  {project.repoUrl && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10">
        {projects.length > 3 && (
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="min-w-[150px]"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        )}
      </div>

      <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{activeProject?.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setActiveProject(null)}
            >
              <X size={18} />
            </Button>
          </DialogHeader>

          {activeProject && (
            <>
              <div className="h-64 overflow-hidden rounded-md mb-4">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base">
                {activeProject.longDescription || activeProject.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 my-4">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {activeProject.liveUrl && (
                  <Button asChild>
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {activeProject.repoUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
