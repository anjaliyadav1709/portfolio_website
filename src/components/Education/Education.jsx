import React from "react";
import { education } from "../../constants"; 

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-black text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative w-full ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle - Ensures it stays on the line */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-600 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-10 shadow-[0_0_10px_purple]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain p-1 rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[45%] p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm ml-8 sm:ml-0 transform transition-all hover:scale-[1.02] hover:border-purple-500/50 ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded flex-shrink-0 overflow-hidden">
                  <img src={edu.img} alt="logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">{edu.degree}</h3>
                  <h4 className="text-sm text-purple-400">{edu.school}</h4>
                  <p className="text-xs text-gray-500">{edu.date}</p>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-300 mb-2">Grade: {edu.grade}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;