"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  pemail: string;
  phoneNo?: string;
  hackerRank?: string;
  rollNumber: string;
  registrationNumber: string;
  branch: string;
  year: string;
  event: string;
  accommodation: string;
}

const eventData = {
  titles: [
    { id: 2, title: "Code crusade 4.0" },
    { id: 3, title: "Cipher Chase" },
  ],
  batch: [
    { id: 1, year: "2022-26" },
    { id: 2, year: "2023-27" },
    { id: 3, year: "2024-28" },
    { id: 4, year: "2025-29" },
  ],
  accommodation: [
    { id: 1, type: "hostelite" },
    { id: 2, type: "localite" },
  ],
};

export default function EventRegistration() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    pemail: "",
    phoneNo: "",
    hackerRank: "",
    rollNumber: "",
    registrationNumber: "",
    branch: "",
    year: "",
    event: "",
    accommodation: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    const requiredFields = Object.entries([
      "name",
      "email",
      "pemail",
      "phoneNo",
      "rollNumber",
      "registrationNumber",
      "branch",
      "year",
      "event",
      "accommodation",
    ]);
    const emptyFields = requiredFields.filter(([_, value]) => !value);

    if (emptyFields.length > 0) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Registration Submitted",
          description: "We've received your registration details.",
        });
        setFormData({
          name: "",
          email: "",
          pemail: "",
          phoneNo: "",
          hackerRank: "",
          rollNumber: "",
          registrationNumber: "",
          branch: "",
          year: "",
          event: "",
          accommodation: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            className="max-w-2xl mx-auto shadow-lg shadow-blue-300 rounded-lg"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card p-8 rounded-2xl border border-border"
            >
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
                  <Label htmlFor="email">NIST-Email ID</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="akash.cse.2023@nist.edu"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pemail">Personal-Email ID</Label>
                  <Input
                    id="pemail"
                    type="email"
                    placeholder="akash@gmail.com"
                    required
                    onChange={handleChange}
                    value={formData.pemail}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pemail">Phone Number</Label>
                  <Input
                    id="phoneNo"
                    type="tel"
                    placeholder="+91 9709335128"
                    required
                    onChange={handleChange}
                    value={formData.phoneNo}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hackerRank">Hacker-Rank ID</Label>
                  <p>Required for Code Crusade 4.0</p>
                  <Input
                    id="hackerRank"
                    type="text"
                    placeholder="akash108"
                    onChange={handleChange}
                    value={formData.hackerRank}
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
                  <Label htmlFor="registrationNumber">
                    Registration Number
                  </Label>
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
                    placeholder="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodation">Accommodation</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("accommodation", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an Accommodation" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventData.accommodation.map((item) => (
                        <SelectItem key={item.id} value={item.type}>
                          {item.type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("year", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an Batch" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventData.batch.map((item) => (
                        <SelectItem key={item.id} value={item.year}>
                          {item.year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event">Select Event</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("event", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventData.titles.map((item) => (
                        <SelectItem key={item.id} value={item.title}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
