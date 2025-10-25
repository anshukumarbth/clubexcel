"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 2,
    title: "Code Crusade 4.0",
    date: "2025-11-6",
    time: "9:00am to 4:00pm",
    location: "ATRIUM CC",
    description:
      "Join us for the fourth edition of Code Crusade, a competitive coding event where participants solve challenging problems to win exciting prizes and showcase their coding skills.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/CodeCrusade.png",
    attendees: "NO Limite",
    category: "Coding Competition",
  },
  {
    id: 3,
    title: "Cipher Chase",
    date: "2025-11-6",
    time: "9:00am to 4:00pm",
    location: "ATRIUM Room no. 205",
    description:
      "Embark on a thrilling journey of cryptography and problem-solving in Cipher Chase. Decode puzzles, crack codes, and race against the clock",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/CipherChase.png",
    attendees: "NO Limite",
    category: "Fun Event",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "GIT & GITHUB Workshop",
    description:
      "Hands-on workshop on version control using Git and collaborative coding with GitHub.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main//5.jpg",
    highlights: "200+ participants",
  },
  {
    id: 2,
    title: "Sankalp 2025 Day 1 Code Crusade 3.0",
    description:
      "Competitive coding event with challenging problems and exciting prizes.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main//6.jpg",
    highlights: "300+ participants",
  },
  {
    id: 3,
    title: "Frontend development using react js",
    description:
      "Comprehensive workshop on building dynamic web applications using React.js and modern JavaScript.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main//1.jpg",
    highlights: "200+ participants",
  },
  {
    id: 4,
    title: "Explorotech gateway to future",
    description:
      "A tech talk series exploring emerging technologies and future trends in the tech industry.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main//4.jpg",
    highlights: "200+ participants",
  },
];

export default function EventsPage() {
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const upcomingInView = useInView(upcomingRef, {
    once: true,
    margin: "-100px",
  });
  const pastInView = useInView(pastRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us for exciting workshops, hackathons, and tech talks. Stay
              updated with upcoming events and relive memories from past
              gatherings.
            </p>
          </motion.div>

          <div ref={upcomingRef} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={
                upcomingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Upcoming Events
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate={upcomingInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full rounded-3xl overflow-hidden bg-card border border-border hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-blue-200">
                    <div className="relative aspect-[9.5/9] m-2 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{event.attendees} expected attendees</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-6">
                        {event.description}
                      </p>

                      <Link
                        href={`/event-registration?eventId=${event.id}`}
                        className="w-full block"
                        prefetch={true}
                      >
                        <Button
                          className="w-full group/btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          onClick={(e) => {
                            // Optional: Add loading state or transition effect
                            setIsLoading(true);
                          }}
                        >
                          {isLoading ? "Loading..." : "Register Now"}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div ref={pastRef}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={
                pastInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Past Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    pastInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-borde shadow-lg shadow-blue-200">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <p className="text-xs text-blue-500 font-medium mb-1">
                          Highlights
                        </p>
                        <p className="text-sm">{event.highlights}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
