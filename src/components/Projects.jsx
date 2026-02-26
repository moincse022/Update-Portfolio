import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";
import Slider from "./Slider";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";

import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img16 from "../assets/images/16.png";
import img17 from "../assets/images/17.png";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";

import { Eye, Github } from "lucide-react";

const projectsList = [
  {
    name: "Resu Magnet",
    description:
      "ResuMagnet is a resume builder app, where users can create their resume by filling up a form and also can download it as PDF format.",
    technologies: {
      frontend:
        "React.js, Shadcn-UI, React Router, Firebase Authentication, React Hook Form, React Query, Framer-Motion",
      backend: "Express.js, MongoDB, Mongoose.js, Tensorflow.js",
    },
    links: {
      live: "https://resu-magnet-frontend.vercel.app/",
      source: {
        frontend: "https://github.com/teamkingsman/resuMagnet-frontend",
        backend: "https://github.com/teamkingsman/resuMagnet-backend/",
      },
    },
    imgList: [img1, img2, img3, img4, img5, img6],
  },
  {
    name: "Online Gas Booking System",
    description:
      "Online Gas Booking System is a web application that allows users to book gas cylinders online. Users can sign up, log in, and manage their bookings. The system also includes features for tracking orders and managing user profiles.",
    technologies: {
      frontend:
        "React.js,  React Router, Firebase Authentication, React Hook Form,",
      backend: "Express.js, MongoDB, Mongoose.js",
    },
    links: {
      live: "https://parcelbee-47aa9.web.app/",
      source: {
        frontend: "https://github.com/moincse022/Online-gas-booking-client",
        backend: "https://github.com/moincse022/Online-gas-booking-system",
      },
    },
    imgList: [img7, img8, img9, img10, img11],
  },
  {
    name: "BISTRO BOSS Restaurant",
    description:
      "BISTRO BOSS Restaurant is a web application for a restaurant that allows users to view the menu, place orders, and manage their bookings. Users can sign up, log in, and manage their orders. The system also includes features for tracking orders and managing user profiles.",
    technologies: {
      frontend: "React.js,  React Router, Firebase Authentication",
      backend: "Express.js, MongoDB,",
    },
    links: {
      live: "https://bistro-boss-restaurant-sazidulalam47.vercel.app/",
      source: {
        frontend: "https://github.com/moincse022/final-project",
        backend: "https://github.com/moincse022/Final-project-server",
      },
    },
    imgList: [img16, img17, img18, img19, img20, img21],
  },

  // {
  //   name: "",
  //   description: "",
  //   technologies: {
  //     frontend: "",
  //     backend: "",
  //   },
  //   links: {
  //     live: "",
  //     source: {
  //       frontend: "",
  //       backend: ""
  //     },
  //   },
  // },
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { setActive } = useResource();
  const el = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top center",
        end: "bottom center",
        onToggle: (slef) => {
          if (slef.isActive) setActive("#projects");
        },
      });

      gsap.from(".popup", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: el.current,
          toggleActions: "restart pause resume none",
        },
      });

      gsap.utils.toArray(".project").forEach((project) => {
        gsap.from(project, {
          x: 50,
          scaleX: 0.85,
          stagger: 0.25,
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            ease: "ease.inOut",
            toggleActions: "restart pause resume reverse",
          },
        });
      });

      // slider btn
      gsap.from(".slider-icon-prev", {
        x: -2,
        repeat: -1,
        yoyo: true,
        ease: "power3.in",
      });
      gsap.to(".slider-icon-next", {
        x: 2,
        repeat: -1,
        yoyo: true,
        ease: "power3.in",
      });
    },
    { scope: el },
  );

  return (
    <section
      ref={el}
      id="projects"
      className="p-4 lg:p-8 lg:pt-20 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="container p-4 mx-auto my-6 space-y-1 text-center">
        <h2 className="pb-3 popup text-3xl font-bold md:text-4xl uppercase text-primary  ">
          My Recent Projects
        </h2>
      </div>

      <div className="projects container mx-auto space-y-12">
        {projectsList.map((project, idx) => {
          return (
            <div
              key={idx}
              className={`project flex flex-col items-stretch overflow-hidden rounded-md shadow-sm lg:${
                idx % 2 === 1 ? "flex-row" : "flex-row-reverse"
              } border border-middle`}
            >
              <Slider
                imgList={project.imgList}
                // className={`bg-gray-500 aspect-[1.6] h-[12.5rem] md:h-[20rem] dark:bg-gray-500 object-cover object-center`}
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">{project.name}</h3>
                <p className="my-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                  <br />
                  <br />
                  <span className="text-primary">
                    <span className="pointer">+</span> Front-end technology:
                  </span>{" "}
                  {project.technologies.frontend}
                  <br />
                  <span className="text-primary">
                    <span className="pointer">+</span> Back-end technology:
                  </span>{" "}
                  {project.technologies.backend}
                </p>
                <div className="flex flex-col md:flex-row justify-start items-stretch gap-4">
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className="self-start w-full flex flex-row items-center justify-center focus:ring hover:ring focus:ri hover:ri px-4 py-1 rounded border-middle   border bg-primary text-gray-50   dark:text-gray-900"
                    >
                      <Eye className="inline-block size-10 mr-1 icon-motion origin-center rotate-12" />{" "}
                      <span>Live Preview</span>
                    </button>
                  </a>
                  <div className="flex flex-row gap-4">
                    <a
                      href={project.links.source.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-grow lg:flex-grow-0"
                    >
                      <button
                        type="button"
                        className="w-full flex flex-row items-center justify-center focus:ring hover:ring focus:ri hover:ri px-4 py-1 font-semibold border rounded border-middle"
                      >
                        <Github className="inline-block size-10 icon-motion origin-center rotate-12" />
                        <span>Frontend Source</span>
                      </button>
                    </a>
                    <a
                      href={project.links.source.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-grow lg:flex-grow-0"
                    >
                      <button
                        type="button"
                        className="w-full flex flex-row items-center justify-center focus:ring hover:ring focus:ri hover:ri px-4 py-1 font-semibold border rounded border-middle"
                      >
                        <Github className="inline-block size-10 icon-motion origin-center rotate-12" />
                        <span>Backend Source</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
