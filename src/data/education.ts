import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "1. Dataset Collection & Preparation",
    organisation: {
      name: "Roboflow and Kaggle",
      href: "https://roboflow.com/",
    },
    date: "Step 1",
    location: "Cloud-based Tool",
    description:
      "We collected and annotated images of crops and weeds using Roboflow. The dataset was augmented to handle various lighting, background, and weed types, ensuring model robustness.",
  },
  {
    title: "2. Model Training using YOLOv8 and CNN",
    organisation: {
      name: "Ultralytics",
      href: "https://github.com/ultralytics/yolov8",
    },
    date: "Step 2",
    location: "Python + Google Colab",
    description:
      "We trained a YOLOv8 object detection model on the prepared dataset, enabling it to distinguish between weeds and crops with high accuracy and real-time performance.",
  },
  {
    title: "3. Web Integration & Deployment",
    organisation: {
      name: "Next.js + FastAPI",
      href: "https://nextjs.org/",
    },
    date: "Step 3",
    location: "Web Platform",
    description:
      "The trained model was deployed via an API and integrated into a user-friendly web interface. Farmers can upload images and instantly detect weed presence to take necessary action.",
  },
];
