
export const mySocials = [
  {
    name: "Mail",
    href: "mailto:kunal7777xyz@gmail.com",
    icon: "/assets/logos/mailpng.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kunal-sharma-b3942b25b/",
    icon: "/assets/logos/linkedin.webp",
  },

];

export const experiences = [
{
  title: "Team Leader – Smart India Hackathon 2024",
  job: "Crop Disease Prediction & Prevention System",
  date: "Aug - Nov 2024",
  contents: [
    "✅Led a 6-member team to design and implement an AI/ML-based solution for crop disease detection and prevention.",
    "✅Developed a CNN model for classifying plant leaf diseases with high accuracy.",
    "✅Integrated recommendation system to suggest remedies and preventive measures in regional languages.",
    "✅Designed scalable back-end APIs and cloud deployment for farmer accessibility.",
    "✅Coordinated project workflow, task delegation, and final presentation to jury panel.",
  ],
},
  {
    title: "Back-End Developer",
    job: "SPIRO Education Pvt. Ltd.",
    date: "March-Sept 2025",
     contents: [
    "✅Developed and maintained scalable RESTful APIs for a platform serving users.",
    "✅Designed and optimized database schemas in MongoDB.",
    "✅Implemented secure authentication and role-based authorization with JWT.",
    "✅Built payment gateway integration (Razorpay) purchases.",
    "✅Enabled video streaming with CDN integration (Cloudflare) to ensure smooth and secure content delivery.",
  ],
  },
  {
    title: "Freelance Developer",
    job: "Open Source",
    date: "2025-Present",
    contents: [
      "✅Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Aarav",
    username: "@aarav",
    body: "Very useful and easy to use. I really liked it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "Great experience, everything works smoothly.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "Simple and effective. Helped me a lot.",
    img: "https://robohash.org/john",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "One of the best platforms I’ve used. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "Really good work, everything is well made.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "Exceeded my expectations. Very helpful.",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "Loved the experience. Totally worth it.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Kavya",
    username: "@kavya",
    body: "I’m glad I found this. It made things so easy.",
    img: "https://robohash.org/eve",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "Crop Disease Prediction and Preservation",
    description: "AI-powered crop health monitoring",
    subDescription:
      ["A machine learning-based system that detects crop diseases from leaf images using CNNs. It provides farmers with early detection, prevention tips, and preservation techniques to reduce crop losses and improve yield."],
    href: "",
    logo: "",
    image: "/assets/projects/crop.jpg",
      tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { id: 3, name: "Flask", path: "/assets/logos/flask.png" },
      { id: 4, name: "CNN", path: "/assets/logos/cnn.png" },
    ],
  },
    {
    id: 2,
    title: "E-Learning Platform",
    description: "Interactive course platform",
    subDescription:
      ["A web-based platform for hosting and managing online courses. Features include course purchases, secure payments, cart management, watch history, responsive UI, and video storage with scalability support."],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
      tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "Razorpay", path: "/assets/logos/pay.png" },
      { id: 5, name: "Cloudinary", path: "/assets/cloud.png" },
    ],
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "Conversational assistant",
    subDescription:
      ["An AI-driven chatbot designed to provide intelligent responses and support. It integrates NLP for understanding queries, offers contextual answers, and can be deployed for customer support, learning platforms, or personal assistance."],
    href: "",
    logo: "",
    image: "/assets/projects/ai.jpg",
      tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "NLP", path: "/assets/logos/nlp.png" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Dialogflow", },
    ],
  },
  {
    id: 4,
    title: "Employee Management System",
    description: "Company workforce management",
    subDescription:
      ["A system to manage employee records, roles, and performance. Includes features like authentication, payroll tracking, leave management, and an admin dashboard for HR operations."],
    href: "",
    logo: "",
      image: "/assets/projects/ems.png",
      tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 3, name: "RESTful API's", path: "/assets/logos/api.png" },
      { id: 4, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
    {
    id: 5,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
]
