
// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

 import psitLogo from './assets/education_logo/psit_logo.png'
import gnmsLogo from './assets/education_logo/gnmslogo.jpeg';

// --- PROJECT SECTION LOGOS ---
import chatLogo from './assets/work_logo/chat_Logo.png';
import tripLogo from './assets/work_logo/trip_Logo.png';
import imagesercher from './assets/work_logo/image_search.png';
import githubdetLogo from './assets/work_logo/github_det.png';     
import taskremLogo from './assets/work_logo/task_rem.png';
import musicbotLogo from './assets/work_logo/chat_bot.jpeg';
import tictactoeLogo from './assets/work_logo/tictactoe.png';
import urlshortnerLogo from './assets/work_logo/url_shortner.jpeg';
import imageuploaderLogo from './assets/work_logo/image_uploader.webp';
import authenticationLogo from './assets/work_logo/auth.jpeg';



// --- EDUCATION DATA (Add this back, it was missing from your snippet) ---
export const education = [
  {
    id: 0,
    img: psitLogo,
    school: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
    date: "Expected - 2027",
    grade: "8.05 CGPA",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    desc: "Focusing on Full-Stack Development and AI subjects like DSA and DBMS."
  },
  {
    id: 1,
    img: gnmsLogo,
    school: "Guru Nanak Modern School (CBSE)",
    date: "2023",
    grade: "83%",
    degree: "Class 12th",
    desc: "Completed Senior Secondary education with a focus on Science."
  },{
    id: 2, 
    img: gnmsLogo,
    school: "Guru Nanak Modern School (CBSE)",
    date: "2021",
    grade: "95%", 
    degree: "Class 10th",
    desc: "Completed Secondary education with high academic performance."
  }
];

