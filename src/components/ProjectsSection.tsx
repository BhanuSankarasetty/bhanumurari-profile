
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";

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
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
    longDescription: "This e-commerce platform offers a complete online shopping experience with product browsing, cart functionality, secure checkout with Stripe integration, user accounts, order history, and a comprehensive admin dashboard for inventory management.",
    image: "https://placehold.co/600x400/6D28D9/FFFFFF?text=E-Commerce+App",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with drag-and-drop tasks, teams, and real-time updates.",
    longDescription: "This task management application enables teams to organize projects using Kanban boards with drag-and-drop functionality. It includes features like task assignment, due dates, comments, file attachments, and real-time updates via WebSockets.",
    image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Task+Manager",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A mobile-responsive web app for tracking workouts, nutrition, and fitness goals.",
    longDescription: "This fitness tracking application allows users to log workouts, track nutrition intake, set personal goals, and visualize progress through interactive charts. It includes features like workout plans, calorie counting, and social sharing.",
    image: "https://placehold.co/600x400/6D28D9/FFFFFF?text=Fitness+Tracker",
    tags: ["React", "Firebase", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application with forecasts, interactive maps, and location-based alerts.",
    longDescription: "This weather dashboard provides current conditions and forecasts with interactive visualizations. It includes features like location search, saved locations, hourly and 7-day forecasts, weather maps, and severe weather alerts.",
    image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Weather+App",
    tags: ["React", "OpenWeather API", "Mapbox", "Recharts"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media engagement across multiple platforms.",
    longDescription: "This social media dashboard aggregates data from multiple platforms to provide comprehensive analytics. It includes follower growth tracking, engagement metrics, post scheduling, and content performance analysis with detailed reports.",
    image: "https://placehold.co/600x400/6D28D9/FFFFFF?text=Social+Dashboard",
    tags: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "A community-driven recipe sharing app with search, favorites, and user reviews.",
    longDescription: "This recipe sharing platform enables users to discover, save, and share recipes. It includes features like ingredient-based search, step-by-step instructions, nutritional information, user reviews, and personalized recommendations.",
    image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Recipe+App",
    tags: ["React Native", "Firebase", "Redux", "Algolia"],
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
        Here are some of my recent projects. Each one represents unique challenges and solutions,
        showcasing different aspects of my technical skills and creativity.
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
