"use client";

import { ContactForm } from "@/components/ContactForm";
import { NavLogo } from "@/components/logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="mr-4 flex w-full justify-between gap-4">
      <Link href={"/"} className="flex items-center">
        <NavLogo className="mr-2 h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <h1 className="text-base font-medium md:text-2xl md:font-bold">
          2xDevs
        </h1>
      </Link>
      <div className="hidden items-center gap-2 lg:flex">
        <nav className="flex sm:space-x-2">
          <Button asChild variant={"ghost"}>
            <Link href="#work">Work</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href="#services">Services</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link
              target="_blank"
              href="https://blog.2xdevs.com"
              className="group"
            >
              Blog
              <ArrowUpRight
                className="-me-1 ms-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </Button>
          <ContactForm className="rounded-full" />
        </nav>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <ModeToggle />
        <Button
          className="group rounded-full bg-foreground text-background"
          variant={"outline"}
          asChild
        >
          <Link href={"https://github.com/2xDevs"} target="_blank">
            <Github size={16} className="mr-1" />
            Github
          </Link>
        </Button>
      </div>
    </div>
  );
}
