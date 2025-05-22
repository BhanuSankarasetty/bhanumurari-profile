
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Code } from "lucide-react";
import profile from "../components/images/Profile.jpeg";
import res from "../components/Resume/resume.pdf";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 z-10">
          <motion.p
            className="text-lg md:text-xl mb-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi there, I&apos;m
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sankarasetty Bhanu Murari
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Software Development Engineer",
                1000,
                "Devops Enthusiast",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            className="text-lg max-w-lg mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I create beautiful, functional, and user-friendly digital experiences and solutions
             that help businesses grow and succeed in the digital world.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href= {res} download>
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="https://github.com/BhanuSankarasetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bhanumurari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bhanuchiru619@gmai.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://leetcode.com/u/BhanuMurari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LeetCode"
            >
              <Code size={24} />
            </a>
          </motion.div>
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end z-10">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src= {profile} className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-7xl font-bold"/>
     
            
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-sm mb-2 opacity-70">Scroll down</span>
        <ArrowDown size={20} className="text-primary" />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-accent/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
