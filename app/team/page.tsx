"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

/* -------------------- Data Arrays -------------------- */
const teamMembers = [
  {
    id: 1,
    name: "Payal Bhattamisra",
    role: "core member",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/payal-bhattamisra-5a1117253/",
    github: "#",
    email: "#",
    bio: "#",
    image: "/payaljr.webp",
  },
  {
    id: 2,
    name: "Govinda Mahanti",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/govinda-mahanti-314754251/",
    github: "#",
    email: "#",
    bio: "#",
    image: "/govindajr.webp",
  },
  {
    id: 3,
    name: "Rudransh Dash",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/rudransh-dash-96b9b6259/",
    github: "#",
    email: "#",
    bio: "#",
    image: "/rudranshjr.webp",
  },
  {
    id: 4,
    name: "Gaurav Tiwari ",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/gaurav-tiwari-121a77258/",
    github: "#",
    email: "#",
    bio: "#",
    image: "/gauravjr.webp",
  },
  {
    id: 5,
    name: "Abhimanyu Kumar",
    role: "",
    domain: "#",
    linkedin: "linkedin.com/in/abhimanyu-kumar-4b6716242",
    github: "#",
    email: "#",
    bio: "#",
    image: "/Abhimanyujr.webp",
  },
  {
    id: 6,
    name: "Sriya Reddy",
    role: "",
    domain: "#",
    linkedin: "linkedin.com/in/sriya-reddy-564607258",
    github: "#",
    email: "#",
    bio: "",
    image: "/usriyareddyjr.webp",
  },
  {
    id: 7,
    name: "Sruti Prusty",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/sruti-prusty-995882258/",
    github: "#",
    email: "#",
    bio: "#",
    image: "/sruti.jpeg",
  },
  {
    id: 8,
    name: "Priya Patra",
    role: "",
    domain: "#",
    linkedin: "linkedin.com/in/priya-patra-a7b370259",
    github: "#",
    email: "#",
    bio: "",
    image: "/Priyapatrajr.webp",
  },
  {
    id: 9,
    name: "sudip",
    role: "",
    domain: "#",
    linkedin: "#",
    github: "#",
    email: "#",
    bio: "",
    image: "/Sudipdasjr.webp",
  },
  {
    id: 10,
    name: "Rudra Narayan Nayak",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/rudra-narayan-nayak-61939925b/",
    github: "#",
    email: "#",
    bio: "",
    image: "/Rudrajr.webp",
  },
  {
    id: 11,
    name: "Aman Kumar",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/aman-kumar-b12085253",
    github: "#",
    email: "#",
    bio: "",
    image: "/amanjr.webp",
  },

  {
    id: 12,
    name: "Srikant Jena",
    role: "",
    domain: "#",
    linkedin: "https://www.linkedin.com/in/srikant-jena-09b106273",
    github: "#",
    email: "#",
    bio: "",
    image: "/srikantjr.webp",
  },
  {
    id: 13,
    name: "Mohammad Ehsan",
    role: "",
    domain: "#",
    linkedin: "linkedin.com/in/mohammad-ehsan-23aaba290/",
    github: "#",
    email: "#",
    bio: "",
    image: "/eshanjr.webp",
  },
  {
    id: 14,
    name: "K Sai Kalyan",
    role: "",
    domain: "#",
    linkedin: "linkedin.com/in/k-sai-kalyan-1a7249262",
    github: "#",
    email: "#",
    bio: "",
    image: "/Ksaikalyanjr.webp",
  },

  {
    id: 15,
    name: "Anshu Kumar",
    role: "Core Member",
    domain: "Full Stack Development",
    linkedin: "https://www.linkedin.com/in/anshu-kumar-8b579a289/",
    github: "https://github.com/anshukumarbth",
    email: "anshukumarbth1@gmail.com",
    bio: "AI + MERN Stack Developer | Automate. Innovate. Inspire.",
    image: "/anshu.jpg",
  },
  {
    id: 16,
    name: "Akash Kumar",
    role: "Representative",
    domain: "Penetration Testing, Red Teaming, Backend Development",
    linkedin: "https://www.linkedin.com/in/akash-kumar-17576132b/",
    github: "https://github.com/akash-dev-18",
    email: "akash1.dev2.ak@gmail.com",
    bio: "AND THE ERA BEGINS..",
    image: "/akash.jpg",
  },
  {
    id: 17,
    name: "Disha Rani Dash",
    role: "Social Media Handler",
    domain: "Full Stack Webd",
    linkedin: "https://www.linkedin.com/in/disha-rani-dash-74409b2b5",
    github: "https://github.com/ITS-DISHA23",
    email: "dishadash11@gmail.com",
    bio: "Livin' a Little",
    image: "/disha.JPG",
  },
  {
    id: 18,
    name: "Sujata Kumari",
    role: "core member",
    domain: "Full Stack Webd",
    linkedin: "www.linkedin.com/in/sujata-kumari9",
    github: "https://github.com/Suja-ta-kumari",
    email: "sujatakumari6569@gmail.com",
    bio: "#Sujata.. Code. Create. Conquer.",
    image: "/sujata.webp",
  },
  {
    id: 29,
    name: "Sai Sarthak Sadangi",
    role: "Core Member",
    domain: "AI/ML",
    linkedin: "https://www.linkedin.com/in/sai-sarthak-sadangi/",
    github: "https://github.com/sai-AIstacker",
    email: "saiaistacker@gmail.com",
    bio: "#saiAIstacker..Exploring Next Chapter Of AI",
    image: "/saijr.png",
  },
  {
    id: 30,
    name: "Ashmita Maharana",
    role: "Core Member",
    domain: "Data Science",
    linkedin: "https://www.linkedin.com/in/ashmita-maharana/",
    github: "https://github.com/Ashmita-notes",
    email: "mashmita05@gmail.com",
    bio: "#ashmita.. technology leads to innovation+leadership",
    image: "/team/ashmita.jpg",
  },
  {
    id: 31,
    name: "N Jayant Rao",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/n-jayant-rao-093036315",
    github: "https://github.com/NJayantRao",
    email: "njayantrao@gmail.com",
    bio: "",
    image: "/Jayantjr.png",
  },
  {
    id: 32,
    name: "Md Amanullah",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/md-amanullah-79523224b/",
    github: "https://github.com/amaan-exe",
    email: "amanullah2607main@gmail.com",
    bio: "Conquer and code",
    image: "/team/amanullah.jpg",
  },
  {
    id: 33,
    name: "Ayush Kumar Gupta",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-gupta-a1450a324/",
    github: "https://github.com/ayush-techdot",
    email: "horridayush1@gmail.com",
    bio: "#",
    image: "/ayushjr.jpg",
  },
  {
    id: 34,
    name: "D. Jyothika",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/d-jyothika-2b5734332",
    github: "https://github.com/D-Jyothika562",
    email: "durgasijyothika@gmail.com",
    bio: "#Jyothika.. Dream. Design. Deploy.",
    image: "/team/jyothika.jpg",
  },
  {
    id: 35,
    name: "Puja Pradhan",
    role: "Core Member",
    domain: "Data Science",
    linkedin: "https://linkedin.com/in/puja-pradhan-34ba2b248",
    github: "https://github.com/ppuja0939-glitch",
    email: "ppuja0939@gmail.com",
    bio: "Creativity and code",
    image: "/pujajr.jpg",
  },
  {
    id: 36,
    name: "Vineet Patnaik",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/vineet-patnaik-76857436b/",
    github: "https://github.com/vcancode",
    email: "vineet006patnaik@gmail.com",
    bio: "Write. Debug. Deploy. Repeat.",
    image: "/team/vineet.jpg",
  },
  {
    id: 37,
    name: "Ansuman Padhy",
    role: "Core Member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/ansuman-padhy-7603b5322/",
    github: "https://github.com/Ansuman456",
    email: "ansumanpadhy28@gmail.com",
    bio: "Code for the new future",
    image: "/team/ansuman.jpg",
  },
  {
    id: 38,
    name: "Koustubha Pathy",
    role: "Core Member",
    domain: "Red Teaming & Penetration Testing",
    linkedin: "https://www.linkedin.com/in/koustubha-pathy-758243332",
    github: "https://github.com/koustubhapathy18",
    email: "koustubhapathyofficial@gmail.com",
    bio: "Carpe diem!",
    image: "/kpjr.jpg",
  },
  {
    id: 39,
    name: "M.Roshni Princy",
    role: "Core",
    domain: " Web Development",
    linkedin:
      "https://www.linkedin.com/in/m-roshni-princy-ba517a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/M-Roshni-Princy",
    email: "roshni1305princy@gmail.com",
    bio: "#Roshni..Coding the future, one pixel at a time!",
    image: "/roshni.jpg",
  },
  {
    id: 40,
    name: "Aditya kumar Rath",
    role: "Core member",
    domain: " Data Science",
    linkedin: "www.linkedin.com/in/aditya-kumar-rath-849aa5309 ",
    github: "https://github.com/aditya44-git ",
    email: " adityakumarrath44@gmail.com",
    bio: "#Adee.. PREDICT. ANALYZE. INNOVATE !",
    image: "/aditya.jpg",
  },
];

