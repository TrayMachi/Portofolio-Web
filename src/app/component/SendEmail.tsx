"use client";
import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useScreenSize } from "../utils/screensize";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Component for container of sending email
const ContactMe = () => {
  const form = useRef<HTMLFormElement | null>(null);
  // Change style based on screensize
  const screenSize = useScreenSize();
  const formatH1 = screenSize ? "text-4xl" : "text-2xl";
  const formatMx = screenSize ? "mx-16" : "mx-8";
  const formatMl = screenSize ? "ml-16" : "ml-8";
  const formatMr = screenSize ? "mr-16" : "mr-8";

  // State variables for form input values and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      setIsNameValid(!!name);
      setIsEmailValid(!!email);
      setIsSubjectValid(!!subject);
      setIsMessageValid(!!message);
      console.log(`FAILED TO SEND FORM
      Name : ${!!name}
      Email : ${!!email}
      Subject : ${!!subject}
      Message : ${!!message}`);
      return;
    } else if (form.current) {
      //If success gonna send it to my email and reply em back
      emailjs
        .sendForm(
          "service_jvc7la9",
          "template_fhuyx08",
          form.current,
          "EBycNpoAPrikqlnt6"
        )
        .then((result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <>
      <div className="my-12 flex justify-center">
        <h1 className={`${formatH1} font-bold`}>Contact Me!</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="justify-stretch grid grid-cols-2 gap-6 mb-12">
          <div className={`max-w-full ${formatMl}`}>
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <div
              className={`relative ${
                !isNameValid && "border-red-500 border rounded-lg"
              }`}
            >
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`text-gray-300 bg-[#4625581a] rounded-lg text-sm block p-2.5 w-full ${
                  !isNameValid && "placeholder:text-red-500"
                } `}
                placeholder={
                  isNameValid ? "Tristan" : "Please enter your name."
                }
              />
            </div>
          </div>

          <div className={`max-w-full ${formatMr}`}>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <div
              className={`relative ${
                !isEmailValid && "border-red-500 border rounded-lg"
              }`}
            >
              <div
                className={`absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none `}
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`text-gray-300 bg-[#4625581a] rounded-lg text-sm block p-2.5 w-full ps-10 
                ${!isEmailValid && "placeholder:text-red-500"}`}
                placeholder={
                  isEmailValid
                    ? "youremail@example.com"
                    : "Please enter your email."
                }
              />
            </div>
          </div>
          <div className={`max-w-full col-span-2 ${formatMx}`}>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <div
              className={`relative ${
                !isSubjectValid && "border-red-500 border rounded-lg"
              }`}
            >
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`text-gray-300 bg-[#4625581a] rounded-lg text-sm block p-2.5 w-full ${
                  !isSubjectValid && "placeholder:text-red-500"
                }`}
                placeholder={
                  isSubjectValid
                    ? "Happy News for You!"
                    : "This section can't be empty."
                }
              />
            </div>
          </div>
          <div className={`max-w-full col-span-2 ${formatMx}`}>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className={`resize-none block p-2.5 w-full text-sm text-gray-300 bg-[#4625581a] rounded-lg ${
                !isMessageValid && "border-red-500 border rounded-lg"
              } ${!isMessageValid && "placeholder:text-red-500"}`}
              placeholder={
                isMessageValid
                  ? "Hello, Tristan...."
                  : "This section can't be empty."
              }
            ></textarea>
          </div>

          <div className="max-w-full col-span-2 mx-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
              className="font-[550] bg-[#904edb] hover:bg-[#632f77] active:bg-[#7d3699] text-[#0d0e0d] h-10 w-44 rounded-lg"
            >
              Send
            </motion.button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactMe;
