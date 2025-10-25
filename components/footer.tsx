"use client";

import Link from "next/link";
import {
  Code as Code2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Club Recruitment", href: "/recruitment" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  // { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/club-excel-nist/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_club_excel_?t=4oyi9-AIW97mFEUT6hboWA&s=09", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/_club_excel_?igsh=bG40ZnMxd3lwNDcz", label: "Instagram" },
  { icon: Mail, href: "miltor:clubexcel2025@gmail.com", label: "Email" },
  {icon : Facebook,href: "https://www.facebook.com/share/16K3M5i3nW/", label: "Facebook"},
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 mt-10 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="relative w-auto h-10 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Image
                  src="/clubexcellogo.webp"
                  alt="Club Logo"
                  width={32}
                  height={32}
                  className="relative z-10 w-16 h-10 sm:w-9 sm:h-9 lg:w-10 lg:h-10 "
                />
                <span className="font-bold text-base sm:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-500 transition-all ml-2">
                  CLUB EXCEL
                </span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-xs mx-auto sm:mx-0">
              A Hub of Developers & Innovators. Dare to Match the Pace of Excelites.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-3 sm:mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm sm:text-base text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 sm:pt-8 border-t border-border/40 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy;2025 This website is proudly created by the members of Club Excel. 
          </p>
        </div>
      </div>
    </footer>
  );
}
