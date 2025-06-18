'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, LineChart, Zap } from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Web Development',
      description: 'We craft responsive, performant websites and applications using cutting-edge technologies.',
      delay: 0
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: 'Interactive Experiences',
      description: 'Engage your audience with immersive 3D visuals, animations, and interactive elements.',
      delay: 0.2
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive interfaces that delight users while achieving your business goals.',
      delay: 0.4
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times and smooth interactions for better user engagement and SEO.',
      delay: 0.6
    }
  ];
  
  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive online.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}