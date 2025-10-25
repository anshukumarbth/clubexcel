"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 ml-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 lg:py-16">
          {/* Left content column */}
          <div className="text-center lg:text-left max-w-5xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-500 font-medium">
                <Sparkles className="w-4 h-4" />
                Welcome to the Future of Innovation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                CLUB EXCEL
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 ml-4 max-w-3xl mx-auto"
            >
              Dare to Match the Pace of Excelites
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              A multi-domain coding and developer student club where innovation
              meets excellence. Join us in shaping the future of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/recruitment">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Club Excel
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>

              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  Explore Events
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right image column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full"
          >
            <motion.div
              className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main//Excel_Logo_Anim.gif"
                alt="Club Excel Innovation"
                width={600}
                height={600}
                className="rounded-2xl w-full h-auto object-contain"
                style={{
                  backgroundColor: "transparent",
                  mixBlendMode: "screen",
                }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/20 rounded-full flex items-start justify-center p-1.5 sm:p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-muted-foreground/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
