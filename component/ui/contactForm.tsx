"use client";

import { Button } from "./button";
import { Card, CardContent } from "./card";

const ContactForm = () => {
  return (
    <Card>
      <CardContent className="pt-6">
      <p className="text-muted-foreground max-w-2xl mx-auto text-center">
              Have questions or ready to schedule an appointment? Reach out to us today.
            </p>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </label>
              <input id="first-name" className="p-2 border rounded-md" placeholder="John" suppressHydrationWarning />
            </div>
            <div className="grid gap-2">
              <label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </label>
              <input id="last-name" className="p-2 border rounded-md" placeholder="Doe" suppressHydrationWarning />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input id="email" type="email" className="p-2 border rounded-md" placeholder="john.doe@example.com" suppressHydrationWarning />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <input id="phone" type="tel" className="p-2 border rounded-md" placeholder="(555) 123-4567" suppressHydrationWarning />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea id="message" className="p-2 border rounded-md min-h-[100px]" placeholder="Tell us about your child and how we can help..." suppressHydrationWarning></textarea>
          </div>
          <Button type="submit" className="w-full" suppressHydrationWarning>
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
