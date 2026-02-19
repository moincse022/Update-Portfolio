import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Download, MailSearch } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import useResource from "../hooks/useResource";
import moin from "../assets/images/moinuddin.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Banner = () => {
  const { setActive, scrollTo } = useResource();
  const el = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Section active tracking
      ScrollTrigger.create({
        trigger: el.current,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive("#about"),
      });

      // Text entrance animation
      gsap
        .timeline()
        .from(".home-left-to-right", {
          x: -60,
          opacity: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
        })
        .from(
          ".home-right-to-left",
          {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "<",
        );

      // Floating image
      gsap.to(imageRef.current, {
        y: 18,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Glow breathing animation
      gsap.to(".glow-ring", {
        scale: 1.15,
        opacity: 1,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle rotation (luxury effect)
      gsap.to(".image-wrapper", {
        rotate: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text changing animation
      gsap
        .timeline({ repeat: -1, delay: 2 })
        .to(".desc-text", { text: "JavaScript Developer", duration: 1.5 })
        .to(".desc-text", { text: "Web Developer", duration: 1.5 })
        .to(".desc-text", { text: "React Developer", duration: 1.5 })
        .to(".desc-text", { text: "Front-end Developer", duration: 1.5 })
        .to(".desc-text", { text: "Problem Solver", duration: 1.5 })
        .to(".desc-text", { text: "Software Engineer", duration: 1.5 });

      // Download icon bounce
      gsap.from(".download-button-icon", {
        y: -4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: el },
  );

  return (
    <section
      id="about"
      ref={el}
      className="flex lg:h-screen justify-center items-center bg-gray-100 dark:bg-gray-800 overflow-hidden"
    >
      <div className="container flex flex-col-reverse lg:flex-row-reverse items-center p-6 mx-auto">
        {/* IMAGE SECTION */}
        <div className="home-right-to-left flex-1 flex justify-center">
          <div className="image-wrapper relative">
            <span className="glow-ring"></span>

            <img
              ref={imageRef}
              src={moin}
              alt="Moin Uddin Software Engineer"
              className="profile-image relative z-10 w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-96 lg:h-96 object-cover object-top rounded-full shadow-lg dark:shadow-gray-900"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 text-center lg:text-left p-6">
          <h1 className="home-left-to-right text-5xl md:text-6xl lg:text-7xl font-bold">
            Hello I am <br />
            <span className="text-primary">Moin</span> Uddin
          </h1>

          <p className="home-left-to-right mt-6 mb-8 text-xl lg:text-2xl">
            I am an enthusiastic <br />
            <span className="desc-text text-primary">Software Engineer</span>
            <span className="text-primary"> _</span> <br />
            I love coding in <br />
            <span className="text-primary">JavaScript & Python!</span>
          </p>

          <div className="home-left-to-right flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1XmhZDjkT3xf4yWwtaVPVImYwKB1I8d1d"
              className="px-8 py-3 bg-primary text-white rounded flex items-center gap-2"
            >
              <Download className="download-button-icon" />
              Download Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="px-8 py-3 border rounded flex items-center gap-2"
            >
              <MailSearch />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
