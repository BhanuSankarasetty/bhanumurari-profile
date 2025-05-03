
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Trophy, Code } from "lucide-react";
import { useState } from "react";
import cpp from "../components/certificates/cpp.png";
import excel from "../components/certificates/excel.png";
import dsacpp from "../components/certificates/dsacpp.png";
import dpgreedy from "../components/certificates/dpgreedy.png";
import tableau from "../components/certificates/tableau.png";
const achievements = [
  {
    id: 1,
    title: "350+ LeetCode Problems Solved",
    description: "Completed over 350 problems on LeetCode, demonstrating strong command of DSA and problem-solving in C++",
    date: "2025",
    icon: Trophy,
  },
  {
    id: 2,
    title: "DevOps-Based App Deployment",
    description: "Successfully integrated Docker, Jenkins, and AWS to deploy a full-stack project",
    date: "2024",
    icon: Code,
  },
  {
    id: 3,
    title: "AI Innovation Project",
    description: "Developed an AI-powered stampede detection and alert system to enhance public safety at crowded events across India",
    date: "2024",
    icon: Award,
  },
  {
    id: 4,
    title: "Frontend Development Journey",
    description: "Completed comprehensive frontend training with NxtWave; built multiple responsive web interfaces using React, TypeScript, and Tailwind",
    date: "2023",
    icon: Code,
  },
  {
    id: 5,
    title: "Academic Excellence Award",
    description: "Received a gold medal during diploma for outstanding academic performance in junior engineering",
    date: "2022",
    icon: Award,
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>

      <motion.p
  className="max-w-2xl text-lg mb-10"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
>
  Recognition and milestones from my professional journey as an aspiring developer.
</motion.p>


      <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;

          return (
            <motion.div
              key={achievement.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="absolute -left-8 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/30">
                    <Icon size={18} />
                  </div>
                  <div className="absolute -left-3.5 mt-24 h-full w-0.5 bg-border" />
                </div>
                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-3">
                    {achievement.date}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certificate Grid */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Cloud Computing - Proctored",
              issuer: "NPTEL",
              date: "2025",
              image: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Certification",
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
            {
              title: "DSA with C++",
              issuer: "Lovely Professional University",
              date: "2024",
              image: dsacpp,
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
            {
              title: "Programming with C++",
              issuer: "Coursera",
              date: "2024",
              image: cpp,
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
            {
              title: "Dynamic Programming and Greedy Algorithms",
              issuer: "Coursera",
              date: "2024",
              image: dpgreedy,
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
            {
              title: "Tableau",
              issuer: "Coursera",
              date: "2024",
              image: tableau,
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
            {
              title: "Advanced Excel Specialization",
              issuer: "Coursera",
              date: "2024",
              image: excel,
              link: "https://coursera.org/share/f0a9942366d5fc419a665c28a3ea3be5",
            },
          ].map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 overflow-hidden">
            
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/30">
                  <a rel="noopener noreferrer" target = "_blank" href={cert.image}>
                    View Certificate
                  </a>
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
