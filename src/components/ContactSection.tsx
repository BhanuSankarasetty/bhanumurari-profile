
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "hello@example.com",
      href: "mailto:hello@example.com",
    },
    {
      icon: Github,
      text: "github.com/username",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/username",
      href: "https://linkedin.com",
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-muted/30">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-lg mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="space-y-6 mt-10">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <item.icon size={24} />
                </div>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card border rounded-lg shadow-sm p-6"
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1 block">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1 block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1 block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="contact-input min-h-[150px] resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
