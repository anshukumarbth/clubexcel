"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "NIST University, Berhampur, Odisha",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "clubexcel2025@gmail.com",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9709335128,7849077522,8789918110",
    gradient: "from-green-500 to-emerald-500",
  },
 
]

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll respond to you shortly.",
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Get in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you. Reach out to us through
              any of the channels below or fill out the contact form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-blue-500/40 transition-all duration-300 text-center shadow-lg shadow-blue-300">
                  <motion.div
                    className={`mx-auto mb-4 p-4 rounded-xl bg-gradient-to-br ${info.gradient} w-fit`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground mb-6">
                Find us on campus and visit our office during office hours. We're always happy to meet
                new faces and discuss exciting opportunities.
              </p>

              <div className="rounded-2xl overflow-hidden border border-border h-[400px] relative shadow-lg shadow-blue-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.805409605253!2d84.78205487493438!3d19.315210786952197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bb5b3d5f1b4c1%3A0x92b1811f1fbc1a6d!2sNIST%20University!5e0!3m2!1sen!2sin!4v1739535623456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-3xl bg-card border border-border shadow-lg shadow-blue-300" >
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 ">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      required
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? "Sending..." : "Send Message"}
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
        </div>
      </section>
    </div>
  )
}
