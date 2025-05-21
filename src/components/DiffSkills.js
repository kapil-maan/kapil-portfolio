import React from "react";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGit, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiFirebase, SiKubernetes, SiJenkins } from "react-icons/si";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-4 sm:text-xl xs:text-lg">{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center sm:gap-3 xs:gap-2">
        {skills.map(({ name, Icon, color }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="text-4xl" style={{ color }} /> {/* Apply color here */}
            <span className="mt-2 text-sm font-medium text-dark dark:text-light">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DiffSkills = () => {
  const frontendSkills = [
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" }, // Yellow
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" }, // Blue
    { name: "ReactJS", Icon: FaReact, color: "#61DAFB" }, // Cyan
    { name: "NextJS", Icon: SiNextdotjs, color: "#000000" }, // Black
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" }, // Teal
    { name: "Redux", Icon: SiRedux, color: "#764ABC" }, // Purple
  ];

  const backendSkills = [
    { name: "NodeJS", Icon: FaNodeJs, color: "#339933" }, // Green
    { name: "ExpressJS", Icon: SiExpress, color: "#000000" }, // Black
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" }, // Green
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" }, // Blue
    { name: "Prisma", Icon: SiPrisma, color: "#0C344B" }, // Dark Blue
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" }, // Yellow
  ];

  const devOpsSkills = [
    { name: "Docker", Icon: FaDocker, color: "#2496ED" }, // Blue
    { name: "AWS", Icon: FaAws, color: "#FF9900" }, // Orange
    { name: "Git", Icon: FaGit, color: "#F05032" }, // Red
    { name: "GitHub", Icon: FaGithub, color: "#181717" }, // Black
    { name: "Jenkins", Icon: SiJenkins, color: "#D24939" }, // Red
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" }, // Blue
  ];

  return (
    <div className="flex flex-col items-center gap-8 mt-12 px-6 sm:px-4 xs:px-2 ">
      
      <SkillCategory title="Frontend" skills={frontendSkills} />
      <SkillCategory title="Backend" skills={backendSkills} />
      <SkillCategory title="DevOps" skills={devOpsSkills} />
    </div>
  );
};

export default DiffSkills;