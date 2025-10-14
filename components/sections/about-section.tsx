"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"


export function AboutSection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	return (
		<section ref={ref} className="py-20 relative">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							About{" "}
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								Club Excel
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-8">
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
						className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
					>
						<div className="relative pt-[56.25%]">
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
						{/* Play Button Overlay */}
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="absolute inset-0 flex items-center justify-center group cursor-pointer"
						>
							<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/90 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600/90">
								<svg
									className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</motion.div>
					</motion.div>
				</div>

				
			</div>
		</section>
	)
}
