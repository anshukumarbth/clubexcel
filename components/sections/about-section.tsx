"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-6 lg:px-0 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Club Excel
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-full sm:max-w-xl md:max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed px-4 sm:px-6 lg:px-0 text-left" >
              Welcome to Club Excel, NIST's premier coding club, where
              innovation thrives. We are renowned for our remarkable
              contributions across technology domains, focusing on full stack
              development, application development, cloud computing, and AI/ML.
              Club Excel provides an engaging platform for students to hone
              their technical skills, collaborate on inventive projects, and
              prepare for a tech-centric future. Whether you're a coding
              enthusiast or just beginning your tech journey, all are welcome to
              join us in pushing the boundaries of what's possible in the world
              of coding and tech innovation. Unleash your potential with Club
              Excel and be a part of the future of technology!
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl shadow-blue-200"
          >
            <div className="relative pt-[56.25%] ">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/excel_introv2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
