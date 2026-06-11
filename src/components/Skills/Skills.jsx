// src/components/Skills/Skills.jsx
import React from "react";
// Ensure your ../../constants file contains the categories: 
// "Programming Languages", "Web Technologies", "Database", and "Tools & Frameworks"
import { SkillsInfo } from "../../constants"; 
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills in Full-Stack development and AI 
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Grid for individual skill badges */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start space-x-3 bg-transparent border border-gray-700 rounded-xl py-2 px-3 hover:border-[#8245ec] transition-colors"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;