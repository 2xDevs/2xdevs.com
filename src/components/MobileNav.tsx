"use client";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import {
  ArrowUpRight,
  Github,
  Home,
  Layers,
  MenuIcon,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="flex flex-col pt-8">
          <ScrollArea className="my-4 h-full pb-10">
            <div className="flex flex-col items-start space-y-1">
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <Link href="#work">
                    <Home size={20} />
                    Work
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <Link href="#services">
                    <Layers size={20} />
                    Services
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <Link
                    className="group"
                    target="_blank"
                    href="https://blog.2xdevs.com"
                  >
                    <Newspaper size={20} />
                    Blog
                    <ArrowUpRight
                      className="-me-1 -ms-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </ScrollArea>
          <SheetClose asChild>
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
          </SheetClose>
          <ContactForm className="rounded-full" />
        </SheetContent>
      </Sheet>
    </>
  );
}
