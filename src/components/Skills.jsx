import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";

const skills = [
  { title: "Languages", subtitles: ["JavaScript", "Python", "C/C++"] },
  {
    title: "Libraries",
    subtitles: [
      "React.js",
      "Mongoose.js",
      "ReactQuery",
      "Redux",
      "Zustand",
      "ReactHookForm",
      "MaterialUI",
      "Framer-Motion",
      "GSAP",
    ],
  },
  {
    title: "Frameworks",
    subtitles: ["Express.js", "Next.js", "TailWind CSS", "Bootstrap", "Django"],
  },
  {
    title: "Databases",
    subtitles: ["MongoDB", "MySQL", "sqlite"],
  },
];

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { setActive } = useResource();

  const el = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top center",
        end: "bottom center",
        onToggle: (slef) => {
          if (slef.isActive) setActive("#technologies");
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            ease: "power3.inOut",
            toggleActions: "restart pause resume reverse",
            start: "15% 85%",
          },
        })
        .from(".popup", { scale: 0, stagger: 0.02 })
        .from(".listslide", { x: 30, opacity: 0, stagger: 0.03 }, "<50%");
    },
    { scope: el },
  );

  return (
    <section
      ref={el}
      id="technologies"
      className="p-4 lg:p-8 border-[1rem] md:border-[2rem] border-middle bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="container popup p-4 mx-auto my-6 space-y-1 text-center">
        <h2 className="pb-3 text-3xl font-bold md:text-4xl uppercase text-primary  ">
          Technologies I Know
        </h2>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, idx) => {
          return (
            <div key={idx} className="flex flex-col px-8 py-6">
              <h2 className="mb-2 popup text-lg font-semibold sm:text-xl title-font text-gray-800 dark:text-gray-100">
                {skill.title}
              </h2>
              <ul className="flex-1 mb-4 text-base leadi text-gray-600 dark:text-gray-400">
                {skill.subtitles.map((subtitle, idxx) => {
                  return (
                    <li key={idxx} className="list-inside list-disc listslide">
                      {subtitle}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