// --- PROJECTS DATA ---
export const projectData = [
  {
  id: 1,
  title: "Real-Time Messaging Platform",
  description: "A scalable full-stack real-time chat application built using React.js, Node.js, Socket.io, and MongoDB.",
  image: chatLogo,
  tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Express"],
  github: "https://github.com/anjaliyadav1709/chat-app",
  webapp: "full-stack-chat-app-dov7.onrender.com/ ",
  detailedPoints: [
    "Developed a full-stack real-time messaging platform using React.js, Node.js, Express.js, Socket.io, and MongoDB.",
    "Implemented JWT-based authentication and secure user management.",
    "Built RESTful APIs for messaging, user profiles, and chat management.",
    "Enabled instant messaging and online user status tracking with Socket.io.",
    "Optimized MongoDB operations for efficient message storage and retrieval.",
    "Designed a scalable and modular backend architecture for concurrent users."
  ]
},
{
  id: 2,
  title: "AI-Powered Intelligent Trip Planner",
  description: "An AI-driven travel planning application that generates personalized itineraries using Gemini AI and Firebase.",
  image: tripLogo,
  tags: ["React", "Gemini AI", "Firebase", "Tailwind CSS", "JavaScript"],
  github: "https://github.com/anjaliyadav1709/ai-trip-planner",
  webapp: "ai-trip-planner-two-inky.vercel.app/ ",
  detailedPoints: [
    "Developed an AI-powered trip planning application for personalized travel recommendations.",
    "Integrated Gemini AI to generate dynamic travel itineraries based on user preferences.",
    "Implemented Firebase Authentication for secure user login and access control.",
    "Utilized Firebase database services for efficient data storage and management.",
    "Built a responsive and user-friendly interface using modern frontend technologies.",
    "Optimized API interactions and application performance for a seamless user experience."
  ]
},
  {
    id: 3,
    title: "Task Management System",
    description: "A full-stack application developed using MongoDB, Express.js, React, and Node.js.",
    image: taskremLogo, // FIXED: Use the imported variable, not a string path
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/anjaliyadav1709",
    webapp: "#",
    detailedPoints: [
      "Developed a full-stack task management application using MERN.",
      "Implemented core features like CRUD operations for tasks.",
      "Integrated REST APIs for smooth task handling.",
      "Used JWT-based authentication for secure user login."
    ]
  },
  {
    id: 4,
    title: "Music Chatbot Recommender",
    description: "AI-based mood recommender using Python and NLTK.",
    image: musicbotLogo, // FIXED: Use the imported variable
    tags: ["Python", "NLTK", "AI"],
    github: "https://github.com/anjaliyadav1709",
    webapp: "#",
    detailedPoints: [
      "Implemented sentiment analysis to understand user mood.",
      "Integrated music recommendation API for real-time suggestions.",
      "Applied NLTK for natural language processing."
    ]
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description: "An interactive, web-based Tic Tac Toe game featuring smooth animations and a responsive design.",
    image: tictactoeLogo, 
    tags: ["React", "JavaScript", "CSS3", "Logic"],
    github: "https://github.com/anjaliyadav1709/TICTACTOE-PROJECT",
    webapp: "https://tictactoe-project-omega.vercel.app/",
    detailedPoints: [
      "Developed a fully functional Tic Tac Toe game with an intuitive user interface.",
      "Implemented game logic to detect win patterns and draw scenarios efficiently.",
      "Used React state management to track player turns and board updates in real-time.",
      "Designed with a mobile-first approach to ensure playability across all devices."
    ]
  },
  {
    id: 5,
    title: "Image Searcher App",
    description: "A dynamic image search application that fetches high-quality images using the Unsplash API.",
    image: imagesercher, 
    tags: ["React", "Unsplash API", "Axios", "Tailwind"],
    github: "https://github.com/anjaliyadav1709",
    webapp: "#",
    detailedPoints: [
      "Integrated the Unsplash API to provide users with access to millions of high-resolution photos.",
      "Implemented an infinite scroll or 'Load More' feature for seamless image browsing.",
      "Built a search functionality with real-time filtering based on user queries.",
      "Optimized image loading times and layout using modern CSS Grid and Flexbox techniques."
    ]
  },
  {
  id: 6,
  title: "Full Stack Authentication With File Upload",
  description:
    "A secure full-stack authentication system with JWT, role-based access control, and file upload functionality.",
  image: authenticationLogo, // add your image inside public/images
  tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
  detailedPoints: [
    "Implemented user registration and login using JWT authentication",
    "Protected routes using custom authentication middleware",
    "Integrated file upload functionality using Multer",
    "Stored user data securely in MongoDB",
    "Deployed backend on Render"
  ],
  github:
    "https://github.com/anjaliyadav1709/-Full-Stack-Authentication-With-File-Upload-",
  webapp: "https://full-stack-authentication-with-file-jp9k.onrender.com//"
},

{
  id: 7,
  title: "Image Uploader",
  description:
    "A backend-powered image uploading application that allows users to upload and manage images securely.",
  image: imageuploaderLogo,
  tags: ["Node.js", "Express", "MongoDB", "Multer", "Cloud Storage"],
  detailedPoints: [
    "Implemented secure image upload using Multer middleware",
    "Stored image metadata in MongoDB",
    "Validated file types and size before upload",
    "Created RESTful APIs for uploading and retrieving images",
    "Handled error responses efficiently"
  ],
  github:
    "https://github.com/anjaliyadav1709/image_uploader",
  webapp: "https://image-uploader-8hvu.onrender.com"
},

{
  id: 8,
  title: "URL Shortener",
  description:
    "A URL shortening service that converts long URLs into short and shareable links.",
  image: urlshortnerLogo,
  tags: ["Node.js", "Express", "MongoDB", "NanoID", "REST API"],
  detailedPoints: [
    "Generated short unique URLs using NanoID",
    "Stored original and short URLs in MongoDB",
    "Implemented redirection logic for shortened links",
    "Built REST APIs for creating and retrieving short URLs",
    "Handled invalid and expired links"
  ],
  github:
    "https://github.com/anjaliyadav1709/url_shortner",
  webapp: "https://url-shortner-fdjb.onrender.com/"
}
]; // FIXED: Added the missing closing bracket and semicolon  // For Tic Tac Toe
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  

// src/constants/index.js

