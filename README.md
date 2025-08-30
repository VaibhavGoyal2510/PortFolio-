# Portfolio Website 

## Vaibhav Goyal - MERN Portfolio Website
[Link To Website](https://portfolio-9grk.onrender.com/)
A Full Stack Developer portfolio built using the MERN stack with an aesthetic dark mode, peaceful animations, and a modern UI.
Showcases my skills, projects, and experience while providing a contact form that directly connects to the backend.\
Not Fully Responsive, Will Work on it\
But Works Correctly for desktop\

## Wireframe of the site

```
mern-portfolio/
│
├── backend/                 # Backend (Node.js + Express + MongoDB)
│   ├── server.js             # Main server file
│   ├── routes/               # API route definitions
│   │   ├── projects.js
│   │   └── contact.js
│   ├── models/               # Mongoose schemas
│   │   ├── Project.js
│   │   └── Message.js
│   ├── controllers/          # Route handlers
│   │   ├── projectController.js
│   │   └── contactController.js
│   └── config/
│       └── db.js              # MongoDB connection setup
│
├── frontend/                 # Frontend (React)
│   ├── public/               # Static assets
│   └── src/                  # React components & pages
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── Contact.jsx
│       │   └── Footer.jsx
│       ├── pages/
│       │   └── Home.jsx
│       ├── App.jsx
│       ├── index.js
│       └── styles/
│           └── global.css
│
├── .gitignore
├── package.json
└── README.md
```

## Tech Stack
Frontend: React, Tailwind CSS, Framer Motion\
Backend: Node.js, Express.js\
Database: MongoDB Atlas\
Other Tools: Nodemailer, Git/GitHub, Vercel, Render

## Features
Smooth Animations using Framer Motion\
Dynamic Projects Section fetched from backend API\
Contact Form integrated with Nodemailer + MongoDB storage\
