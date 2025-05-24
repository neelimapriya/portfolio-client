import ContactForm from "@/components/contact/contactForm";
import { FormData } from "@/types/contact.type";
import { Mail } from "lucide-react";
import nodemailer from "nodemailer";
import image from "@/assets/contactPicture.png";
import Image from "next/image";

const ContactPage = () => {
  const sendMail = async (formData: FormData) => {
    "use server";
    try {
      // nodemailer setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASS,
        },
      });
      const mailOptions = {
        from: formData.email,
        to: process.env.RECEIVER_EMAIL,
        subject: "",
        text: formData.message,
        html: "",
      };
      // send mail
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        error: "Oops! an error occurred!",
      };
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:mt-5">
      <div className="w-full md:w-1/2">
        <h2 className="text-lg md:text-2xl lg:text-3xl text-center font-bold text-[#F4FBA3]">
          Let’s Get Connected
        </h2>
        <ContactForm sendMail={sendMail} />
      </div>
      <div className="w-full md:w-1/2">
        <div
          className="flex gap-2 text-sm md:text-md lg:text-xl bg-[#F4FBA3] text-black rounded md:p-2 text-center justify-center w-5/6 mx-auto md:w-full
        "
        >
          <Mail />
          <h2 className="md:uppercase tracking-wide">
            neelimasultana6@gmail.com
          </h2>
        </div>
        <Image
          src={image}
          alt="Decorative floral background"
          width={512}
          height={512}
          className="rounded shadow-md mt-5"
        />

        <div className="flex flex-col  lg:flex-row justify-between text-sm pt-2 text-gray-300">
          <div className="flex gap-4 font-semibold justify-between">
            <a
              style={{ textShadow: "0 0 20px  #fff" }}
              href="https://github.com/neelimapriya"
              target="_blank"
            >
              Github
            </a>
            <a
              style={{ textShadow: "0 0 20px  #fff" }}
              href="https://www.facebook.com/Neelim.priya/"
              target="_blank"
            >
              Facebook
            </a>
            <a
              style={{ textShadow: "0 0 20px  #fff" }}
              href="www.linkedin.com/in/nelima-sultana-7b4280298"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <a href="tel:+8801882277032"
            className="font-semibold text-center mt-2 lg:mt-0 hover:text-[#F4FBA3]"
            style={{ textShadow: "0 0 20px  #fff" }}
          >
            📞 +880 1882277032
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
