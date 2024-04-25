import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sumit Pokharel",
  initials: "SP",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo/",
  about:
    "Software Engineer",
  summary:
    "A business student turned Software Engineer (currently a SWE at Rakuten). I am driven by a desire to contribute to society through Machine Learning and AI. As such, I am passionate about engaging in discussions regarding career transitions into the dynamic field of AI and breaking into the tech industry.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQGupcx4Zd7TFg/profile-displayphoto-shrink_400_400/0/1713016609526?e=1718236800&v=beta&t=CJXGd3cLULqvBu5MTqBY20vCCb01Ay84E1q5HQzP9tA",
  personalWebsiteUrl: "https://idosumit.com/",
  contact: {
    email: "sumit@idosumit.com",
    tel: "+81 070 9014 1742",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/idosumit",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sumit-pokharel/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sumit_ml",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ritsumeikan Asia Pacific University",
      degree: "Bachelor's Degree in Business Administration, CGPA 3.65",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Rakuten Group, Inc. ",
      link: "https://global.rakuten.com/",
      badges: ["Onsite", "Full-time"],
      title: "Software Engineer",
      start: "Apr 2024",
      end: "Present",
      description: (
        <ul>
          <li>Currently undergoing on-the-job training as an Applications Engineer.</li>
          <li><strong>Skills:</strong> JavaScript, TypeScript, React, Express.js, Docker, Kubernetes, Jira.</li>
        </ul>
        )
      },
    {
      company: "BEST PATH RESEARCH ",
      link: "https://bestpathresearch.com/en/",
      badges: ["Onsite", "Internship"],
      title: "Machine Learning Intern",
      start: "Jul 2023",
      end: "Jul 2023",
      description: (
        <ul>
          <li>• Delivered a Python script to streamline the conversion of digital text into handwritten images from a directory with 1+ million images of handwritten characters, and OCR-based character recognition.</li>
          <li>• Advanced the development of an application to correct distortions in Japanese receipts by synthesizing a dataset of artificially altered images and training an advanced open-source model to rectify these distortions.</li>
          <li><strong>Skills:</strong> Python, NLP, Pattern Recognition, OCR, Computer Vision.</li>
        </ul>
        )
      },
    {
      company: "Mitsubishi Fuso Truck and Bus Corporation ",
      link: "https://www.mitsubishi-fuso.com/en/",
      badges: ["Remote", "Internship"],
      title: "Data Analytics Intern",
      start: "Feb 2023",
      end: "Jun 2023",
      description: (
        <ul>
          <li>• Leveraged Python and Excel to extract, clean, and analyze market prices from 5+ online parts trader websites to support competitor price analysis.</li>
          <li>• Analyzed response data from over 600 employees on company-wide e-learning practices using Excel & PowerBI and presented findings and strategic recommendations to company executives, influencing executive strategies on learning platforms.</li>
          <li><strong>Skills:</strong> Python, Excel, PowerBI.</li>
        </ul>
        )
      },
  ],

  skills: [
    "Python",
    "Japanese (N2)",
    "C",
    "JavaScript",
    "Express.js",
    "React",
  ],

  projects: [
    {
      title: "idosumit.com",
      techStack: [
        "Personal Website",
        "Personal Branding",
      ],
      description: "My personal website to showcase my personal brand and projects. I also use it to write about my experiences and learnings.",
      link: {
        label: "idosumit.com",
        href: "https://idosumit.com/",
      },
    },
  ],
} as const;
