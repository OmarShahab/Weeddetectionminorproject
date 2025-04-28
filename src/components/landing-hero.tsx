import { useEffect, usegit remote add origin https://github.com/your-username/your-new-repository.git
  Ref, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
      <div className="mx-auto max-w-7xl">
  <AnimatePresence>
    <FadeUp key="title-main" duration={0.6}>
      <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
        Weed Detection using YOLOv8
      </h1>
      <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
        Minor Project Made By:
      </span>
      <div className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200 md:text-2xl">
        Mohammad Omar Shahab 22102233<br />
        Shivyansh Garg 22102031<br />
        <span className="block mt-2">Under the Guidance of Prof. Richa Gupta</span>
      </div>
    </FadeUp>
    <FadeUp key="description" duration={0.6} delay={0.2}>
  <div className="mt-8 max-w-3xl text-base font-semibold text-justify text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
    Our project uses YOLOv8 for real-time, accurate weed detection, integrated into a web platform for easy image-based predictions. It reduces manual labor and pesticide use, promoting sustainable farming. The system continuously learns and aims to evolve into a drone-assisted solution for precision agriculture.
  </div>
</FadeUp>
  </AnimatePresence>
</div>

      </div>
    </motion.section>
  );
}
