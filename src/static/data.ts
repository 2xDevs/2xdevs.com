import {
  type FeatureType,
  type ServicesType,
  type WorkType,
} from "@/types/types";
import {
  BookmarkCheck,
  Code,
  Pen,
  PencilRuler,
  Rocket,
  SquareTerminal,
  Users,
} from "lucide-react";

export const FEATURES_DATA: FeatureType[] = [
  {
    Icon: PencilRuler,
    title: "Modern Web Apps",
    description:
      "Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance.",
  },
  {
    Icon: PencilRuler,
    title: "Tailored design",
    description:
      "Custom designs tailored to your needs, providing you with a Figma file that is easy to navigate and comfortable to work with.",
  },
  {
    Icon: Users,
    title: "Built by experts",
    description:
      "We’re a team of senior software engineers with experience building high-scale web apps. Trust 2xDevs to bring your project to life.",
  },
];

export const WORK_DATA: WorkType[] = [
  {
    title: "Project Store",
    description:
      "Project Store is an e-commerce platform by 2xdevs, featuring Razorpay integration for secure payments and a user-friendly design, ensuring a seamless shopping experience.",
    link: "https://projectstore.2xdevs.com",
    imageSrc: ["/projectStore-1.png", "/projectStore-2.png"],
  },
  {
    title: "RecapTube",
    description:
      "RecapTube is a YouTube video summarizer developed by 2xdevs that uses Google Gemini API to quickly generate concise summaries of videos, helping users save time while staying informed.",
    link: "https://recaptube.2xdevs.com",
    imageSrc: ["/recaptube-1.png", "/recaptube-2.png"],
  },
  {
    title: "Blog",
    description:
      "The blog at 2xdevs features insightful articles on development, technology trends, and project showcases, providing valuable knowledge and resources for developers and enthusiasts alike.",
    link: "https://blog.2xdevs.com",
    imageSrc: ["/blog-1.png", "/blog-2.png"],
  },
];

export const SERVICES_DATA: ServicesType[] = [
  {
    Icon: SquareTerminal,
    title: "Web App development",
    description:
      "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
  },
  {
    Icon: Pen,
    title: "Web Design",
    description:
      "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
  },
  {
    Icon: Code,
    title: "Full-Stack Development",
    description:
      "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
  },
  {
    Icon: Rocket,
    title: "Deployments and Hosting",
    description:
      "Get your website out there in the world, where it belongs, with our lightning-fast deployment services. Rely on our support to keep your site running effortlessly.",
  },
  {
    Icon: Code,
    title: "Maintenence",
    description:
      "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
  },
  {
    Icon: BookmarkCheck,
    title: "And everything else",
    description:
      "And everything else. From e-commerce sites and landing pages to back-end applications and dashboards, you name it, we’ve done it—and we can do it for you!",
  },
];
