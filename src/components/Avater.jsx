import Logo from "/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Avater({ height, logoAC = "", textAC = "" }) {
  const el = useRef();

  useGSAP(
    () => {
      gsap.to(".logo-icon", {
        rotate: 3,
        scale: 1.075,
        repeat: -1,
        ease: "bounce.inOut",
        yoyo: true,
        repeatDelay: 1,
      });

      // gsap.to(".text", {
      //   text: "Md. Noor E Musa",
      //   repeat: -1,
      //   ease: "bounce.inOut",
      //   yoyo: true,
      //   repeatDelay: 2,
      //   duration: 1,
      // });
    },
    { scope: el },
  );

  return (
    <div ref={el} className="inline-flex flex-1 items-center space-x-2 z-30">
      <img
        src={Logo}
        className={`${logoAC} logo-icon origin-center -rotate-3 rounded-full`}
        style={{ height: height }}
      />
      <span className={`${textAC} text font-bold text-primary`}>
        Moin uddin
      </span>
    </div>
  );
}
