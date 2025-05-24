"use client";
import Image from "next/image";
import Img from "../assets/myPicture.jpg";
import { useState } from "react";
import Link from "next/link";
import { Contact } from "lucide-react";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const cvFileName = "";
  const cvPath = `/cv/${cvFileName}`;

  const driveLink =
    "https://docs.google.com/document/d/1jT4jXK7X9F4UwqZqP5bB0_SVNHeOBxKvKFUtefUgQNU/edit?usp=drive_link";

  // const handleEmailClick = () => {
  //   window.location.href = "mailto:neelimasultana6@gmail.com";
  // };

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(cvPath, { method: "HEAD" });
      if (response.ok) {
        const link = document.createElement("a");
        link.href = cvPath;
        link.setAttribute("download", cvFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(driveLink, "_blank");
      }
    } catch (error) {
      console.error("Download error:", error);
      window.open(driveLink, "_blank");
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10">
      <div className="space-y-4 max-w-xl 
text-center">
        <h1 className="text-xl md:text-3xl font-bold ">Nelima Sultana</h1>

        <p className="text-md ">I am a Full Stack Web Developer.</p>
        <div className="mt-20 text-center
">
          <p className="text-sm w-4/5 md:w-full mx-auto md:text-lg">
            A passionate{" "}
            <span className="text-[#F4FBA3] font-semibold ">Web Developer</span>{" "}
            from{" "}
            <span className="text-[#F4FBA3] font-semibold">Bangladesh</span>
          </p>
        </div>
        {/* <button
          onClick={() => window.open(driveLink, "_blank")}
          className="bg-yellow-300 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition"
        >
          View My CV
        </button> */}
        <button
          onClick={handleDownloadCV}
          disabled={isDownloading}
          className="bg-[#F4FBA3] flex gap-3 justify-center text-black lg:px-4 py-2 rounded-md font-medium hover:text-[#F4FBA3] hover:bg-slate-800 transition cursor-pointer mx-auto md:w-full"
        >
          {" "}
          <Contact />
          <span>{isDownloading ? "Downloading..." : "Download My CV"}</span>
        </button>
        <div className="space-x-4 mt-4 text-center grid grid-cols-2 lg:grid-cols-4">
          <SocialButton name="Github" href="https://github.com/neelimapriya" />
          <SocialButton
            name="Facebook"
            href="https://www.facebook.com/Neelim.priya/"
          />
          <SocialButton
            name="LinkedIn"
            href="www.linkedin.com/in/nelima-sultana-7b4280298"
          />
          <SocialButton name="Instagram" href="" />
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <Image
          src={Img}
          alt="Nelima Sultana"
          width={605}
          height={705}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
type Props = {
  name: string;
  href: string;
};
function SocialButton({ name, href }: Props) {
  return (
    <Link
      href={href}
      style={{ textShadow: "0 0 20px  #fff" }}
      className=" text-white px-3 py-1 rounded hover:bg-[#F4FBA3] hover:text-black transition mb-2 cursor-pointer"
    >
      {name}
    </Link>
  );
}