const advisors = [
  {
    id: 1,
    name: "Swetanjali Maharana",
    role: "Faculty Advisor",
    currentPosition: "Assistant Prof.",
    image: "/swetanjali.webp",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Bandhan Panda",
    role: "Faculty Advisor",
    currentPosition: "Assistant Prof.",
    image: "/bandhan.webp",
    linkedin: "#",
  },
];

const alumni = [
  {
    id: 1,
    name: "Rahul Kumar",
    image: "/alumni/rahul.webp",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-4878a61ab/",
  },
  {
    id: 2,
    name: "Abhinav",
    image: "/alumni/abhinav.webp",
    linkedin: "https://www.linkedin.com/in/abhinav-sde/",
  },
  {
    id: 3,
    name: "Gourav",
    image: "/alumni/gourav.webp",
    linkedin: "https://www.linkedin.com/in/bgourav2287/",
  },
  {
    id: 4,
    name: "Asutosh",
    image: "/alumni/ashutosh.webp",
    linkedin: "https://www.linkedin.com/in/asutosh-panigrahi/",
  },
  {
    id: 5,
    name: "Anwesh",
    image: "/alumni/anwesh.webp",
    linkedin: "https://www.linkedin.com/in/anwesh-mohanty-03426a240/",
  },
  {
    id: 6,
    name: "Soumik bera",
    image: "/alumni/soumik.webp",
    linkedin: "linkedin.com/in/soumik-bera-a42723238",
  },
  {
    id: 7,
    name: "Bishal",
    image: "/alumni/bishal.webp",
    linkedin: "https://www.linkedin.com/in/bishal-kumar-saw-35b918257/",
  },
  {
    id: 8,
    name: "Akshat",
    image: "/alumni/akshat.webp",
    linkedin: "https://www.linkedin.com/in/akshat-anand-7ba987249/",
  },
  {
    id: 9,
    name: "Mayank",
    image: "/alumni/mayank.webp",
    linkedin: "https://www.linkedin.com/in/mayank-raj-a82446258/",
  },
  {
    id: 10,
    name: "Naveen",
    image: "/alumni/naveen.webp",
    linkedin: "#",
  },
  {
    id: 11,
    name: "Ashutosh Biswal",
    image: "/alumni/ashutoshbiswal.webp",
    linkedin: "https://www.linkedin.com/in/ashutosh-biswal-41328a174/",
  },
  {
    id: 12,
    name: "Adil Zamal",
    image: "/alumni/adil.webp",
    linkedin: "https://www.linkedin.com/in/adil-zamal-40b5aa155/",
  },
  {
    id: 13,
    name: "Rishav Kumar",
    image: "/alumni/RishavKumar.webp",
    linkedin: "https://www.linkedin.com/in/rishav-kumar-075ba517b/",
  },
  {
    id: 14,
    name: "Asish Patnaik",
    image: "/alumni/asishpatnaik.webp",
    linkedin: "https://www.linkedin.com/in/asish-patnaik-3917a7193/",
  },
  {
    id: 15,
    name: "Aryan Asgar",
    image: "/alumni/aryan.webp",
    linkedin: "https://www.linkedin.com/in/aryan-asgar-840825106/",
  },
  {
    id: 16,
    name: "K Nandini Dora",
    image: "/alumni/nandini.webp",
    linkedin: "https://www.linkedin.com/in/knandinidora/",
  },
  {
    id: 17,
    name: "Kumar Nikhil Singh",
    image: "/alumni/nikhil.webp",
    linkedin: "https://www.linkedin.com/in/kumar-nikhil-b10024194/",
  },
  {
    id: 18,
    name: "Ritik Kumar",
    image: "/alumni/ritik.webp",
    linkedin: "https://www.linkedin.com/in/ritik126/",
  },
  {
    id: 19,
    name: "Sanat Dash",
    image: "/alumni/sanat.webp",
    linkedin: "https://www.linkedin.com/in/sanat-dash-aa5876193/",
  },
  {
    id: 20,
    name: "Chiranjeeb Nayak",
    image: "/alumni/chiranjeeb.webp",
    linkedin: "https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/",
  },
  {
    id: 21,
    name: "Sushovan Paul",
    image: "/alumni/sushovan.webp",
    linkedin: "https://www.linkedin.com/in/sushovan07/",
  },
  {
    id: 22,
    name: "Sunny Kumar",
    image: "/alumni/sunny.webp",
    linkedin: "https://www.linkedin.com/in/sunny52525/",
  },
  {
    id: 23,
    name: "ASHU SHARMA",
    image: "/alumni/ashu.webp",
    linkedin: "https://www.linkedin.com/in/a-shu/",
  },
  {
    id: 24,
    name: "Akarsh Agrawal",
    image: "/alumni/akarsh.webp",
    linkedin: "https://www.linkedin.com/in/akarshagrawal09/",
  },
  {
    id: 25,
    name: "Dipti Mishra",
    image: "/alumni/deepti.webp",
    linkedin: "https://www.linkedin.com/in/dipti-mishra-724928202/",
  },
  {
    id: 26,
    name: "Hritvik Ranjan",
    image: "/alumni/hritvik.webp",
    linkedin: "https://www.linkedin.com/in/hritvik-ranjan-b290a71a9/",
  },
  {
    id: 27,
    name: "Laxmi Naryann",
    image: "/alumni/narayan.webp",
    linkedin: "linkedin.com/in/naryann/",
  },
  {
    id: 28,
    name: "Rupesh Raj Tripathy",
    image: "/alumni/rupesh.webp",
    linkedin: "https://www.linkedin.com/in/rupesh-raj-tripathy-86497b1ab/",
  },
  {
    id: 29,
    name: "Shradha Kyal",
    image: "/alumni/sradha.webp",
    linkedin: "https://www.linkedin.com/in/shradha-kyal-a268331b1/",
  },
  {
    id: 30,
    name: "Sonali Sahu",
    image: "/alumni/sonali.webp",
    linkedin: "https://www.linkedin.com/in/sonali-sahu-/",
  },
  {
    id: 31,
    name: "Niharika Kumari",
    image: "/alumni/niharika.webp",
    linkedin: "https://www.linkedin.com/in/niharika-kumari-23b3a6213/",
  },
  {
    id: 32,
    name: "Suraj kumar Sahu",
    image: "/alumni/suraj.webp",
    linkedin: "https://www.linkedin.com/in/suraj-kumar-sahu-7348231aa/",
  },
  {
    id: 33,
    name: "Sarbajit Mohanty",
    image: "/alumni/sarbajit.webp",
    linkedin: "https://www.linkedin.com/in/sarbajitmohanty/",
  },
  {
    id: 34,
    name: "B SANJEEV REDDY",
    image: "/alumni/sanjeev.webp",
    linkedin: "linkedin.com/in/sanjeev-sde",
  },
  {
    id: 35,
    name: "Pabitra Ranjan Rout",
    image: "/alumni/pabitra.webp",
    linkedin: "https://www.linkedin.com/in/pabitra-ranjan-rout/",
  },
  {
    id: 36,
    name: "Vibhav",
    image: "/alumni/vibhav.webp",
    linkedin: "https://myportfollio-b219a.web.app/",
  },
  {
    id: 37,
    name: "Varsha Beeraka",
    image: "/alumni/varsha.webp",
    linkedin: "https://www.linkedin.com/in/varsha-beeraka-951b19202/",
  },
  {
    id: 38,
    name: "Ch Biswamohan Patra",
    image: "/alumni/Biswabhiya.webp",
    linkedin: "linkedin.com/in/chbiswamohanpatra",
  },
  {
    id: 39,
    name: "MD Faizan Alam",
    image: "/alumni/faizanbhiya.webp",
    linkedin: "linkedin.com/in/md-faizan-alam-35374922a",
  },
  {
    id: 40,
    name: "Kishlay Kumar",
    image: "/alumni/kishlaybhiya.webp",
    linkedin: "https://www.linkedin.com/in/kishlaykumar-22/",
  },
  {
    id: 41,
    name: "Richa",
    image: "/alumni/richadi.webp",
    linkedin: "https://www.linkedin.com/in/richa-75826322b/",
  },
  {
    id: 42,
    name: "Ankit Kumar",
    image: "/alumni/Ankitbhiya.webp",
    linkedin: "https://www.linkedin.com/in/ankitkumar2454/",
  },
  {
    id: 43,
    name: "Srikant Mahanty",
    image: "/alumni/srikant.webp",
    linkedin: "https://www.linkedin.com/in/srikant-mahanty-a9329322b/",
  },
  {
    id: 44,
    name: "Sanket Kumar",
    image: "/alumni/sanket.webp",
    linkedin: "https://www.linkedin.com/in/sanket-kumar-48ba23162/",
  },
  {
    id: 45,
    name: "samrat singh",
    image: "/alumni/samrat.webp",
    linkedin: "https://www.linkedin.com/in/samrat-singh-18941a22b/",
  },
  {
    id: 46,
    name: "Rupa Mohanty",
    image: "/alumni/rupa.webp",
    linkedin: "https://www.linkedin.com/in/rupa-mohanty/",
  },
];

