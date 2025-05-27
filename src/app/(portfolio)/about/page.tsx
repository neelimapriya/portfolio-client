import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div>
        <h2 className="">
          Hi, I am <span className="font-medium">Nelima Sultana</span>
        </h2>
        <br />
        <p className="max-w-xl">
          As a <span className="text-primary font-medium"> Full Stack Web Developer</span>, I design and develop dynamic, responsive, and user-friendly web applications from end to end. My work spans
          across crafting intuitive front-end interfaces using <span className="text-primary font-medium">HTML, CSS, JavaScript</span>, and modern frameworks like{' '}
          <span className="text-primary font-medium">React, NextJs</span>, to building scalable back-end systems with <span className="text-primary font-medium">Node.js and Express</span>. I’m
          experienced in working with both relational and non-relational databases such as <span className="text-primary font-medium">MySQL and MongoDB</span>, and I regularly create and integrate
          RESTful APIs. I use Git for version control, manage deployments with platforms like Vercel or Netlify, and ensure optimized performance across devices. With a focus on clean code,
          scalability, and great user experience, I’m passionate about turning complex problems into simple, efficient solutions.
        </p>
      </div>
      <div className="overflow-x-auto py-4 rounded-lg mt-2">
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        <Table className="w-full text-sm shadow-2xl">
          <TableHeader>
            <TableRow>
              <TableHead>Degree</TableHead>
              <TableHead>Institution</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Certificate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* 1 */}
            <TableRow>
              <TableCell className="font-medium text-primary">Next Level Web Development 2.0 [Batch-4]</TableCell>
              <TableCell>Programming Hero</TableCell>
              <TableCell>2025</TableCell>
              <TableCell>
                {' '}
                <Link href="https://drive.google.com/file/d/1pysCVgCPRjfw9lMNKalA4f3R2DxtQxeX/view?usp=sharing" className="flex items-center gap-2">
                  Click
                  <LinkIcon className="size-4" />
                </Link>{' '}
              </TableCell>
            </TableRow>
            {/* 2 */}
            <TableRow>
              <TableCell className="font-medium text-primary">Complete Web Development Course [Batch-8]</TableCell>
              <TableCell>Programming Hero</TableCell>
              <TableCell>2023</TableCell>
              <TableCell>
                <Link href="https://drive.google.com/file/d/1fqcI48v-kt7o47nTRu4oyOdXBx-HBIua/view?usp=sharing" className="flex items-center gap-2">
                  {' '}
                  Click
                  <LinkIcon className="size-4" />
                </Link>
              </TableCell>
            </TableRow>
            {/* 3 */}
            <TableRow>
              <TableCell className="font-medium text-primary">Bachelor of Science in Zoology</TableCell>
              <TableCell>National University</TableCell>
              <TableCell>2018 – 2024</TableCell>
              <TableCell>{/* <Link style={{ textShadow: '0 0 20px  #fff' }} href="https://drive.google.com/file/d/1yckCCFWwSq0UOWd2U_vR2JUkpKsX8RTq/view?usp=sharing">Click🔗</Link> */}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AboutPage;
