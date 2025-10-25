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
    domain: "",
    linkedin: "https://www.linkedin.com/in/payal-bhattamisra-5a1117253/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/payaljr.webp",
  },
  {
    id: 2,
    name: "Govinda Mahanti",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/govinda-mahanti-314754251/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Govindajr.webp",
  },
  {
    id: 3,
    name: "Rudransh Dash",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/rudransh-dash-96b9b6259/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/20250205_163506%20-%20Rudransh%20Dash.jpg",
  },
  {
    id: 4,
    name: "Gaurav Tiwari ",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/gaurav-tiwari-121a77258/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/gauravjr.webp",
  },
  {
    id: 5,
    name: "Abhimanyu Kumar",
    role: "",
    domain: "",
    linkedin: "linkedin.com/in/abhimanyu-kumar-4b6716242",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Abhimanyu%20Kumar.jpg",
  },
  {
    id: 6,
    name: "Sriya Reddy",
    role: "",
    domain: "",
    linkedin: "linkedin.com/in/sriya-reddy-564607258",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/SriyaReddy.jpg",
  },
  {
    id: 7,
    name: "Sruti Prusty",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/sruti-prusty-995882258/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/sruti.jpeg",
  },
  {
    id: 8,
    name: "Priya Patra",
    role: "",
    domain: "",
    linkedin: "linkedin.com/in/priya-patra-a7b370259",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Priyapatrajr.webp",
  },
  {
    id: 9,
    name: "sudip",
    role: "",
    domain: "",
    linkedin: "#",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Sudipdasjr.webp",
  },
  {
    id: 10,
    name: "Rudra Narayan Nayak",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/rudra-narayan-nayak-61939925b/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/RUDRA%20NAYAK.jpg",
  },
  {
    id: 11,
    name: "Aman Kumar",
    role: "",
    domain: "",
    linkedin: "https://www.linkedin.com/in/aman-kumar-b12085253",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Amangupta.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/srikantjr.webp",
  },
  {
    id: 13,
    name: "Mohammad Ehsan",
    role: "",
    domain: "",
    linkedin: "linkedin.com/in/mohammad-ehsan-23aaba290/",
    github: "#",
    email: "#",
    bio: "",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/eshanjr.webp",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/KSaiKalyan.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/anshu.JPG",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/akash.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/disha.JPG",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/sujata.webp",
  },
  {
    id: 19,
    name: "Abhisekh Padhy",
    role: "Co - Representative",
    domain: "Data Science ",
    linkedin: "https://www.linkedin.com/in/abhisekh-padhy-7374011b6",
    GitHub: "https://github.com/Abhee05-c",
    email: "abhisekhpadhy2005@gmail.com",
    bio: "Do the needful!",
    image:"https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/abhisekhPadhy.jpg"
  },
  {
    id: 20,
    name: "Riyasuman padhy",
    Role: "core member",
    domain: "Data analysis",
    linkedin: "https://www.linkedin.com/in/riyasuman-padhy-657a50375",
    gitHub: "https://www.linkedin.com/in/riyasuman-padhy",
    email: "riyapadhy85@gmail.com",
    Bio: "",
    image:"https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/"
  },
  {
    id: 21,
    name: "Biraja Nayak",
    Role: "core member",
    domain: "Full stack development",
    linkedIn: "https://www.linkedin.com/in/biraja-nayak-993960310",
    gitHub: "https://github.com/birajanayak10",
    email: "nbiraja916@gmail.com",
    bio: "chasing dreams",
    image:"https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Biraja%20Nayak.jpg"
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/saijr.png",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Ashmita%20Maharana.jpeg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Jayantjr.png",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/amaanje.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/ayushjr.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/D.Jyothika%20IMG%20-%20Jyothika%20Durgasi.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/pujajr.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/vineet.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/anshuman.PNG",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/kpjr.jpg",
  },
  {
    id: 39,
    name: "M.Roshni Princy",
    role: "Core member",
    domain: " Web Development",
    linkedin:
      "https://www.linkedin.com/in/m-roshni-princy-ba517a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/M-Roshni-Princy",
    email: "roshni1305princy@gmail.com",
    bio: "#Roshni..Coding the future, one pixel at a time!",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/roshni.jpg",
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
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/aditya.JPG",
  },
  {
    id: 41,
    name: "Rajiv dey",
    role: "core member",
    domain: "CSE",
    linkedin: "https://www.linkedin.com/in/rajiv-dey-6b4033307",
    github: "https://github.com/rajivdey2",
    email: "rajiv.dey.cse.2024@nist.edu",
    bio: "#",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/Rajiv%20Dey.JPG",
  },
  {
    id: 42,
    name: "Yagyashini Bhagat",
    role: "Core member",
    domain: "Cybersecurity",
    linkedin: "www.linkedin.com/in/yagyashini-bhagat-18151a332 ",
    github: "https://github.com/YagyashiniBhagat",
    email: "bhagatyagyashini@gmail.com",
    bio: "#",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/yagya.PNG",
  },
  {
    id: 43,
    name: "Rishav Kumar Singh",
    role: "Core member",
    domain: "Web Development",
    linkedin: "https://www.linkedin.com/in/rishav-kumar-singh-81a69433b ",
    github: "https://github.com/Anant205",
    email: "singhrishav2050@gmail.com",
    bio: "#",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/RISHAV%20SINGH.jpg",
  },
];