/* -------------------- Card Components -------------------- */
interface TeamMember {
  id: number;
  name: string;
  role: string;
  domain: string;
  image: string;
  linkedin: string;
  github: string;
  email: string;
  bio: string;
}

interface Advisor {
  id: number;
  name: string;
  role: string;
  currentPosition: string;
  image: string;
  linkedin: string;
}

interface Alumni {
  id: number;
  name: string;
  image: string;
  linkedin: string;
}

/* -------------------- Individual Card Components -------------------- */
function CardWrapper({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: Math.min(index * 0.1, 0.3), // Cap maximum delay at 0.3s
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      className="rounded-xl border border-white/10 bg-[#101020] p-4 shadow-lg will-change-transform"
    >
      {children}
    </motion.div>
  );
}

function AdvisorCard({ member, index }: { member: Advisor; index: number }) {
  return (
    <CardWrapper index={index}>
      <div className="relative w-full h-72 rounded-lg overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-blue-400">{member.role}</p>
      <p className="text-sm text-gray-400">{member.currentPosition}</p>
    </CardWrapper>
  );
}

// Team Member Card
function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <CardWrapper index={index}>
      <div className="relative w-full aspect-[5/4] rounded-lg overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-blue-400">{member.role}</p>
      <p className="text-sm text-gray-400">{member.domain}</p>
      <p className="text-sm text-gray-400 mt-2">{member.bio}</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Github size={20} />
        </a>
        <a href={`mailto:${member.email}`} className="hover:text-blue-400">
          <Mail size={20} />
        </a>
      </div>
    </CardWrapper>
  );
}

