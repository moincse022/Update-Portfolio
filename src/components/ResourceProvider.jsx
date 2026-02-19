import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { createContext, useRef, useState } from "react";

export const ResourceContext = createContext({});

gsap.registerPlugin(ScrollToPlugin);

const ResourceProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("lime");
  const [themeMode, setThemeMode] = useState("");
  const [active, setActive] = useState("#about");

  const el = useRef();
  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".icon-motion", {
        rotate: -5,
        repeat: -1,
        ease: "bounce.inOut",
        yoyo: true,
      });

      gsap.from(
        ".pointer",
        { opacity: 0, repeat: -1, yoyo: true, ease: "power1.inOut" }
      );
    },
    { scope: el }
  );
  const scrollTo = contextSafe((href) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: href,
        offsetY: 85,
        autoKill: true,
      },
    });
    setActive(href);
  });

  return (
    <ResourceContext.Provider
      value={{
        themeColor,
        setThemeColor,
        themeMode,
        setThemeMode,
        active,
        setActive,
        scrollTo,
      }}
    >
      <main ref={el} className="main overflow-x-hidden">
        {children}
      </main>
    </ResourceContext.Provider>
  );
};

export default ResourceProvider;
