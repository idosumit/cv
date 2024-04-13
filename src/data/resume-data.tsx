import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sumit Pokharel",
  initials: "SP",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo/",
  about:
    "Software Engineer",
  summary:
    "I am a business student turned software engineer. I am driven by a desire to contribute to society through Machine Learning and AI. I like doing random AI projects, uploading them to GitHub, and sharing my struggles and understandings here as well as on LinkedIn. I am skilled in Python and have used it to build my projects as well as during my internships.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQGanRW-cmpKwA/profile-displayphoto-shrink_400_400/0/1702404009797?e=1710374400&v=beta&t=bLyFf3ysIZm7wGFn0ACN-eaj2qxtoPdBzeA0aNJCctw",
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
      company: "Rakuten Group, Inc.",
      link: "https://global.rakuten.com/",
      badges: ["Onsite", "Full-time"],
      title: "Software Engineer",
      start: "Apr 2024",
      end: "Present",
      description: (
        <ul>
          <li> Currently undergoing on-the-job training as an Applications Engineer. </li>
          <li><strong>Skills:</strong> Java, Docker, Kubernetes, Jira, React, Node.js.</li>
        </ul>
        )
      },
    {
      company: "BEST PATH RESEARCH",
      link: "https://bestpathresearch.com/en/",
      badges: ["Onsite", "Internship"],
      title: "Machine Learning Intern",
      start: "Jul 2023",
      description: (
        <ul>
          <li>• Delivered a Python script to streamline the conversion of digital text into handwritten images from a directory with 1+ million images of handwritten characters, and OCR-based character recognition.</li>
          <li>• Advanced the development of an application to correct distortions in Japanese receipts by synthesizing a dataset of artificially altered images and training an advanced open-source model to rectify these distortions.</li>
          <li><strong>Skills:</strong> Python, NLP, Pattern Recognition, OCR, Computer Vision.</li>
        </ul>
        )
      },
    {
      company: "Mitsubishi Fuso Truck and Bus Corporation",
      link: "",
      badges: ["Remote", "Internship"],
      title: "Data Analytics Intern",
      start: "Feb 2023",
      end: "Jun 2023",
      description: (
        <ul>
          <li>• Leveraged Python and Excel to extract, clean, and analyze market prices from 5+ online parts traders' websites to support competitor price analysis.</li>
          <li>• Analyzed response data from over 600 employees on company-wide e-learning practices using Excel & PowerBI and presented findings and strategic recommendations to company executives, influencing executive strategies on learning platforms.</li>
          <li><strong>Skills:</strong> Python, Excel, PowerBI.</li>
        </ul>
        )
      },
  ],

  skills: [
    "Python",
    "Japanese (N2)",
    "Java",
    "Kubernetes",
    "Jira",
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
