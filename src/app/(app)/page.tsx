import { ContactForm } from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { FEATURES_DATA, SERVICES_DATA, WORK_DATA } from "@/static/data";
import {
  type FeatureType,
  type ServicesType,
  type WorkType,
} from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section id="Hero" className="border-b py-12">
        <div className="mx-auto max-w-screen-lg space-y-20 px-4">
          <div className="text-center">
            <Link href={"/"} className="flex items-center justify-center">
              <Icons.logo className="mr-2 size-10 md:size-20 lg:size-32" />
            </Link>
            <div className="mx-auto flex flex-col gap-10">
              <h1 className="text-4xl font-bold md:text-7xl">
                Web Apps that Make Sense.
              </h1>
              <p className="font-regular mx-auto max-w-3xl text-base tracking-wide text-muted-foreground">
                We build website for your business that actually converts.
                Wonderfully designed, masterfully created websites and layouts,
                created by the founders of Google and Facebook. The ideal
                beginning stage for your next project.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mb-20 grid w-full grid-cols-1 gap-10 px-2 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {FEATURES_DATA.map((data, index) => (
              <Features
                key={index}
                Icon={data.Icon}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Button className="text-base font-medium" size="lg">
              <Link href={"#work"}>Explore Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="work" className="border-b py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold text-primary">Recent Work</h2>
            <p>
              A look at some of the amazing websites that we&apos;ve built
              recently.
            </p>
          </div>
          <div>
            {WORK_DATA.map((data, index) => (
              <Work
                key={index}
                title={data.title}
                description={data.description}
                link={data.link}
                imageSrc={data.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-8">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 className="text-4xl font-semibold">
              We handle just about everything!
            </h2>
            <p className="text-lg text-muted-foreground">
              We handle everything from design to deployment to get your website
              shipped and ready to go!
            </p>
          </div>
          <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((data, index) => (
              <Services
                key={index}
                Icon={data.Icon}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="relative mx-auto flex size-full max-w-screen-lg flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <div className="z-10 mb-6 space-y-5 text-center">
            <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter text-black dark:text-white">
              Let&apos;s build your website today!
            </p>
            <p className="mx-auto max-w-lg text-lg text-muted-foreground">
              Contact us and we will get back within 24 hours. We mean it. You
              saw the testimonials, right?
            </p>
            <ContactForm variant={"outline"} size={"lg"} />
          </div>
          <GridPattern
            width={32}
            height={32}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]",
            )}
          />
        </div>
      </section>
    </>
  );
}

const Features = ({ Icon, title, description }: FeatureType) => {
  return (
    <div className="flex flex-row items-start space-x-4">
      <div className="flex items-center rounded-xl border-2 border-ring p-2 shadow-sm">
        <Icon className="size-4" />
      </div>
      <div>
        <h2 className="mb-3 text-xl font-bold leading-none tracking-wide">
          {title}
        </h2>
        <h4 className="text-sm font-normal leading-6 text-muted-foreground">
          {description}
        </h4>
      </div>
    </div>
  );
};

const Work = ({ title, description, link, imageSrc }: WorkType) => {
  return (
    <div className="my-8 flex flex-col gap-4 py-2 lg:flex-row lg:py-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
          <p>{description}</p>
        </div>
        <hr className="w-6" />
        <Button asChild className="w-fit">
          <Link target="_blank" href={link}>
            Live Preview
          </Link>
        </Button>
      </div>
      <div className="mt-10 flex h-fit flex-1 flex-col space-y-6 overflow-x-auto sm:flex-row sm:space-x-6 sm:space-y-0 lg:mt-0">
        <div className="relative max-w-sm rounded-xl border border-gray-100">
          <Image
            height={100}
            width={300}
            alt="image"
            src={imageSrc[0]}
            className="aspect-video h-full w-full rounded-xl object-cover object-center blur-0 transition duration-300"
          />
        </div>
        <div className="relative max-w-sm rounded-xl border border-gray-100">
          <Image
            height={100}
            width={300}
            alt="image"
            src={imageSrc[1]}
            className="aspect-video h-full w-full rounded-xl object-cover object-center blur-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

const Services = ({ Icon, title, description }: ServicesType) => {
  return (
    <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
      <div>
        <Icon />
        <h3 className="mb-2 mt-6 font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