// Alumni Card
function AlumniCard({ member, index }: { member: Alumni; index: number }) {
  return (
    <CardWrapper index={index}>
      <div className="relative aspect-[5/4] w-full rounded-lg overflow-hidden mb-4 group">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold">{member.name}</h3>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </CardWrapper>
  );
}

/* -------------------- Main Component -------------------- */
export default function TeamPage() {
  const [activeSection, setActiveSection] = useState("members");

  return (
    <div className="min-h-screen bg-[#0b0820] text-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-blue-400">Team</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the brilliant minds who make Club Excel thrive — from our current
          innovators to our experienced advisors and alumni.
        </p>
      </div>

      {/* Section Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["advisors", "members", "alumni"].map((section) => (
          <motion.button
            key={section}
            onClick={() => setActiveSection(section)}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/10 text-gray-300 hover:bg-blue-500/20"
            }`}
          >
            {section === "advisors" && "Advisors"}
            {section === "members" && "Current Team"}
            {section === "alumni" && "Alumni Network"}
          </motion.button>
        ))}
      </div>

      {/* Conditional Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeSection === "members" &&
            teamMembers.map((m, i) => (
              <TeamMemberCard key={m.id} member={m} index={i} />
            ))}
          {activeSection === "advisors" &&
            advisors.map((m, i) => (
              <AdvisorCard key={m.id} member={m} index={i} />
            ))}
          {activeSection === "alumni" &&
            alumni.map((m, i) => (
              <AlumniCard key={m.id} member={m} index={i} />
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
