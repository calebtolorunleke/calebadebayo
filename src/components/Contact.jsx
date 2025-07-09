import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9fpg4o8",
        "template_tbdjwnl",
        form.current,
        "sZP8MH_W86HtLUclm"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <main className="bg-black pt-[10rem] px-4 pt-20">
      <div className="max-w-2xl mx-auto text-white flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold tracking-widest">CONTACT</h1>
        <h3 className="text-center text-lg text-gray-300 max-w-xl">
          I’d love to hear from you — reach out for any opportunities or
          questions!
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full flex flex-col gap-6 p-6 sm:p-5 rounded-lg bg-gradient-to-br from-[#0a0f2c] via-[#1a1a2e] to-black shadow-2xl border border-blue-500"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 bg-[#0a0a0a] text-white rounded-md focus:outline-none focus:shadow-[0_0_12px_4px_rgba(59,130,246,0.7)] hover:ring-1 hover:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 bg-[#0a0a0a] text-white rounded-md focus:outline-none focus:shadow-[0_0_12px_4px_rgba(59,130,246,0.7)] hover:ring-1 hover:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-2 bg-[#0a0a0a] text-white rounded-md focus:outline-none focus:shadow-[0_0_12px_4px_rgba(59,130,246,0.7)] hover:ring-1 hover:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message here..."
              required
              className="w-full px-4 py-3 bg-[#0a0a0a] text-white rounded-md resize-none focus:outline-none focus:shadow-[0_0_12px_4px_rgba(59,130,246,0.7)] hover:ring-1 hover:ring-blue-500 transition duration-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] py-3 rounded-md text-black font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>

        <footer className="flex flex-col items-center pt-20 pb-10 bg-black text-gray-400">
          <h1 className="text-xl font-bold text-white">Caleb Adebayo</h1>
          <div className="flex justify-center gap-6 mt-5 text-2xl">
            <a
              href="https://github.com/calebtolorunleke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/calebtol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:calebtolorunleke@yahoo.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <span className="mt-6 text-sm text-gray-500">
            © 2025 Caleb Adebayo. All rights reserved.
          </span>
        </footer>
      </div>
    </main>
  );
};

export default Contact;
