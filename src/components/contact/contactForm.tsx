"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormData } from "@/types/contact.type";
import { useEffect, useState } from "react";

const ContactForm = ({
  sendMail,
}: {
  sendMail: (
    formData: FormData
  ) => Promise<{ success: boolean; error: string | null }>;
}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const onSubmit = async (formData: FormData) => {
  const res = await sendMail(formData);
    if (res.success) {
      setShowSuccessMessage(true);
      reset(); 
    }
  };
  
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showSuccessMessage) {
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); 
    }

    return () => clearTimeout(timer);
  }, [showSuccessMessage]);
  return (
    <div className="max-w-md mx-auto  p-6 rounded-md  shadow-md">
      <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            required
            type="text"
            placeholder="Name"
            id="name"
            className="mt-1 w-full px-4 py-2 border border-[#F4FBA3] rounded-lg"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-xl font-bold">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            {...register("email")}
            className="mt-1 w-full px-4 py-2 border border-[#F4FBA3] rounded-lg"
          />
          {errors.email && (
            <span className="text-red-500 text-xl font-bold">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <textarea
            required
            placeholder="Message"
            id="message"
            {...register("message")}
            className="mt-1 w-full px-4 py-2 border border-[#F4FBA3] rounded-lg"
          />
          {errors.message && (
            <span className="text-red-500 text-xl font-bold">
              {errors.message.message}
            </span>
          )}
        </div>
        <div>
          <Button
            type="submit"
            className="bg-[#F4FBA3] text-black cursor-pointer hover:text-primary w-full"
          >
            {isSubmitting ? "Processing" : "Submit"}
          </Button>
       
        </div>
           {showSuccessMessage && (
          <p className="text-green-600 font-semibold text-center mt-2">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
