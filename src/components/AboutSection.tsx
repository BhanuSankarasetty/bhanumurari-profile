
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Calendar, Code } from "lucide-react";

const stats = [
  {
    label: "Years Experience",
    value: "3+ Years of Experience (B.Tech CSE)",
    icon: Calendar,
  },
  {
    label: "Projects Completed",
    value: "4+",
    icon: Code,
  },
  {
    label: "DSA Practice",
    value: "450+ Problems Solved",
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
            Aspiring Software Development Engineer with a Vision to Build AI-Driven Systems and solutions that Solve Real-World Problems
          </motion.p>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
           Driven by a deep passion for technology and problem-solving, I’m currently pursuing B.Tech in Computer Science Engineering and actively building the skills required to thrive as an SDE. My background in Mining Engineering gave me a unique perspective on large-scale systems, safety, and optimization—which I now combine with my love for coding and data structures. I’m especially interested in leveraging AI to build impactful systems—like my current project: an AI-powered crowd monitoring and alert system to prevent stampedes in high-density areas across India. I’m also building a DevOps-enabled food delivery platform that empowers home cooks through tech.
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            With a strong grasp of C++, DSA (350+ LeetCode problems), and hands-on experience in full-stack development using React.js, Node.js, and MongoDB, I’m now expanding into system design, Docker, Terraform, Jenkins, and AWS. My goal is to join a top tech company (FAANG/MNC) and contribute to scalable, intelligent, and secure digital ecosystems. When I'm not coding, you’ll find me dominating a chessboard, debating ideas, or reflecting on how tech can uplift lives in meaningful ways.
          </motion.p>
        </div>

        <div>
          {/* Timeline */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:h-full before:w-[1px] before:bg-border">
            {[
              {
                year: "2024 - Present",
                company: "Personal Project Based",
                role: "Full Stack Developer Intern",
                description:
                  "Designing and developing a full-stack application to connect users with verified home cooks",
              },
              {
                year: "2023 – Present",
                company: "DSA & Problem-Solving Learner",
                role: "Problem solving",
                description:
                  "Strong in C++, focused on mastering algorithms, data structures, and competitive coding techniques",
              },
              {
                year: "2023 – 2025",
                company: " Nxt-Wave",
                role: "Frontend Developer Trainee",
                description:
                  "Built interactive web interfaces using HTML, CSS, and JavaScript. Learned project structure, component design, state management, and API integration",
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
