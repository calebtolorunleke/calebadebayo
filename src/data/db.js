
import { img } from "framer-motion/client";
import skill1 from "../skillImages/skill1.png";
import skill2 from "../skillImages/skill2.png";
import skill3 from "../skillImages/skill3.png";

export const name = { firstname: "Tolorunleke", middlename: "CALEB", lastname: "ADEBAYO" }

export const aboutme = [{
    stack: "Full-Stack Developer"
}, {
    stack: "React Developer"
}, {
    stack: "Nodejs Backend Developer"
}, {
    stack: "Tech Instructor"
}, {
    stack: "REST & GraphQL APIs Expert"
}, {
    stack: "Technical Support Engineer"
}]

export const desc = {
    description: "I am a Versatile Full-Stack Web Developer and Technical Support Engineer with 6+ years of experience, including 4+ years in application support and infrastructure maintenance. Proficient in the MERN stack, building dynamic, SEO-optimized solutions. Adept in frontend/backend development, automation, and server-side troubleshooting. Skilled in tools like Tailwind CSS, Shadcn/ui, NestJS, Grafana, Dynatrace, and various, databases. Passionate about continuous learning, problem-solving, and delivering scalable user-focused applications."
}



// export const desc = {
//     description: "I am a versatile Full-Stack  Developer and Technical Support Engineer with over 6 years of experience in the tech industry, including 4+ years in application support, software troubleshooting, and infrastructure maintenance. He brings a unique blend of development expertise and problem-solving skills to deliver scalable, user-focused web applications and reliable technical support.Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), Caleb specializes in building dynamic and SEO-optimized solutions that align with business goals and user needs. He has hands-on experience with both frontend and backend development using tools like Tailwind CSS, Shadcn/ui, Material UI, NestJS, and Prisma. Caleb is well-versed in troubleshooting complex server-side issues, automating processes with JavaScript, Python, VBScript, and C#, and supporting systems across Linux and Windows environments. He is also experienced in working with monitoring and performance tools like Grafana, Dynatrace, and IT360, and databases such as Oracle, MySQL, PostgreSQL, and MongoDB. Whether maintaining infrastructure, debugging code, or building full-featured web applications, Caleb brings a detail-oriented mindset and a passion for continuous learning. He thrives in collaborative environments, solving problems with persistence and purpose."
// }



// db.js
export const Skilldb = [
    {
        stack: "Frontend",
        skills: [
            { name: "React.js", img: skill1 },
            { name: "Redux", img: skill2 },
            { name: "Vite", img: skill3 },
            { name: "Responsive Design", img: skill1 },
            { name: "REST API Integration", img: skill2 },
            { name: "Tailwind CSS", img: skill3 },
        ],
    },
    {
        stack: "Backend",
        skills: [
            { name: "Node.js", img: skill1 },
            { name: "Express.js", img: skill2 },
            { name: "RESTful APIs", img: skill3 },
            { name: "MongoDB", img: skill1 },
            { name: "MySQL", img: skill2 },
            { name: "JWT", img: skill3 },
            { name: "OAuth", img: skill1 },
        ],
    },
    {
        stack: "Languages & Markup",
        skills: [
            { name: "HTML5", img: skill1 },
            { name: "CSS3", img: skill2 },
            { name: "JavaScript (ES6+)", img: skill3 },
            { name: "TypeScript", img: skill1 },
            { name: "SQL", img: skill2 },
            { name: "Shell/Bash Scripting", img: skill3 },
        ],
    },
    {
        stack: "Application Support & DevOps",
        skills: [
            { name: "Dynatrace", img: skill1 },
            { name: "Grafana", img: skill2 },
            { name: "Splunk", img: skill3 },
            { name: "Postman", img: skill1 },
            { name: "Insomnia", img: skill2 },
        ],
    },
    {
        stack: "CI/CD & Automation",
        skills: [
            { name: "GitHub Actions", img: skill1 },
            { name: "Cron Jobs", img: skill2 },
            { name: "npm/yarn Scripts", img: skill3 },
        ],
    },
    {
        stack: "Operating Systems",
        skills: [
            { name: "Windows Server", img: skill1 },
            { name: "macOS", img: skill2 },
            { name: "Linux (Ubuntu, RHEL)", img: skill3 },
        ],
    },
    {
        stack: "Developer Tools & Platforms",
        skills: [
            { name: "Git", img: skill1 },
            { name: "VS Code", img: skill2 },
            { name: "Vercel / Netlify / Render", img: skill3 },
            { name: "Figma", img: skill1 },
            { name: "Trello / Jira", img: skill2 },
            { name: "Slack / Teams / Zoom", img: skill3 },
        ],
    },
];
