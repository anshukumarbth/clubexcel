"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface FormData {
  name: string;
  email: string;
  rollNumber: string;
  registrationNumber: string;
  branch: string;
  year: string;
  event: string;
  accommodation: string;
}

const upcomingEvents = [
	{
		id: 1,
		title: "N8N Workshop",
	},
]

export default function EventRegistration() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rollNumber: "",
    registrationNumber: "",
    branch: "",
    year: "",
    event: "",
    accommodation: ""
  })
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, event: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    const requiredFields = Object.entries(formData)
    const emptyFields = requiredFields.filter(([_, value]) => !value)
    
    if (emptyFields.length > 0) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/event-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Registration Submitted",
          description: "We've received your registration details.",
        })
        setFormData({
          name: "",
          email: "",
          rollNumber: "",
          registrationNumber: "",
          branch: "",
          year: "",
          event: "",
          accommodation: ""
        })
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
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
							Event{" "}
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								Registration
							</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Fill out the form below to register for an upcoming event.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="max-w-2xl mx-auto"
					>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    placeholder="John Doe" 
                    required 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    required 
                    onChange={handleChange} 
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input 
                    id="rollNumber" 
                    value={formData.rollNumber}
                    placeholder="2205123" 
                    required 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Registration Number</Label>
                  <Input 
                    id="registrationNumber" 
                    placeholder="2205123" 
                    required 
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input 
                    id="branch" 
                    placeholder="Computer Science" 
                    required 
                    onChange={handleChange} 
                    value={formData.branch}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodation">Accommodation</Label>
                  <Input 
                    id="accommodation" 
                    placeholder="hostelite/localite"
                    onChange={handleChange} 
                    required 
                    value={formData.accommodation}                />
                </div>
                 <div className="space-y-2">
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Input 
                    id="year" 
                    placeholder="3rd" 
                    required 
                    value={formData.year}
                    onChange={handleChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event">Select Event</Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {upcomingEvents.map((event) => (
                        <SelectItem key={event.id} value={event.title}>
                          {event.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}