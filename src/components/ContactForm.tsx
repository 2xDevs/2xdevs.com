"use client";

import { Button, type buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = ({
  variant = "default",
  size = "default",
  className,
}: VariantProps<typeof buttonVariants> & { className?: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = (open: boolean) => {
    if (!open) setDialogOpen(false);
  };

  const formAction = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      toast.success("Message Sent!", {
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    } catch (error) {
      toast.error("Oops, something went wrong!", {
        description:
          "We're sorry, it seems like something went wrong. Please try again later.",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        className={className}
        size={size}
        variant={variant}
      >
        Contact Us
      </Button>
      <Dialog open={dialogOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl leading-none">
              Contact Us
            </DialogTitle>
            <DialogDescription>
              Send us a message and We&apos;ll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction} className="space-y-6">
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
                  required
                  className="max-h-28 min-h-24 resize-none"
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
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
    </>
  );
};

export { ContactForm };
