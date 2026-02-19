import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import Avater from "./Avater";
import ThemeToggle from "./ThemeToggle";
import useResource from "../hooks/useResource";
import { useGSAP } from "@gsap/react";
import ThemeChanger from "./ThemeChanger";

const menuItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Technologies",
    href: "#technologies",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const { active, scrollTo } = useResource();

  const el = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(el.current, { y: -35, opacity: 0 })
        .from(".slide", { x: -35, opacity: 0, stagger: 0.05 })
        .from(".slidel", { scale: 0, opacity: 0 }, "<65%");

      tl.current = gsap
        .timeline({ paused: true })
        .from(".menu", { x: "100%", opacity: 0, ease: "expo.inOut" })
        .to(".open-x", { visibility: "hidden", rotate: 90 }, "<50%")
        .to(".close-x", { visibility: "visible", rotate: 0 }, "<")
        .from(".navlinks", { x: -35, opacity: 0, stagger: 0.1 }, "<50%")
        .from(".theme", { left: "-100%" }, "<");
      tl.current.totalDuration(0.6);

      /* toggle icon sun */
      gsap.to(".sun", {
        rotate: 360,
        repeat: -1,
        duration: 4,
        ease: "linear",
      });
    },
    { scope: el }
  );

  return (
    <nav ref={el} className="fixed z-10 w-full backdrop-blur-2xl py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Avater height={38} logoAC="slide" textAc="slide" />

        <div className="hidden items-start lg:flex mr-10">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="slide">
                <a
                  href={item.href}
                  className={`text-sm font-semibold ${
                    active === item.href
                      ? "text-primary  "
                      : "text-gray-900 dark:text-gray-100"
                  } hover:text-middle`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ThemeToggle />
          <div className="slide z-30 relative h-6 w-6 lg:hidden">
            <Menu
              onClick={() => {
                tl.current.play();
              }}
              className="open-x absolute top-0 left-0 h-6 w-6 cursor-pointer text-primary"
            />

            <X
              onClick={() => {
                tl.current.reverse();
              }}
              className="close-x absolute invisible rotate-90 top-0 left-0 h-6 w-6 cursor-pointer text-primary"
            />
          </div>

          <div className="menu absolute top-0 left-0 inset-x-0 p-1 z-20 lg:hidden">
            <div className="divide-y-2 divide-middle rounded-lg bg-gray-100 dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="mt-16">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(item.href);
                          tl.current.reverse();
                        }}
                        className="navlinks -m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-nav-hover"
                      >
                        <span
                          className={`text-base mx-auto font-medium ${
                            active === item.href
                              ? "text-primary  "
                              : "text-gray-900 dark:text-gray-100"
                          } `}
                        >
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed theme z-20 top-[110%] lg:!left-[0%] ">
        <ThemeChanger />
      </div>
    </nav>
  );
}
