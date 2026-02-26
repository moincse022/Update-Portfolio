import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";
import { Send, MapPin, Mail } from "lucide-react";

const emailPublicKey = "eF4dvo3nRZsJ9smXd";
const emailSeviceId = "service_3u7h6pm";
const emailTemplateId = "template_54dpe5c";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { setActive } = useResource();
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const el = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top center",
        end: "bottom center",
        onToggle: (slef) => {
          if (slef.isActive) setActive("#contact");
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            start: "15% 85%",
            ease: "power3.inOut",
            toggleActions: "restart pause resume reverse",
          },
        })
        .from(".slide-from-left", { x: 35, opacity: 0, stagger: 0.2 })
        .from(".slide-from-right", { y: -35, opacity: 0, stagger: 0.2 }, "<");

      tl.current = gsap.timeline({ paused: true }).to(".toast", {
        right: "20px",
        opacity: 1,
        ease: "expo.inOut",
      });

      gsap.to(".btn-icon", {
        y: -2,
        x: 2,
        repeat: -1,
        yoyo: true,
        ease: "power3.in",
      });
    },
    { scope: el },
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const messageValue = e.target.message.value;

    // Show Toast
    tl.current.play();
    setStatus("Sending Email");
    setMessage("Please, wait ...");

    try {
      await emailjs.send(
        emailSeviceId,
        emailTemplateId,
        {
          to_name: name,
          from_name: email,
          message: messageValue,
        },
        emailPublicKey,
      );

      setStatus("Email Received");
      setMessage("Thanks for your Email !!!");

      e.target.reset();
    } catch (error) {
      setStatus("Unable to Send");
      setMessage("Please, try again ...");
    }

    // Auto hide toast after 3s
    setTimeout(() => {
      tl.current.reverse();
    }, 3000);
  };

  return (
    <section
      ref={el}
      id="contact"
      className="py-6 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
    >
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 lg:pt-20 md:grid-cols-2 md:divide-x divide-middle">
        <div className="py-6 md:py-0 md:px-6 text-center md:text-left">
          <h1 className="text-4xl font-bold slide-from-left uppercase text-primary">
            Get in touch
          </h1>
          <p className="pt-2 pb-4 slide-from-left">
            Fill in the form to start a conversation
          </p>
          <div className="space-y-4">
            <p className="flex items-center slide-from-left">
              <MapPin className="w-5 h-5 mr-2 sm:mr-6 icon-motion rotate-12" />
              <span>Khulna, Bangladesh</span>
            </p>

            <p className="flex items-center slide-from-left">
              <Mail className="w-5 h-5 mr-2 sm:mr-6 icon-motion rotate-12" />
              <span>moincse022@gmail.com</span>
            </p>
          </div>
        </div>
        <form
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          onSubmit={onSubmit}
        >
          <label className="block slide-from-right">
            <span className="mb-1">Full Name</span>
            <input
              type="text"
              required
              name="name"
              placeholder="type your name ..."
              className="block w-full border-middle rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100 dark:bg-gray-800"
            />
          </label>
          <label className="block slide-from-right">
            <span className="mb-1">Email Address</span>
            <input
              type="email"
              name="email"
              required
              placeholder="type your email ..."
              className="block w-full border-middle rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-100 dark:bg-gray-800"
            />
          </label>
          <label className="block slide-from-right">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              required
              name="message"
              placeholder="type your message here ..."
              className="block w-full border-middle rounded-md focus:ring focus:ri focus:ri bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </label>
          <button
            type="submit"
            className="slide-from-right flex items-center justify-center gap-2 self-center px-8 py-3 rounded focus:ring hover:ring focus:ri hover:ri bg-primary text-gray-50 dark:text-gray-900"
          >
            <Send className="btn-icon" />
            <span>Send</span>
          </button>
        </form>
      </div>

      {/* Toast */}
      <div className="toast fixed w-[310px] top-5 right-[-100%] z-50 flex shadow-md gap-6 rounded-lg overflow-hidden divide-x bg-gray-50 text-gray-800 divide-middle dark:bg-gray-900 dark:text-gray-100">
        <div
          className={`flex flex-1 flex-col p-4 border-l-8 ${
            status === "Unable to Send"
              ? "border-rose-500"
              : status === "Email Received"
                ? "border-lime-500"
                : "border-gray-500"
          }`}
        >
          <span className="text-2xl">{status}</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {message}
          </span>
        </div>
        <button
          onClick={() => tl.current.reverse()}
          className="px-4 flex items-center text-xs uppercase tracki text-gray-600 border-middle dark:text-gray-400"
        >
          Dismiss
        </button>
      </div>
    </section>
  );
};

export default Contact;
