
export type Project = {
  title: string;
  summary: string;
  stack: string[];
  image: string;
  demo: string;
  code: string;
};
export const site = {
  name: "Samira Hammouche",
  role: "Full Stack Software Engineer",
  url: "https://your-portfolio.vercel.app",
  email:"samirahammouche17@gmail.com",
  github: "https://github.com/samirahammouche",
  linkedin: "https://www.linkedin.com/in/samira-hammouche-74098838b",
  formspree: "https://formspree.io/f/YOUR_FORM_ID",
  resume: "/resume.pdf", // put your PDF in /public
  description:
    "Full-stack software engineer building modern, responsive applications with React, Next.js, Node.js, and TypeScript. Explore the projects I built during my Faran Digital Academy internship.",
  about: [
    "I'm a web engineering student who likes turning a Figma file into a fast, accessible interface that works on every screen size.",
    "During my internship at Faran Digital Academy (FDA) I built a responsive landing page, rebuilt it in Next.js with reusable components, and shipped a weather app that talks to a REST API.",
  ],
  facts: [
    ["Now", "Web Engineering Intern at FDA"],
    ["Studying", "Computer Science, 4th year"],
    ["Focus", "React, Next.js, accessible UI"],
  ],
};

export const projects = [
  {
    title: "Static Landing Page",
    summary:
      "A fully responsive SaaS landing page built with semantic HTML, CSS and Tailwind. It turns a Figma design into a layout that holds up on every breakpoint.",
    stack: ["HTML", "Tailwind CSS", "Figma"],
    image: "/projects/img4.png", 
    demo: "https://data-pilot-landing-page-smoky.vercel.app/",
    code: "https://github.com/samirahammouche/DataPilot-landing-page",
  },
  {
    title: "Next.js Port",
    summary:
      "The landing page rebuilt with the Next.js App Router and reusable components. Server components and optimized images cut duplicated markup and load time.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/img2.png", 
    demo: "https://fda-landing-page.vercel.app/",
    code: "https://github.com/samirahammouche/FDA-landing-page",
  },
    {
  title: "API Data Explorer",
  summary:
    "A data dashboard built with Next.js and the DummyJSON REST API. It fetches data asynchronously, filters it with a live search engine, and turns it into charts to show trends at a glance.",
  stack: ["Next.js", "REST API", "DummyJSON", "Charts"],
  image: "/projects/img3.png",
  demo: "https://fda-landing-page.vercel.app/explorer",
  code: "https://github.com/samirahammouche/FDA-landing-page/tree/main/app/explorer",
},
];
