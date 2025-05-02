
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Calendar, Code } from "lucide-react";

const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: Calendar,
  },
  {
    label: "Projects Completed",
    value: "20+",
    icon: Code,
  },
  {
    label: "Awards Won",
    value: "3",
    icon: Award,
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate Full Stack Developer with 5+ years of experience building exceptional digital experiences. I specialize in creating innovative web applications that are not only visually appealing but also high-performing and user-friendly.
          </motion.p>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            With a strong foundation in both front-end and back-end technologies, I'm committed to writing clean, efficient code and constantly expanding my skill set to keep up with the ever-evolving tech landscape.
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Outside of coding, I enjoy hiking, reading sci-fi novels, and contributing to open-source projects. I'm always looking for new challenges and opportunities to grow as a developer.
          </motion.p>
        </div>

        <div>
          {/* Timeline */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:h-full before:w-[1px] before:bg-border">
            {[
              {
                year: "2023 - Present",
                company: "Tech Innovate",
                role: "Senior Full Stack Developer",
                description:
                  "Leading development of enterprise-grade web applications using React, Node.js, and AWS.",
              },
              {
                year: "2020 - 2023",
                company: "WebSolutions Inc.",
                role: "Full Stack Developer",
                description:
                  "Developed and maintained multiple client projects using modern JavaScript frameworks.",
              },
              {
                year: "2018 - 2020",
                company: "Digital Creations",
                role: "Front-end Developer",
                description:
                  "Created responsive and accessible user interfaces for various client websites.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  {item.year.split(" ")[0]}
                </span>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-muted-foreground mb-1">{item.company} | {item.year}</p>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-card shadow-sm border rounded-lg p-6 text-center"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-primary/10 rounded-full text-primary">
                <stat.icon size={24} />
              </span>
            </div>
            <h3 className="text-3xl font-bold gradient-text">{stat.value}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
