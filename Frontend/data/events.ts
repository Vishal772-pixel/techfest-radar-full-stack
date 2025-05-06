import type { EventType } from "@/types/event"

export const eventsData: EventType[] = [
  {
    id: "hackathon-2025",
    title: "TechNova Hackathon 2025",
    description:
      "Join us for a 36-hour coding marathon where you'll build innovative solutions to real-world problems. TechNova Hackathon brings together the brightest minds from across India to collaborate, code, and create.\n\nThis year's theme focuses on sustainable technology solutions that address environmental challenges. Participants will have access to mentors from leading tech companies, workshops on cutting-edge technologies, and the chance to win exciting prizes.\n\nWhether you're a seasoned developer or just starting your coding journey, TechNova welcomes participants of all skill levels. Form a team of up to 4 members or join individually and we'll help you find teammates.",
    image: "background.png?height=400&width=600",
    date: "2023-12-15",
    location: "Bangalore, Karnataka",
    college: "Indian Institute of Science (IISc)",
    type: "hackathon",
    price: 500,
    duration: 2,
    teamSize: "2-4 members",
    eligibility: [
      "Open to all college students across India",
      "Participants must be enrolled in an undergraduate or postgraduate program",
      "Both technical and non-technical students are welcome",
      "Prior coding experience is recommended but not mandatory",
    ],
    prizes: [
      {
        title: "First Prize",
        description: "The winning team will receive a cash prize and mentorship opportunities",
        value: "₹50,000",
      },
      {
        title: "Second Prize",
        description: "Runner-up team will receive cash prize and tech gadgets",
        value: "₹30,000",
      },
      {
        title: "Best Innovation",
        description: "Special prize for the most innovative solution",
        value: "₹20,000",
      },
    ],
    schedule: [
      {
        time: "Day 1, 9:00 AM",
        title: "Registration & Opening Ceremony",
        description: "Check-in, team formation, and kickoff presentation",
      },
      {
        time: "Day 1, 11:00 AM",
        title: "Hacking Begins",
        description: "Start building your projects",
      },
      {
        time: "Day 2, 3:00 PM",
        title: "Submission Deadline",
        description: "Final project submissions",
      },
      {
        time: "Day 2, 5:00 PM",
        title: "Presentations & Judging",
        description: "Teams present their projects to the judges",
      },
    ],
  },
  {
    id: "ai-workshop-2023",
    title: "AI & Machine Learning Workshop",
    description:
      "Dive deep into the world of Artificial Intelligence and Machine Learning in this intensive 1-day workshop. Learn from industry experts about the latest trends, tools, and techniques in AI.\n\nThis workshop is designed for beginners and intermediate learners who want to understand the fundamentals of AI and ML. You'll get hands-on experience with popular frameworks and libraries, and learn how to implement basic machine learning models.\n\nTopics covered include: Introduction to AI/ML, Python for Data Science, Neural Networks Basics, and Practical Applications of AI in Industry.",
    image: "/ai.png?height=400&width=600",
    date: "2023-11-25",
    location: "Delhi, NCR",
    college: "Indian Institute of Technology (IIT) Delhi",
    type: "workshop",
    price: 1200,
    duration: 1,
    eligibility: [
      "Open to students and professionals",
      "Basic programming knowledge required",
      "Participants should bring their own laptops",
      "No prior experience in AI/ML needed",
    ],
    prizes: [
      {
        title: "Certification",
        description: "All participants will receive a certificate of completion",
      },
      {
        title: "Resource Access",
        description: "Lifetime access to workshop materials and resources",
      },
    ],
    schedule: [
      {
        time: "9:30 AM - 10:30 AM",
        title: "Introduction to AI & ML",
        description: "Overview of key concepts and applications",
      },
      {
        time: "10:45 AM - 12:30 PM",
        title: "Python for Data Science",
        description: "Hands-on session with essential libraries",
      },
      {
        time: "1:30 PM - 3:30 PM",
        title: "Building Your First ML Model",
        description: "Step-by-step implementation of a basic model",
      },
      {
        time: "3:45 PM - 5:00 PM",
        title: "Advanced Topics & Q&A",
        description: "Discussion on advanced concepts and career opportunities",
      },
    ],
  },
  {
    id: "web3-conference",
    title: "Web3 & Blockchain Conference",
    description:
      "Explore the future of the internet at India's premier Web3 and Blockchain Conference. This 3-day event brings together thought leaders, developers, entrepreneurs, and enthusiasts to discuss the latest developments in decentralized technologies.\n\nAttendees will gain insights into blockchain fundamentals, cryptocurrency trends, NFTs, DeFi, and the metaverse. The conference features keynote speeches, panel discussions, networking sessions, and hands-on workshops.\n\nWhether you're a blockchain expert or just curious about Web3, this conference offers valuable knowledge and connections in this rapidly evolving field.",
    image: "/web3.png?height=400&width=600",
    date: "2024-01-20",
    location: "Mumbai, Maharashtra",
    college: "Mumbai University",
    type: "conference",
    price: 3500,
    duration: 3,
    eligibility: [
      "Open to all interested in blockchain and Web3",
      "Students, professionals, and entrepreneurs welcome",
      "No technical background required for general sessions",
      "Technical workshops may require basic coding knowledge",
    ],
    prizes: [
      {
        title: "Startup Pitch Competition",
        description: "Opportunity for blockchain startups to pitch and win funding",
        value: "₹5,00,000",
      },
      {
        title: "Networking Opportunities",
        description: "Connect with investors, founders, and industry leaders",
      },
    ],
    schedule: [
      {
        time: "Day 1, 10:00 AM",
        title: "Opening Keynote",
        description: "The Future of Web3 in India",
      },
      {
        time: "Day 1, 2:00 PM",
        title: "Panel Discussion",
        description: "Regulatory Challenges in Crypto",
      },
      {
        time: "Day 2, 11:00 AM",
        title: "Technical Workshops",
        description: "Smart Contract Development",
      },
      {
        time: "Day 3, 4:00 PM",
        title: "Closing Ceremony",
        description: "Awards and Future Roadmap",
      },
    ],
  },
  {
    id: "cybersecurity-hackathon",
    title: "CyberShield Security Hackathon",
    description:
      "Test your cybersecurity skills in this intensive 48-hour hackathon focused on identifying and solving real-world security challenges. CyberShield brings together ethical hackers, security enthusiasts, and IT professionals to collaborate on innovative security solutions.\n\nParticipants will tackle challenges in areas such as network security, application security, cryptography, and social engineering. The event includes workshops on the latest security tools and techniques, mentoring from industry experts, and exciting prizes for the top performers.",
    image: "/cybersecurity.png?height=400&width=600",
    date: "2023-12-08",
    location: "Hyderabad, Telangana",
    college: "International Institute of Information Technology (IIIT)",
    type: "hackathon",
    price: 750,
    duration: 2,
    teamSize: "1-3 members",
    eligibility: [
      "Open to college students and security professionals",
      "Basic knowledge of cybersecurity concepts required",
      "Participants must bring their own laptops",
      "Valid ID proof required for registration",
    ],
    prizes: [
      {
        title: "First Prize",
        description: "Cash prize and internship opportunities with leading security firms",
        value: "₹40,000",
      },
      {
        title: "Second Prize",
        description: "Cash prize and security certification vouchers",
        value: "₹25,000",
      },
      {
        title: "Best Defense Solution",
        description: "Special prize for the most effective security solution",
        value: "₹15,000",
      },
    ],
    schedule: [
      {
        time: "Day 1, 10:00 AM",
        title: "Registration & Kickoff",
        description: "Introduction to challenges and rules",
      },
      {
        time: "Day 1, 12:00 PM",
        title: "Hacking Begins",
        description: "Teams start working on security challenges",
      },
      {
        time: "Day 2, 12:00 PM",
        title: "Submission Deadline",
        description: "Final solutions must be submitted",
      },
      {
        time: "Day 2, 3:00 PM",
        title: "Presentations & Awards",
        description: "Teams present their solutions followed by awards ceremony",
      },
    ],
  },
  {
    id: "mobile-dev-workshop",
    title: "Mobile App Development Bootcamp",
    description:
      "Kickstart your journey into mobile app development with this comprehensive 2-day bootcamp. Learn to build native Android and iOS applications from scratch using the latest tools and frameworks.\n\nThis hands-on workshop covers everything from UI design principles to backend integration. Participants will build a fully functional mobile app by the end of the bootcamp and receive guidance on publishing to app stores.\n\nPerfect for beginners and intermediate developers looking to enhance their mobile development skills.",
    image: "/app.png?height=400&width=600",
    date: "2023-11-18",
    location: "Chennai, Tamil Nadu",
    college: "Anna University",
    type: "workshop",
    price: 1500,
    duration: 2,
    eligibility: [
      "Open to students and professionals",
      "Basic programming knowledge required",
      "Participants should bring laptops with development environment set up",
      "Prior experience with any programming language is beneficial",
    ],
    prizes: [
      {
        title: "Certification",
        description: "Professional certification of completion",
      },
      {
        title: "App Showcase",
        description: "Opportunity to showcase your app to industry professionals",
      },
    ],
    schedule: [
      {
        time: "Day 1, 9:00 AM",
        title: "Introduction to Mobile Development",
        description: "Overview of platforms, tools, and design principles",
      },
      {
        time: "Day 1, 1:00 PM",
        title: "Building UI Components",
        description: "Hands-on session on creating user interfaces",
      },
      {
        time: "Day 2, 9:00 AM",
        title: "Backend Integration",
        description: "Connecting your app to APIs and databases",
      },
      {
        time: "Day 2, 2:00 PM",
        title: "Deployment & Publishing",
        description: "Preparing your app for release and distribution",
      },
    ],
  },
  {
    id: "data-science-meetup",
    title: "Data Science Community Meetup",
    description:
      "Connect with fellow data enthusiasts at this informal community meetup focused on data science, analytics, and visualization. This event provides a platform for knowledge sharing, networking, and collaboration among data professionals and enthusiasts.\n\nThe meetup features lightning talks from community members, open discussions on trending topics, and a showcase of interesting data projects. Beginners and experts alike are welcome to participate and share their experiences.",
    image: "/data.png?height=400&width=600",
    date: "2023-11-10",
    location: "Pune, Maharashtra",
    college: "Pune Institute of Computer Technology",
    type: "meetup",
    price: 0,
    duration: 1,
    eligibility: [
      "Open to anyone interested in data science",
      "No technical prerequisites",
      "Students, professionals, and enthusiasts welcome",
      "Bring your ideas and questions to share",
    ],
    schedule: [
      {
        time: "6:00 PM",
        title: "Networking & Refreshments",
        description: "Meet and greet with fellow data enthusiasts",
      },
      {
        time: "6:30 PM",
        title: "Lightning Talks",
        description: "Short presentations on various data science topics",
      },
      {
        time: "7:30 PM",
        title: "Open Discussion",
        description: "Group discussion on current trends and challenges",
      },
      {
        time: "8:30 PM",
        title: "Wrap-up",
        description: "Closing remarks and future meetup plans",
      },
    ],
  },
]
