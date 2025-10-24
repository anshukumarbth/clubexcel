"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, CircleCheck as CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const benefits = [
  "Access to exclusive workshops and bootcamps",
  "Mentorship from industry professionals",
  "Networking opportunities with tech leaders",
  "Hands-on experience with real projects",
  "Participation in national and international hackathons",
  "Skill development across multiple domains",
  "Career guidance and placement support",
  "Collaborative learning environment",
]

const domains = [
  "Web Development",
  "App Development",
  "AI & Machine Learning",
  "Cybersecurity",
  "Competitive Coding",
  "Data Science",
  "IoT & Embedded",
  "Cloud Computing",
  "UI/UX Design",
  "Other",
]

export default function RecruitmentPage() {
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      domain: formData.get("domain"),
      linkedin: formData.get("linkedin"),
      github: formData.get("github"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/recruitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description:
            "Thank you for your interest. We'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-20">
      <section className="py-20 relative overflow-hidden">
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

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-500 font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Applications Now Open
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Club Excel</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Become part of a vibrant community of developers and innovators. Take your skills to the next level
              and build the future of technology with us.
            </p>
          </motion.div>

          <div ref={benefitsRef} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              Why Join Us?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16 ">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-blue-500/40 transition-colors shadow-md shadow-blue-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto shadow-lg shadow-blue-300 rounded-lg"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl">
              <h2 className="text-3xl font-bold mb-2 text-center">Application Form</h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and we'll get back to you within 48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="domain">Domain of Interest *</Label>
                  <Select name="domain" required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain.toLowerCase()}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/johndoe"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    name="github"
                    type="url"
                    placeholder="https://github.com/johndoe"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Why do you want to join Club Excel? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your passion for technology and what you hope to achieve with Club Excel..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      {!isSubmitting && <Send className="w-5 h-5" />}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
