
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Trophy, Code } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Best Web Application Award",
    description: "Won first place in a national hackathon for building an innovative healthcare application",
    date: "2023",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Recognized as a top contributor to React-based open source projects with 50+ accepted PRs",
    date: "2022",
    icon: Code,
  },
  {
    id: 3,
    title: "Tech Conference Speaker",
    description: "Invited speaker at multiple web development conferences on modern frontend architecture",
    date: "2021",
    icon: Award,
  },
  {
    id: 4,
    title: "Coding Competition Winner",
    description: "First place in regional full-stack developer competition among 200+ participants",
    date: "2021",
    icon: Trophy,
  },
  {
    id: 5,
    title: "Published Article",
    description: "Technical article on React performance optimization published in a leading tech magazine",
    date: "2020",
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
        Recognition and milestones from my professional journey as a developer.
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
              title: "Full Stack Web Development",
              issuer: "Udemy",
              date: "2023",
              image: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Certification",
            },
            {
              title: "Advanced React & Redux",
              issuer: "Coursera",
              date: "2022",
              image: "https://placehold.co/400x300/14B8A6/FFFFFF?text=Certification",
            },
            {
              title: "AWS Solutions Architect",
              issuer: "Amazon Web Services",
              date: "2022",
              image: "https://placehold.co/400x300/6D28D9/FFFFFF?text=Certification",
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
                    View Certificate
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
