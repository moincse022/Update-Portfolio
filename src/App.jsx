import { lazy, Suspense, useEffect, useState } from "react";
import "./index.css";

import Loader from "./components/Loader";
import ResourceProvider from "./components/ResourceProvider";
import { ReactLenis } from '@studio-freight/react-lenis';

const Header = lazy(() => import("./components/Header"));
const Banner = lazy(() => import("./components/Banner"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <InitialLoader key={1} />;

  return (
    <Suspense fallback={<InitialLoader key={2} />}>
      <ReactLenis root>
        <ResourceProvider>
          <Header />
          <Banner />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </ResourceProvider>
      </ReactLenis>
    </Suspense>
  );
}

function InitialLoader() {
  return (
    <div className="mt-36">
      <Loader />
    </div>
  );
}
