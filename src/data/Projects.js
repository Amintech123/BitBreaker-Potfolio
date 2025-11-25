import passwordStrengthChecker from "../assets/password strength.PNG";
import cybersecurityDashboard from "../assets/cyberdash.PNG";
import portfolioimage1 from "../assets/potfolio.PNG";
import ipchecker from "../assets/ip checker.PNG";
const projects = [
  {
    id: 1,
    title: "Ip Checker",
    image: ipchecker,
    description:
      "An IP Checker tool that allow users to lookup information about an IP address including its location ISP and others details.",
    tech: ["HTML",  "Phyton", "Css"],
    link: "https://ip-checker-sooty.vercel.app/",
    github: "https://github.com/Amintech123/Ip-Checker.git",
  },
  {
    id: 2,
    title: "Password Strength Checker",
    image: passwordStrengthChecker,
    description:
      "A Password Strenght Checker System Built with React, Viteand Firestore for real-time updates.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://password-strength-checker-red-eight.vercel.app/",
    github: "https://github.com/Amintech123/Password-Strength-Checker.git",
  },
  {
    id: 3,
    title: "cybersecurity Dashboard",
    image: cybersecurityDashboard,
    description:
      "A Cybersecurity Dashboard that list some tools used in cybersecurity with details.",
    tech: ["React", "Lucide-icon", "Tailwind CSS", "Vite"],
    link: "https://cybersecurity-dashboard-c4lu.vercel.app/",
    github: "https://github.com/Amintech123/Cybersecurity-Dashboard.git",
  },
  // {
  //   id: 4,
  //   title: "Pentest Lab Demo",
  //   image: "/images/projects/pentest-lab.png",
  //   description:
  //     "A mini pentesting environment showcasing vulnerable and secure Node.js apps for ethical hacking exercises.",
  //   tech: ["Node.js", "Express", "Docker"],
  //   link: "https://github.com/Cyb3rflex/pentest-lab",
  //   github: "https://github.com/Cyb3rflex/pentest-lab",
  // },
  {
    id: 5,
    title: "BitBreaker Potfolio",
    image: portfolioimage1,
    description:
      "A cybersecurity Potfolio built with React, Vite and Tailwind CSS for responsive design .",
    tech: ["React", "TailwindCSS", "Vite"],
    link: "https://bit-breaker-potfolio-xl48.vercel.app/",
    github: "https://github.com/Amintech123/BitBreaker-Potfolio.git",
  },
];

export default projects;