import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";
import Slider from "./Slider";

import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";
import img15 from "../assets/images/15.png";

import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import img25 from "../assets/images/25.png";

import img31 from "../assets/images/31.png";
import img32 from "../assets/images/32.png";
import img33 from "../assets/images/33.png";
import img34 from "../assets/images/34.png";
import img35 from "../assets/images/35.png";

import img41 from "../assets/images/41.png";
import img42 from "../assets/images/42.png";
import img43 from "../assets/images/43.png";
import img44 from "../assets/images/44.png";
import img45 from "../assets/images/45.png";
import img46 from "../assets/images/46.png";
import img47 from "../assets/images/47.png";
import img48 from "../assets/images/48.png";
import img49 from "../assets/images/49.png";

import { Eye, Github } from "lucide-react";

const projectsList = [
  {
    name: "Recipe Persona",
    description:
      "RecipePersona is an intelligent recipe recommender that personalizes recipe suggestions based on user profiles and preferences using deep learning.",
    technologies: {
      frontend: "React.js, Shadcn-UI, React Router, Firebase Authentication, React Hook Form, React Query, Framer-Motion",
      backend: "Express.js, MongoDB, Mongoose.js, Tensorflow.js",
    },
    links: {
      live: "https://recipe-persona.web.app/",
      source: {
        frontend: "https://github.com/ShantoNoor/RecipePersona-Frontend",
        backend: "https://github.com/ShantoNoor/RecipePersona-Backend",
      },
    },
    imgList: [img41, img42, img43, img49, img44, img45, img46, img47, img48],
  },
  {
    name: "Parcel Bee",
    description:
      "ParcelBee is a parcel delivery app. Where there is three types of users(Admin, DeliveryMan, User) for managing parcels differently based on different users role.",
    technologies: {
      frontend: "React.js, MUI, React Router, Firebase Authentication, React Hook Form, React Query",
      backend: "Express.js, MongoDB, Mongoose.js",
    },
    links: {
      live: "https://parcelbee-47aa9.web.app/",
      source: {
        frontend: "https://github.com/ShantoNoor/ParcelBee-Frontend",
        backend: "https://github.com/ShantoNoor/ParcelBee-Backend",
      },
    },
    imgList: [img33, img31, img32, img34, img35],
  },
  {
    name: "Food Titan",
    description:
      "FoodTitan is a food selling app, where users can add, update their food items and sell them and buy other uses added food items.",
    technologies: {
      frontend: "React.js, MUI, React Router, Firebase Authentication",
      backend: "Express.js, MongoDB, Mongoose.js",
    },
    links: {
      live: "https://foodtitan-764d1.web.app/",
      source: {
        frontend: "https://github.com/ShantoNoor/FoodTitan-Frontend",
        backend: "https://github.com/ShantoNoor/FoodTitan-Backend",
      },
    },
    imgList: [img21, img22, img23, img24, img25],
  },
  {
    name: "Thunder Cars",
    description:
      "Thunder Car is a Car shop selling different cars from different brands. Uses can SignUp and also SignIn with Google and Github, then add, update, buy cars.",
    technologies: {
      frontend:
        "React.js, Mamba UI, Next UI, React Router, Firebase Authentication, Framer-Motion",
      backend: "Express.js, MongoDB",
    },
    links: {
      live: "https://thunder-cars.web.app/",
      source: {
        frontend: "https://github.com/ShantoNoor/ThunderCars-Frontend",
        backend: "https://github.com/ShantoNoor/ThunderCars-Backend",
      },
    },
    imgList: [img11, img12, img13, img14, img15],
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
    { scope: el }
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
