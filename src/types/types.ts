import { type LucideProps } from "lucide-react";

export type FeatureType = {
  Icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
};

export type WorkType = {
  title: string;
  description: string;
  link: string;
  imageSrc: [string, string];
};

export type ServicesType = {
  Icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
};
