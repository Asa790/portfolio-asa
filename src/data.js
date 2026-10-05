export const portfolioData = {
  personal: {
    name: "KHALISA KASIH REDWINA",
    preferredName: "Khalisa",
    handle: "Asa790",
    title: "SOFTWARE ENGINEER & WEB DEVELOPER",
    subtitle: "AI/ML Integration Enthusiast • UI/UX & Creative Tech",
    location: "Bogor / Bekasi, Indonesia",
    email: "khalisa.k.redwina@gmail.com",
    phone: "+62 811-1160-216",
    linkedin: "https://www.linkedin.com/in/khalisa-kasih-redwina-41073a32b",
    github: "https://github.com/Asa790",
    bio: "Computer Science - Software Engineering Undergraduate at BINUS University Bekasi. Focused on software development, interactive web applications, and artificial intelligence/machine learning integrations. Proven leadership and teamwork honed across university student organization initiatives (HIMTI Bekasi).",
    stats: [
      { label: "University", value: "BINUS" },
      { label: "Major", value: "Computer Science" },
      { label: "GitHub", value: "@Asa790" }
    ]
  },

  skills: {
    hardSkills: [
      { name: "C", icon: "c", category: "Programming Languages" },
      { name: "Python", icon: "python", category: "Programming Languages" },
      { name: "Java", icon: "java", category: "Programming Languages" },
      { name: "JavaScript", icon: "javascript", category: "Programming Languages" },
      { name: "TypeScript", icon: "typescript", category: "Programming Languages" },
      { name: "React", icon: "react", category: "Web & Frontend" },
      { name: "HTML5 / CSS3", icon: "html5", category: "Web & Frontend" },
      { name: "FastAPI", icon: "fastapi", category: "Backend & API" },
      { name: "Postman", icon: "postman", category: "Backend & API" },
      { name: "SQLite", icon: "sqlite", category: "Database & Backend" },
      { name: "XAMPP", icon: "xampp", category: "Database & Backend" },
      { name: "PyTorch", icon: "pytorch", category: "AI & Machine Learning" },
      { name: "Hugging Face", icon: "huggingface", category: "AI & Machine Learning" },
      { name: "Scikit-Learn", icon: "scikitlearn", category: "AI & Machine Learning" },
      { name: "Streamlit", icon: "streamlit", category: "AI & Machine Learning" },
      { name: "Docker", icon: "docker", category: "DevOps & Tools" },
      { name: "Git / GitHub", icon: "git", category: "DevOps & Tools" },
      { name: "VS Code", icon: "vscode", category: "Development Environments" },
      { name: "PyCharm", icon: "pycharm", category: "Development Environments" },
      { name: "Eclipse", icon: "eclipse", category: "Development Environments" },
      { name: "Dev-C++", icon: "devc", category: "Development Environments" },
      { name: "Cisco Packet Tracer", icon: "cisco", category: "Networking & Infrastructure" },
      { name: "Figma", icon: "figma", category: "UI/UX & Design" }
    ],
    softSkills: [
      { 
        name: "Bilingual Communication", 
        badge: "Languages",
        desc: "Fluent English (Professional working proficiency) & Indonesian (Native), articulate in technical documentation, bilingual stakeholder meetings, and cross-cultural engineering teams." 
      },
      { 
        name: "Organizational Leadership", 
        badge: "Leadership",
        desc: "Proven track record as Manager of Human Resources (HIMTI 2026/2027) & Project Leader (Ketua Acara), directing multidisciplinary student teams and managing milestone roadmaps." 
      },
      { 
        name: "Public Speaking & Pitching", 
        badge: "Public Speaking",
        desc: "Experienced stage speaker and event emcee/moderator; pitched corporate sponsorship proposals to institutions like Krom Bank and hosted university gala orientations." 
      },
      { 
        name: "Interpersonal & Talent Relations", 
        badge: "HR & Coordination",
        desc: "Screened and interviewed incoming applicants (Coordinator Interviewer), resolved internal team friction, and aligned individual talents with appropriate divisional mandates." 
      }
    ]
  },

  projects: [
    {
      id: "skincare-recommendation-engine",
      title: "Skincare Recommendation Engine",
      category: "Machine Learning & NLP",
      description: "Finding your skincare soulmate through data! A machine learning recommendation engine that matches product ingredients using TF-IDF vectorization and cosine similarity, wrapped in an interactive Streamlit prototype.",
      tags: ["Python", "Machine Learning", "TF-IDF", "Streamlit"],
      github: "https://github.com/Asa790/skincare-recommendation-engine",
      demo: "https://github.com/Asa790/skincare-recommendation-engine",
      highlights: ["TF-IDF ingredient vectorization", "Cosine similarity product matching", "Custom Streamlit web interface"],
      featured: true
    },
    {
      id: "ctgan-prototype",
      title: "CTGAN Tabular Data Synthesizer",
      category: "Generative AI / Tabular ML",
      description: "An interactive Streamlit web application for generating synthetic tabular data using CTGAN with built-in SDV quality evaluations, distribution metrics, and comparison charts.",
      tags: ["Python", "CTGAN", "Synthetic Data", "Streamlit"],
      github: "https://github.com/Asa790/ctgan-prototype",
      demo: "https://github.com/Asa790/ctgan-prototype",
      highlights: ["Conditional GAN tabular generation", "SDV evaluation score assessment", "Interactive distribution comparison charts"],
      featured: true
    },
    {
      id: "envision",
      title: "eNVision Eyewear Brand Experience",
      category: "Interactive Web & HCI",
      description: "A Human-Computer Interaction (HCI) web project featuring eNVision, a contemporary eyewear brand with responsive UI design, modular CSS styling, and client-side form validation.",
      tags: ["HTML/CSS", "JavaScript", "HCI", "Responsive UI"],
      github: "https://github.com/Asa790/eNVision",
      demo: "https://github.com/Asa790/eNVision",
      highlights: ["Modern luxury eyewear brand UI", "Modular CSS architecture", "Client-side interactive form validation"],
      images: [
        "/projects/envision-preview-1.png",
        "/projects/envision-preview-2.png"
      ],
      featured: true
    },
    {
      id: "overwrite-app",
      title: "Overwrite 💖 Memory Transformation App",
      category: "Web Application / Creative",
      description: "A lightweight web app for recording, transforming, and releasing memories. Built with an interactive glassmorphic UI that allows users to express thoughts, seed good memories with photos, and store data locally in SQLite.",
      tags: ["HTML/CSS", "JavaScript", "SQLite", "Glassmorphism"],
      github: "https://github.com/Asa790/overwrite-app",
      demo: "https://github.com/Asa790/overwrite-app",
      highlights: ["Glassmorphism aesthetic UI", "Local SQLite database persistence", "Interactive emotional memory releasing flow"],
      featured: true
    },
    {
      id: "fuelwise",
      title: "FuelWise Eco-Travel Assistant",
      category: "Mobile Web & Travel Tech",
      description: "A smart travel companion application to track monthly fuel expenditure, calculate trip fuel consumption, analyze vehicle efficiency (e.g. KIA Sonet), and route with real-time map waypoints.",
      tags: ["TypeScript", "Mobile Web", "Leaflet Maps", "Fuel Analytics"],
      github: "https://github.com/Asa790/FuelWise",
      demo: "https://fuelwise.anjas.id",
      highlights: ["Real-time trip estimation (Distance, Fuel, Cost)", "Weekly expenditure statistics & vehicle breakdown", "Interactive map route confirmation with Leaflet"],
      images: [
        "/projects/fuelwise-preview-1.png",
        "/projects/fuelwise-preview-2.png",
        "/projects/fuelwise-preview-3.png"
      ],
      featured: true
    },
    {
      id: "spam-detection-ml",
      title: "Spam Detection ML Classifier",
      category: "Machine Learning / NLP",
      description: "A machine learning classification pipeline developed to detect spam and fraudulent communications using text preprocessing and classification algorithms.",
      tags: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
      github: "https://github.com/Asa790/Spam-Detection-ml",
      demo: "https://github.com/Asa790/Spam-Detection-ml",
      highlights: ["Text feature extraction", "Supervised classification model", "High precision spam filtering"],
      featured: false
    }
  ],

  experience: [
    {
      period: "Apr 2026 - Present",
      role: "Manager of Human Resource Department",
      organization: "HIMTI BINUS University Bekasi (HIMTI 2026/2027)",
      description: "Leadership position in HIMTI BINUS managing member development, organization data, and overarching activity supervision.",
      bullets: [
        "Curate and maintain HIMTI BINUS membership database and divisional records.",
        "Supervise and coordinate organizational events and committee workflows.",
        "Assist members with internal inquiries and organizational conflict resolution.",
        "Serve as key decision-maker in evaluating candidates and assigning them to appropriate divisions."
      ],
      tag: "Leadership & HR",
      photos: [
        {
          url: "/hr-manager-bekasi.png",
          caption: "Manager Human Resource Dept. Bekasi • HIMTI 2026/2027"
        }
      ]
    },
    {
      period: "Jun 2026",
      role: "Staff of Registration & Fundraising Division",
      organization: "LDKCP HIMTI BINUS 2026",
      description: "Leadership development and member candidate training camp for HIMTI BINUS University ('Enter The Game, Lead The Journey').",
      bullets: [
        "Managed candidate registration pipelines and applicant verification data.",
        "Led creative entrepreneurial fundraising initiatives to finance event operational needs."
      ],
      tag: "Event Operations",
      certificates: [
        {
          title: "Certificate of Appreciation - Staff of Registration & Fundraising Division",
          image: "/ldkcp-2026-certif.png"
        }
      ],
      photos: []
    },
    {
      period: "Nov 2025 - Dec 2026",
      role: "Coordinator of Disciplinary Division",
      organization: "HILET HIMTI BINUS 2026",
      description: "Orientation program for prospective members of HIMTI BINUS University ('Interstellar Leadership Mission').",
      bullets: [
        "Supervised adherence, attendance, and conduct of incoming member candidates.",
        "Conducted comprehensive performance assessments and candidate evaluations."
      ],
      tag: "Evaluation & Discipline",
      certificates: [
        {
          title: "E-Certificate - Coordinator of Disciplinary Division",
          image: "/hilet-2026-certif.png"
        }
      ],
      photos: []
    },
    {
      period: "Apr 2025 - Nov 2025",
      role: "Project Leader / Ketua Acara",
      organization: "Company Visit HIMTI Bekasi 2025 (Krom Bank)",
      description: "Spearheaded the official corporate company visit program to Krom Bank.",
      bullets: [
        "Authored and presented event proposals and managed formal contractual agreements.",
        "Served as direct liaison and coordinator with Krom Bank corporate representatives.",
        "Directed a cross-functional committee of 10 members overseeing fundraising, graphic branding, and schedule flow."
      ],
      tag: "Project Management",
      photos: [
        {
          url: "/krom-visit-doc-1.jpg",
          caption: "Handover of Token of Appreciation to Krom Bank representative"
        },
        {
          url: "/krom-visit-doc-2.jpg",
          caption: "Leading speech & coordination session as Ketua Acara at Krom Bank"
        }
      ]
    },
    {
      period: "Sep 2025",
      role: "Visualization Division Member",
      organization: "Techno 2025 HIMTI BINUS (BRIN Thamrin Convention Center)",
      description: "Welcoming gala for freshers of the School of Computer Science 2025.",
      bullets: [
        "Curated stagecraft props and character wardrobe for theatrical performance.",
        "Coached and directed on-stage actors to deliver an engaging storyline."
      ],
      tag: "Creative Production",
      certificates: [
        { 
          title: "Certificate of Appreciation - Member of Visualization Division", 
          image: "/techno-2025-certif.png" 
        }
      ],
      photos: []
    },
    {
      period: "Nov 2025",
      role: "Interviewer Coordinator",
      organization: "HIMTI BINUS Interview 2025",
      description: "Recruitment screening and evaluation cycle for prospective organization members.",
      bullets: [
        "Conducted structured technical and interpersonal interviews with candidates.",
        "Formulated the interview master schedule and interviewer logistics.",
        "Analyzed candidate evaluation metrics to place applicants into fitting organizational divisions."
      ],
      tag: "Recruitment & Talent"
    },
    {
      period: "Mar 2025 - May 2026",
      role: "Content & Editing Team Specialist",
      organization: "HIMTI BINUS University Bekasi",
      description: "Specialized multimedia division generating visual assets for official social channels.",
      bullets: [
        "Designed promotional graphics, infographics, and typography for official social feeds.",
        "Produced and edited video content and reels for organizational campaigns."
      ],
      tag: "Multimedia & Design"
    },
    {
      period: "Mar 2025 - May 2026",
      role: "Publication & Media Activist",
      organization: "HIMTI BINUS University Bekasi",
      description: "Public relations commission driving external communications, brand reach, and partnerships.",
      bullets: [
        "Managed university organization social media footprint and engagement analytics.",
        "Established external partnerships, sponsor relations, and collaborative cross-campus initiatives."
      ],
      tag: "Public Relations"
    }
  ],

  education: {
    institution: "Universitas Bina Nusantara (BINUS) - Bekasi",
    degree: "Bachelor of Computer Science - Software Engineering",
    period: "Jul 2024 - Present",
    details: "Focus on Web Development, Software Engineering methodologies, and Machine Learning integration.",
    certifications: [
      {
        title: "Introduction to Cloud",
        issuer: "IBM & Cognitive Class",
        courseCode: "CC0101EN",
        date: "October 5, 2026",
        image: "/ibm-cloud-certif.png",
        credentialUrl: "https://courses.cognitiveclass.ai/certificates/1646075afd4f47389d5affde932123ae",
        description: "Certified by IBM Developer Skills Network on fundamental Cloud Computing concepts, deployment models, cloud architecture, and modern infrastructure services."
      }
    ]
  }
};
