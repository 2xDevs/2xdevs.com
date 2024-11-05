import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/logo";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import { FEATURES_DATA, SERVICES_DATA, WORK_DATA } from "@/static/data";
import {
  type FeatureType,
  type ServicesType,
  type WorkType,
} from "@/types/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section id="Hero" className="py-12">
        <div className="mx-auto max-w-screen-lg space-y-20 px-4">
          <div className="text-center">
            <BlurFade delay={0.25} inView>
              <Link href={"/"} className="flex items-center justify-center">
                <Logo className="mr-2 size-16 md:size-24 lg:size-32" />
              </Link>
            </BlurFade>
            <div className="mx-auto flex flex-col gap-10">
              <BlurFade delay={0.3} inView>
                <h1 className="text-4xl font-bold md:text-7xl">
                  Web Apps that Make Sense.
                </h1>
              </BlurFade>
              <BlurFade delay={0.35} inView>
                <p className="font-regular mx-auto max-w-3xl text-base tracking-wide text-muted-foreground">
                  We build websites and web apps that truly convert. At 2xDevs,
                  we deliver striking designs and powerful functionality—crafted
                  by dedicated founders. The perfect starting point for your
                  next project, whether it’s a fresh website, custom web app, or
                  freelance support.
                </p>
              </BlurFade>
            </div>
          </div>
          <div className="relative mx-auto mb-20 grid w-full grid-cols-1 gap-10 px-2 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {FEATURES_DATA.map((data, index) => (
              <BlurFade key={index} delay={0.4 + index * 0.05} inView>
                <Features
                  Icon={data.Icon}
                  title={data.title}
                  description={data.description}
                />
              </BlurFade>
            ))}
          </div>
          <div className="text-center">
            <BlurFade delay={0.45} inView>
              <Button className="text-base font-medium" size="lg">
                <Link href={"#work"}>Explore Work</Link>
              </Button>
            </BlurFade>
          </div>
        </div>
      </section>
      <BlurFade delay={0.45} inView>
        <hr className="w-full" />
      </BlurFade>

      <section id="work" className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-8">
          <div className="space-y-2 text-center">
            <BlurFade delay={0.45} inView>
              <h2 className="text-4xl font-bold text-primary">Recent Work</h2>
            </BlurFade>
            <BlurFade delay={0.45} inView>
              <p>
                A look at some of the amazing websites that we&apos;ve built
                recently.
              </p>
            </BlurFade>
          </div>
          <div>
            {WORK_DATA.map((data, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                <Work
                  title={data.title}
                  description={data.description}
                  link={data.link}
                  imageSrc={data.imageSrc}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <BlurFade delay={0.25} inView>
        <hr className="w-full" />
      </BlurFade>

      <section id="services" className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-8">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <BlurFade delay={0.25} inView>
              <h2 className="text-4xl font-semibold">
                We handle just about everything!
              </h2>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="text-lg text-muted-foreground">
                We handle everything from design to deployment to get your
                website shipped and ready to go!
              </p>
            </BlurFade>
          </div>
          <div className="z-30 grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((data, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                <Services
                  Icon={data.Icon}
                  title={data.title}
                  description={data.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <BlurFade delay={0.25} inView>
          <div className="relative mx-auto flex size-full max-w-screen-lg flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <div className="z-10 mb-6 space-y-5 text-center">
              <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-5xl">
                Let&apos;s build your website today!
              </p>
              <p className="mx-auto max-w-lg text-lg">
                Contact us, and we&apos;ll respond within 24 hours. We mean
                it—your project is our priority!
              </p>
              <ContactForm variant={"outline"} size={"lg"} rainbow={true} />
            </div>
            <GridPattern
              width={32}
              height={32}
              x={-1}
              y={-1}
              className={cn(
                "z-0 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]",
              )}
            />
          </div>
        </BlurFade>
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
        <div className="mt-4 max-w-full text-sm leading-6 text-muted-foreground lg:max-w-xs">
          <p>{description}</p>
        </div>
        <hr className="w-6" />
        <Button asChild className="group w-fit">
          <Link target="_blank" href={link}>
            Live Preview
            <ArrowUpRight
              className="-me-1 ms-1 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>
      <div className="mt-10 flex h-fit flex-1 flex-col space-y-6 overflow-x-auto sm:flex-row sm:space-x-6 sm:space-y-0 lg:mt-0">
        <div className="relative max-w-full flex-1 rounded-xl border border-border">
          <Image
            height={1080}
            width={1920}
            alt="image"
            src={imageSrc[0]}
            className="aspect-video h-full w-full rounded-xl object-cover object-center blur-0 transition duration-300"
          />
        </div>
        <div className="relative max-w-full flex-1 rounded-xl border border-border">
          <Image
            height={1080}
            width={1920}
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
    <div className="flex flex-col gap-10 rounded-lg border bg-background">
      <MagicCard
        className="flex flex-col gap-10 rounded-lg border !bg-background p-8"
        gradientColor={"#1d4ed8"}
      >
        <div>
          <Icon />
          <h3 className="mb-2 mt-6 font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </MagicCard>
    </div>
  );
};
