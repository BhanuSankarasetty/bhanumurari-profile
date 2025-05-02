
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Redux", proficiency: 75 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "GraphQL", proficiency: 65 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 65 },
      { name: "Jest", proficiency: 75 },
      { name: "CI/CD", proficiency: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
          <p className="text-lg mb-6">
            I've worked with a wide range of technologies in the web development world. Here's an overview of my technical skills and proficiency levels.
          </p>
          <p className="text-muted-foreground mb-8">
            I'm always expanding my skill set and exploring new technologies to stay at the cutting edge of web development.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{group.name}</h3>
              <div className="space-y-4">
                {group.skills.map((skill, index) => {
                  const barVariants = {
                    initial: { width: 0 },
                    animate: { width: `${skill.proficiency}%` },
                  };

                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          variants={barVariants}
                          initial="initial"
                          whileInView="animate"
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
          "MongoDB", "PostgreSQL", "GraphQL", "REST API", "Redux", "Tailwind",
          "Jest", "Git", "Docker", "AWS"
        ].map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
