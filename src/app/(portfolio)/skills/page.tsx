import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type skills = {
  skill: string;
  level: string;
};

const frontEndSkillData: skills[] = [
  {
    skill: 'Html',
    level: 'Expert',
  },
  {
    skill: 'CSS',
    level: 'Expert',
  },
  {
    skill: 'JavaScript',
    level: 'Expert',
  },
  {
    skill: 'Tailwind CSS',
    level: 'Expert',
  },
  {
    skill: 'ReactJs',
    level: 'Expert',
  },
  {
    skill: 'NextJs',
    level: 'Expert',
  },
  {
    skill: 'Material UI',
    level: 'Expert',
  },
  {
    skill: 'Shadcn UI',
    level: 'Expert',
  },
  {
    skill: 'Typescript',
    level: 'Expert',
  },
  {
    skill: 'Redux',
    level: 'Intermediate',
  },
];
const backendEndSkillData: skills[] = [
  {
    skill: 'Nodejs',
    level: 'Intermediate',
  },
  {
    skill: 'Express',
    level: 'Expert',
  },
  {
    skill: 'MongoDB',
    level: 'Expert',
  },
  {
    skill: 'Mongoose',
    level: 'Expert',
  },
  {
    skill: 'JWT',
    level: 'Expert',
  },
  {
    skill: 'Cookies',
    level: 'Expert',
  },
  {
    skill: 'DBMS',
    level: 'Intermediate',
  },
  {
    skill: 'SQL',
    level: 'Intermediate',
  },
  {
    skill: 'PostgreSQL',
    level: 'Intermediate',
  },
  {
    skill: 'Prisma',
    level: 'Intermediate',
  },
];

const SkillsPage = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold mb-4">Skills & Technologies</h1>
      <p className="text-center w-full lg:w-2/3 mx-auto mb-5">
        As a full-stack developer, I bring together the best of both frontend and backend technologies to build fast, scalable, and responsive web applications. From crafting clean UI components to
        managing databases and server-side logic, here&apos;s a snapshot of the tools and technologies I work with regularly.
      </p>
      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="overflow-x-auto  rounded-lg md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Frontend Skills</h2>
          <Table className="w-full text-sm shadow-2xl">
            <TableHeader>
              <TableRow>
                <TableHead>Skills</TableHead>
                <TableHead>Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {frontEndSkillData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className="text-primary font-medium">{data.skill}</TableCell>
                  <TableCell>{data.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="overflow-x-auto  rounded-lg md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Backend Skills</h2>
          <Table className="w-full shadow-2xl text-sm">
            <TableHeader>
              <TableRow>
                <TableHead>Skills</TableHead>
                <TableHead>Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backendEndSkillData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className="text-primary font-medium">{data.skill}</TableCell>
                  <TableCell>{data.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Other Skills</h2>
        <div className="flex flex-wrap gap-4 justify-start text-sm">
          <div className="bg-popover p-2 rounded-lg shadow-md">Github</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Wordpress</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Figma</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Postman</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Vercel</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Netlify</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">SSLCOMMERZ</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">Stripe</div>
          <div className="bg-popover p-2 rounded-lg shadow-md">ShurjoPay</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
