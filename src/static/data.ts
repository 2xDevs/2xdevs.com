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
      "We are a team of Senior Software Engineers that have built and developed web apps at scale. You can trust us.",
  },
];

export const WORK_DATA: WorkType[] = [
  {
    title: "Project Store",
    description:
      "Practice the most popular coding questions asked in a technical interview round. Used by 1000+ registered users preparing for technical interviews.",
    link: "https://projectstore.2xdevs.com",
    imageSrc: ["/projectStore-1.png", "/projectStore-2.png"],
  },
  {
    title: "RecapTube",
    description:
      "Practice the most popular coding questions asked in a technical interview round. Used by 1000+ registered users preparing for technical interviews.",
    link: "https://recaptube.2xdevs.com",
    imageSrc: ["/recaptube-1.png", "/recaptube-2.png"],
  },
  {
    title: "Blog",
    description:
      "Practice the most popular coding questions asked in a technical interview round. Used by 1000+ registered users preparing for technical interviews.",
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
    Icon: Rocket,
    title: "Deployments and Hosting",
    description:
      "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
  },
  {
    Icon: Code,
    title: "Maintenence",
    description:
      "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
  },
  {
    Icon: Code,
    title: "Full-Stack Development",
    description:
      "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
  },
  {
    Icon: BookmarkCheck,
    title: "And everything else",
    description:
      "Ecommerce, Landing pages, Back-end heavy, Dashboards. You name it, we've done it AND we'll do it for you.",
  },
];
