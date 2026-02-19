import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Facebook, Github, Linkedin, Copyright } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const el = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            ease: "power3.inOut",
            toggleActions: "restart pause resume reverse",
          },
        })
        .from(".slide-from-left", { x: 35, opacity: 0 })
        .from(
          ".slide-from-right",
          { x: -35, opacity: 0, stagger: 0.2 },
          "<50%"
        );

      gsap.to(".text", {
        text: "Md. Noor E Musa",
        repeat: -1,
        ease: "bounce.inOut",
        yoyo: true,
        repeatDelay: 2,
        duration: 1,
      });
    },
    { scope: el }
  );

  return (
    <footer
      ref={el}
      className="pb-6 md:pt-12 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
    >
      <div className="container px-6 mx-auto divide-y divide-middle">
        <div />
        <div className="flex flex-col-reverse md:flex-row justify-center pt-6 md:justify-between items-center gap-4">
          <div className="slide-from-left flex items-center text-sm text-center space-x-3">
            <Copyright className="size-10 icon-motion rotate-12" />
            <div>
              <span className="text block border-b-[1px] border-middle">Shanto Noor</span>
              {`All Rights Reserved ${new Date().getFullYear()}`}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shantonoor/"
              title="Email"
              target="_blank"
              className="slide-from-right focus:ring hover:ring focus:ri hover:ri flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-50   dark:text-gray-900"
            >
              <Linkedin className="w-5 h-5 icon-motion rotate-12" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/ShantoN00R/"
              title="Facebook"
              target="_blank"
              className="slide-from-right focus:ring hover:ring focus:ri hover:ri flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50   dark:text-gray-900"
            >
              <Facebook className="w-5 h-5 icon-motion rotate-12" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/ShantoNoor"
              title="GitHub"
              target="_blank"
              className="slide-from-right focus:ring hover:ring focus:ri hover:ri flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-50   dark:text-gray-900"
            >
              <Github className="w-5 h-5 icon-motion rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
