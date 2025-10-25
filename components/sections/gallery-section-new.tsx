"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { X } from "lucide-react"

const galleryImages = [
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/1.jpg",
		title: "Frontend development using react js",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/2.jpg",
		title: "Sankalp 2024 Code Crusade 2.0",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/3.jpg",
		title: "Sankalp 2024 Excel Arcade",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/4.jpg",
		title: "Explorotech gateway to future",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/5.jpg",
		title: "Git and GitHub workshop",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/6.jpg",
		title: "Sankalp 2025 Day 1 Code Crusade 3.0",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/7.jpg",
		title: "Sankalp Day 2 Ctrl+Win Showdown",
	},
	{
		url: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/8.jpg",
		title: "Sankalp Day 2 Ctrl+Win Showdown",
	}
]

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const [index, setIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const slides = galleryImages;
  const total = slides.length;

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 2000);
    return () => clearInterval(t);
  }, [autoplay, total]);

  // keyboard navigation for viewer
  useEffect(() => {
    if (!viewerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewerOpen(false);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // handle drag/swipe
  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    const offset = info.offset.x;
    if (offset < -80) next();
    if (offset > 80) prev();
  };

  return (
    <section ref={ref} className="py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Club Memories</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Moments captured from our journey — swipe, browse thumbnails, or
            open full view.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous slide"
                onClick={prev}
                className="p-2 rounded-full bg-blue-500 shadow-sm hover:bg-blue-400 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={next}
                className="p-2 rounded-full bg-blue-500 shadow-sm hover:bg-blue-400 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-black">
              <button
                aria-label="Open full viewer"
                onClick={() => setViewerOpen(true)}
                className="text-sm px-3 py-1 rounded-full bg-blue-400 shadow-s"
              >
                Open
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slides[index].url}
                className="w-full rounded-2xl overflow-hidden relative bg-gray-900 shadow-blue-300 shadow-lg"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.45 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
                style={{ touchAction: "pan-y" }}
              >
                <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] p-5 shadow-yellow-200 shadow-lg">
                  <Image
                    src={slides[index].url}
                    alt={slides[index].title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 overflow-x-auto no-scrollbar py-2">
            <div className="inline-flex gap-3">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative rounded-lg overflow-hidden flex-shrink-0 w-24 h-16 sm:w-28 sm:h-20 border ${
                    i === index
                      ? "ring-2 ring-offset-2 ring-red-500"
                      : "border-transparent"
                  }`}
                  aria-label={`Go to ${s.title}`}
                >
                  <Image
                    src={s.url}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen viewer */}
      {viewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setViewerOpen(false)}
        >
          <button
            aria-label="Close viewer"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            onClick={() => setViewerOpen(false)}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div
            className="relative w-full max-w-6xl h-[80vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={slides[index].url}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[index].url}
                  alt={slides[index].title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Viewer navigation */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="pointer-events-auto ml-4 p-3 rounded-full bg-white/5 hover:bg-white/10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="pointer-events-auto mr-4 p-3 rounded-full bg-white/5 hover:bg-white/10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}