const advisors = [
  {
    id: 1,
    name: "Swetanjali Maharana",
    role: "Faculty Advisor",
    currentPosition: "Assistant Prof.",
    image:
      "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/swetanjali.webp",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Bandhan Panda",
    role: "Faculty Advisor",
    currentPosition: "Assistant Prof.",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/bandhan.webp",
    linkedin: "#",
  },
];

const alumni = [
  {
    id: 1,
    name: "Rahul Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/rahul.webp",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-4878a61ab/",
  },
  {
    id: 2,
    name: "Abhinav",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/abhinav.png",
    linkedin: "https://www.linkedin.com/in/abhinav-sde/",
  },
  {
    id: 3,
    name: "Gourav",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/gourav.webp",
    linkedin: "https://www.linkedin.com/in/bgourav2287/",
  },
  {
    id: 4,
    name: "Asutosh",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/ashutosh.webp",
    linkedin: "https://www.linkedin.com/in/asutosh-panigrahi/",
  },
  {
    id: 5,
    name: "Anwesh",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/anwesh.webp",
    linkedin: "https://www.linkedin.com/in/anwesh-mohanty-03426a240/",
  },
  {
    id: 6,
    name: "Soumik bera",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/soumik.webp",
    linkedin: "linkedin.com/in/soumik-bera-a42723238",
  },
  {
    id: 7,
    name: "Bishal",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/bishal.webp",
    linkedin: "https://www.linkedin.com/in/bishal-kumar-saw-35b918257/",
  },
  {
    id: 8,
    name: "Akshat",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/akshat.webp",
    linkedin: "https://www.linkedin.com/in/akshat-anand-7ba987249/",
  },
  {
    id: 9,
    name: "Mayank",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/mayank.webp",
    linkedin: "https://www.linkedin.com/in/mayank-raj-a82446258/",
  },
  {
    id: 10,
    name: "Naveen",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/naveen.webp",
    linkedin: "#",
  },
  {
    id: 11,
    name: "Ashutosh Biswal",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/ashutoshbiswal.webp",
    linkedin: "https://www.linkedin.com/in/ashutosh-biswal-41328a174/",
  },
  {
    id: 12,
    name: "Adil Zamal",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/adil.webp",
    linkedin: "https://www.linkedin.com/in/adil-zamal-40b5aa155/",
  },
  {
    id: 13,
    name: "Rishav Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/RishavKumar.webp",
    linkedin: "https://www.linkedin.com/in/rishav-kumar-075ba517b/",
  },
  {
    id: 14,
    name: "Asish Patnaik",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/asishpatnaik.webp",
    linkedin: "https://www.linkedin.com/in/asish-patnaik-3917a7193/",
  },
  {
    id: 15,
    name: "Aryan Asgar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/aryan.webp",
    linkedin: "https://www.linkedin.com/in/aryan-asgar-840825106/",
  },
  {
    id: 16,
    name: "K Nandini Dora",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/nandini.webp",
    linkedin: "https://www.linkedin.com/in/knandinidora/",
  },
  {
    id: 17,
    name: "Kumar Nikhil Singh",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/nikhil.webp",
    linkedin: "https://www.linkedin.com/in/kumar-nikhil-b10024194/",
  },
  {
    id: 18,
    name: "Ritik Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/ritik.webp",
    linkedin: "https://www.linkedin.com/in/ritik126/",
  },
  {
    id: 19,
    name: "Sanat Dash",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sanat.webp",
    linkedin: "https://www.linkedin.com/in/sanat-dash-aa5876193/",
  },
  {
    id: 20,
    name: "Chiranjeeb Nayak",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/chiranjeeb.webp",
    linkedin: "https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/",
  },
  {
    id: 21,
    name: "Sushovan Paul",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sushovan.webp",
    linkedin: "https://www.linkedin.com/in/sushovan07/",
  },
  {
    id: 22,
    name: "Sunny Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sunny.webp",
    linkedin: "https://www.linkedin.com/in/sunny52525/",
  },
  {
    id: 23,
    name: "ASHU SHARMA",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/ashu.webp",
    linkedin: "https://www.linkedin.com/in/a-shu/",
  },
  {
    id: 24,
    name: "Akarsh Agrawal",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/akarsh.webp",
    linkedin: "https://www.linkedin.com/in/akarshagrawal09/",
  },
  {
    id: 25,
    name: "Dipti Mishra",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/deepti.webp",
    linkedin: "https://www.linkedin.com/in/dipti-mishra-724928202/",
  },
  {
    id: 26,
    name: "Hritvik Ranjan",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/hritvik.webp",
    linkedin: "https://www.linkedin.com/in/hritvik-ranjan-b290a71a9/",
  },
  {
    id: 27,
    name: "Laxmi Naryann",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/narayan.webp",
    linkedin: "linkedin.com/in/naryann/",
  },
  {
    id: 28,
    name: "Rupesh Raj Tripathy",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/rupesh.webp",
    linkedin: "https://www.linkedin.com/in/rupesh-raj-tripathy-86497b1ab/",
  },
  {
    id: 29,
    name: "Shradha Kyal",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sradha.webp",
    linkedin: "https://www.linkedin.com/in/shradha-kyal-a268331b1/",
  },
  {
    id: 30,
    name: "Sonali Sahu",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sonali.webp",
    linkedin: "https://www.linkedin.com/in/sonali-sahu-/",
  },
  {
    id: 31,
    name: "Niharika Kumari",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/Niharika.webp",
    linkedin: "https://www.linkedin.com/in/niharika-kumari-23b3a6213/",
  },
  {
    id: 32,
    name: "Suraj kumar Sahu",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/suraj.webp",
    linkedin: "https://www.linkedin.com/in/suraj-kumar-sahu-7348231aa/",
  },
  {
    id: 33,
    name: "Sarbajit Mohanty",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sarbajit.webp",
    linkedin: "https://www.linkedin.com/in/sarbajitmohanty/",
  },
  {
    id: 34,
    name: "B SANJEEV REDDY",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sanjeev.webp",
    linkedin: "linkedin.com/in/sanjeev-sde",
  },
  {
    id: 35,
    name: "Pabitra Ranjan Rout",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/Pabitra.webp",
    linkedin: "https://www.linkedin.com/in/pabitra-ranjan-rout/",
  },
  {
    id: 36,
    name: "Vibhav",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/vibhav.webp",
    linkedin: "https://myportfollio-b219a.web.app/",
  },
  {
    id: 37,
    name: "Varsha Beeraka",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/varsha.webp",
    linkedin: "https://www.linkedin.com/in/varsha-beeraka-951b19202/",
  },
  {
    id: 38,
    name: "Ch Biswamohan Patra",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/Biswabhiya.webp",
    linkedin: "linkedin.com/in/chbiswamohanpatra",
  },
  {
    id: 39,
    name: "MD Faizan Alam",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/faizanbhiya.webp",
    linkedin: "linkedin.com/in/md-faizan-alam-35374922a",
  },
  {
    id: 40,
    name: "Kishlay Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/kishlaybhiya.webp",
    linkedin: "https://www.linkedin.com/in/kishlaykumar-22/",
  },
  {
    id: 41,
    name: "Richa",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/richadi.webp",
    linkedin: "https://www.linkedin.com/in/richa-75826322b/",
  },
  {
    id: 42,
    name: "Ankit Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/Ankitbhiya.webp",
    linkedin: "https://www.linkedin.com/in/ankitkumar2454/",
  },
  {
    id: 43,
    name: "Srikant Mahanty",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/srikant.webp",
    linkedin: "https://www.linkedin.com/in/srikant-mahanty-a9329322b/",
  },
  {
    id: 44,
    name: "Sanket Kumar",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/sanket.webp",
    linkedin: "https://www.linkedin.com/in/sanket-kumar-48ba23162/",
  },
  {
    id: 45,
    name: "samrat singh",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/samrat.webp",
    linkedin: "https://www.linkedin.com/in/samrat-singh-18941a22b/",
  },
  {
    id: 46,
    name: "Rupa Mohanty",
    image: "https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/alumni/rupa.webp",
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
      className="rounded-xl border bg-card p-4 shadow-lg will-change-transform shadow-blue-200"
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
      <p className="text-sm text-muted-foreground">{member.currentPosition}</p>
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
      <div className="relative w-full aspect-[4.5/4] rounded-lg overflow-hidden mb-4">
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
      <p className="text-sm text-muted-foreground">{member.domain}</p>
      <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
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
      <div className="relative aspect-[4.5/4] w-full rounded-lg overflow-hidden mb-4 group">
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
    <div className="min-h-screen bg-background text-foreground py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-blue-400">Team</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
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
                : "bg-secondary text-secondary-foreground hover:bg-blue-500/20"
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
