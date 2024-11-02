"use client";

import { ContactForm } from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="mr-4 flex w-full justify-between gap-4">
      <Link href={"/"} className="flex items-center">
        <Icons.logo className="mr-2 h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <h1 className="text-base font-medium md:text-2xl md:font-bold">
          2xdevs
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
            <Link target="_blank" href="https://blog.2xdevs.com">
              Blog
            </Link>
          </Button>
          <ContactForm className="rounded-full" />
        </nav>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <ModeToggle />
      </div>
    </div>
  );
}
