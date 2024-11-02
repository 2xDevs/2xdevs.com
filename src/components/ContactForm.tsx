"use client";

import { Button, type buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type VariantProps } from "class-variance-authority";
import { useState } from "react";

const ContactForm = ({
  variant = "default",
  size = "default",
  className,
}: VariantProps<typeof buttonVariants> & { className?: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = (open: boolean) => {
    if (!open) setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setDialogOpen(true)}
          className={className}
          size={size}
          variant={variant}
        >
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl leading-none">
            Contact Us
          </DialogTitle>
          <DialogDescription>We will get back to you ASAP.</DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <div className="space-y-4 leading-none">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                required
                id="name"
                type="name"
                name="name"
                placeholder="john doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                required
                id="email"
                type="email"
                name="email"
                placeholder="example123@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="max-h-28 min-h-24 resize-none"
                id="message"
                placeholder=""
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { ContactForm };
