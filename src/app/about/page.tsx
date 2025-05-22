import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div>
        <h2 className="">Hi, I am <span className="text-xl font-bold">Nelima Sultana</span></h2>
        <br />
        <p className=" w-3/4">
          As a <span className="text-[#F4FBA3]"> Full Stack Web Developer</span>
          , I design and develop dynamic, responsive, and user-friendly web
          applications from end to end. My work spans across crafting intuitive
          front-end interfaces using <span className="text-[#F4FBA3]">HTML, CSS, JavaScript</span>, and modern
          frameworks like <span className="text-[#F4FBA3]">React, NextJs</span>, to building scalable back-end systems with <span className="text-[#F4FBA3]">Node.js and Express</span>.
           I’m experienced in working with both relational
          and non-relational databases such as <span className="text-[#F4FBA3]">MySQL and MongoDB</span>, and I
          regularly create and integrate RESTful APIs. I use Git for version
          control, manage deployments with platforms like Vercel or Netlify, and
          ensure optimized performance across devices. With a focus on clean
          code, scalability, and great user experience, I’m passionate about
          turning complex problems into simple, efficient solutions.
        </p>
        
      </div>
      <div className="overflow-x-auto bg-black text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Education</h2>
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-[#F4FBA3] text-black">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Degree
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Institution
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Year
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Certificate
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 1 */}
            <tr>
              <td className="border border-gray-700 px-4 py-2">
                Next Level Web Development 2.0 [Batch-4]
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Programming Hero
              </td>
              <td className="border border-gray-700 px-4 py-2">2025</td>
              <td className="border border-gray-700 px-4 py-2"> <Link style={{ textShadow: '0 0 20px  #F4FBA3' }} href="https://drive.google.com/file/d/1pysCVgCPRjfw9lMNKalA4f3R2DxtQxeX/view?usp=sharing">Click🔗</Link>  </td>
            </tr>
            {/* 2 */}
            <tr>
              <td className="border border-gray-700 px-4 py-2">
                Complete Web Development Course [Batch-8]
              </td>
              <td className="border border-gray-700 px-4 py-2">
                Programming Hero
              </td>
              <td className="border border-gray-700 px-4 py-2">
               2023
              </td>
              <td className="border border-gray-700 px-4 py-2">
                <Link style={{ textShadow: '0 0 20px  #F4FBA3' }} href="https://drive.google.com/file/d/1fqcI48v-kt7o47nTRu4oyOdXBx-HBIua/view?usp=sharing"> Click🔗</Link>
               
              </td>
            </tr>
            {/* 3 */}
            <tr>
              <td className="border border-gray-700 px-4 py-2">
                Bachelor of Science in Zoology
              </td>
              <td className="border border-gray-700 px-4 py-2">
                National University
              </td>
              <td className="border border-gray-700 px-4 py-2">
                2018 – 2024
              </td>
              <td className="border border-gray-700 px-4 py-2">
                <Link style={{ textShadow: '0 0 20px  #fff' }} href="https://drive.google.com/file/d/1yckCCFWwSq0UOWd2U_vR2JUkpKsX8RTq/view?usp=sharing">Click🔗</Link>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutPage;
