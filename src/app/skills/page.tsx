

type skills = {
  skill: string;
  level: string;
};

const frontEndSkillData: skills[] = [
  {
    skill: "Html",
    level: "Expert",
  },
  {
    skill: "CSS",
    level: "Expert",
  },
  {
    skill: "JavaScript",
    level: "Expert",
  },
  {
    skill: "Tailwind CSS",
    level: "Expert",
  },
  {
    skill: "ReactJs",
    level: "Expert",
  },
  {
    skill: "NextJs",
    level: "Expert",
  },
  {
    skill: "Material UI",
    level: "Expert",
  },
  {
    skill: "Shadcn UI",
    level: "Expert",
  },
  {
    skill: "Typescript",
    level: "Expert",
  },
  {
    skill: "Redux",
    level: "Intermediate",
  },
];
const backendEndSkillData: skills[] = [
  {
    skill: "Nodejs",
    level: "Intermediate",
  },
  {
    skill: "Express",
    level: "Expert",
  },
  {
    skill: "MongoDB",
    level: "Expert",
  },
  {
    skill: "Mongoose",
    level: "Expert",
  },
  {
    skill: "JWT",
    level: "Expert",
  },
  {
    skill: "Cookies",
    level: "Expert",
  },
  {
    skill: "DBMS",
    level: "Intermediate",
  },
  {
    skill: "SQL",
    level: "Intermediate",
  },
  {
    skill: "PostgreSQL",
    level: "Intermediate",
  },
  {
    skill: "Prisma",
    level: "Intermediate",
  },
];

const SkillsPage = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full">
        <div className="overflow-x-auto bg-black text-white p-4 rounded-lg md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">FrontEnd Skills</h2>
          <table className="w-full border border-gray-700 text-sm">
            <thead>
              <tr className="bg-[#F4FBA3] text-black">
                <th className="border border-gray-700 px-4 py-2 text-left">
                  Skills
                </th>
                <th className="border border-gray-700 px-4 py-2 text-left">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {frontEndSkillData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-700 px-4 py-2">
                    {data.skill}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {data.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto bg-black text-white p-4 rounded-lg md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">BackEnd Skills</h2>
          <table className="w-full border border-gray-700 text-sm">
            <thead>
              <tr className="bg-[#F4FBA3] text-black">
                <th className="border border-gray-700 px-4 py-2 text-left">
                  Skills
                </th>
                <th className="border border-gray-700 px-4 py-2 text-left">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {backendEndSkillData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-700 px-4 py-2">
                    {data.skill}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {data.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="overflow-x-auto bg-black text-white p-4 rounded-lg w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Other Skills</h2>
        <table className="w-full border border-gray-700 text-sm">
          <tbody>
            <tr >
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Github</td>
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Wordpress</td>
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Figma</td>
            
            </tr>
            <tr >
            
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Postman</td>
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Vercel</td>
              <td className="border border-gray-700 px-4 py-2 text-[#F4FBA3]">Netlify</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsPage;
