"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
	{
		url: "/1.jpg",
		title: "Frontend development using react js",
	},
	{
		url: "/2.jpg",
		title: "Sankalp 2024 Code Crusade 2.0",
	},
	{
		url: "/3.jpg",
		title: "Sankalp 2024 Excel Arcade",
	},
	{
		url: "/4.jpg",
		title: "Explorotech gateway to future",
	},
	{
		url: "/5.jpg",
		title: "Git and GitHub workshop",
	},
	{
		url: "/6.jpg",
		title: "Sankalp 2025 Day 1 Code Crusade 3.0",
	},
	{
		url: "/7.jpg",
		title: "Sankalp Day 2 Ctrl+Win Showdown",
	},
	{
		url: "/8.jpg",
		title: "Sankalp Day 2 Ctrl+Win Showdown",
	}
]

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
	}),
}

export function GallerySection() {
	const [[page, direction], setPage] = useState([0, 0])

	const imageIndex = page % galleryImages.length
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	useEffect(() => {
		const interval = setInterval(() => {
			paginate(1)
		}, 3000)
		return () => clearInterval(interval)
	}, [page])

	return (
		<section className="py-20 relative">
			<div className="container mx-auto px-4 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Club{" "}
						<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							Memories
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Capturing moments of innovation, collaboration, and excellence from
						our journey.
					</p>
				</motion.div>

				<div className="relative h-[400px] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl">
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={page}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 500, damping: 30 },
								opacity: { duration: 0.2 },
							}}
							className="absolute w-full h-full"
						>
							<Image
								src={galleryImages[imageIndex].url}
								alt={galleryImages[imageIndex].title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
								<div>
									<h3 className="text-white font-bold text-xl mb-1">
										{galleryImages[imageIndex].title}
									</h3>
									<p className="text-white/80 text-sm">Club Excel Event</p>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
					<div
						className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white/20 rounded-full p-2 hover:bg-white/40 transition"
						onClick={() => paginate(1)}
					>
						<ChevronRight className="w-6 h-6 text-white" />
					</div>
					<div
						className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white/20 rounded-full p-2 hover:bg-white/40 transition"
						onClick={() => paginate(-1)}
					>
						<ChevronLeft className="w-6 h-6 text-white" />
					</div>
				</div>
			</div>
		</section>
	)
}
