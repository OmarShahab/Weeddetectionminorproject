import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      {/* Text Content Only */}
      <div className="w-full lg:w-full">
        <AnimatePresence>
          <FadeUp key="title" duration={0.6}>
            <h1 className="text-5xl font-bold text-accent sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl">
              Automated Weed Detection using YOLOv8
            </h1>
          </FadeUp>

          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Our project leverages the YOLOv8 object detection model to identify and classify weeds in agricultural fields in real-time. Trained on a robust, augmented dataset via Roboflow, it ensures accuracy across diverse lighting and crop conditions.
            </p>
          </FadeUp>

          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Integrated into a web platform, users can upload images and get instant predictions. This helps reduce manual labor, optimize pesticide usage, and promotes sustainable farming.
            </p>
          </FadeUp>

          <FadeUp key="description-3" duration={0.6} delay={0.6}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              With continuous retraining, the system adapts to new weed species, and our long-term vision includes drone-assisted weed detection and removal for precision agriculture.
            </p>
          </FadeUp>

          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <span className="text-lg font-medium text-foreground">
              Built with Next.js, YOLOv8 and CNN
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
