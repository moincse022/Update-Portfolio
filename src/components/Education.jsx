import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educations = [
  {
    name: "B.Sc in Computer Science and Engineering",
    year: "2024",
    institute:
      "Gopalgonj Science and Technology University, Gopalganj, Bangladesh",
  },
  {
    name: "H.S.C",
    year: "2017",
    institute: "Khulna Public College, Khulna, Bangladesh",
  },
  {
    name: "S.S.C",
    year: "2015",
    institute: "Charkulia High School,Mollahat,Bagerhat, Bangladesh",
  },
  // {
  //   name: "J.S.C",
  //   year: "2013",
  //   institute: "Model Secondary School, Khulna, Bangladesh",
  // },
  // {
  //   name: "P.S.C",
  //   year: "2010",
  //   institute: "Rev Paul's High School, Khulna, Bangladesh",
  // },
  // {
  //   name: "",
  //   year: "",
  //   institute: "",
  // },
];

const Education = () => {
  const { setActive } = useResource();

  const el = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: el.current,
        start: "top center",
        end: "bottom center",
        onToggle: (slef) => {
          if (slef.isActive) setActive("#education");
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            ease: "power3.inOut",
            start: "15% 85%",
            toggleActions: "restart pause resume reverse",
          },
        })
        .from(".slide-from-left", { x: 35, opacity: 0 })
        .from(".slide-from-right", { x: -35, opacity: 0, stagger: 0.2 }, "<");
    },
    { scope: el },
  );

  return (
    <section
      ref={el}
      id="education"
      className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="container max-w-5xl px-4 py-12 lg:pt-20 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="slide-from-left text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary ">
              <h3 className="text-3xl font-semibold uppercase text-primary">
                My Education
              </h3>
              {/* <span className="text-sm font-bold tracki uppercase text-gray-600 dark:text-gray-400">
                Currently Studying CSE at BSMRSTU, Bangladesh.
              </span> */}
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-[1px] sm:before:-left-3 before:bg-middle">
              {educations.map((education, idx) => {
                return (
                  <div
                    key={idx}
                    className="slide-from-right flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary"
                  >
                    <h3 className="text-xl font-semibold tracki">
                      {education.name}
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-600 dark:text-gray-400">
                      {education.year}
                    </time>
                    <p className="mt-3">{education.institute}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
