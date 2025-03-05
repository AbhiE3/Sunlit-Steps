"use client";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid gap-6 bg-amber-50 h-full">
      <h2 className="text-3xl font-bold mt-8 text-center">Contact Us</h2>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Location</h3>
          <p className="text-muted-foreground">123 Therapy Lane, Kidsville, CA 90210</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-muted-foreground">(555) 123-4567</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Hours</h3>
          <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
          <p className="text-muted-foreground">Saturday: 9am - 1pm</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Appointments</h3>
          <p className="text-muted-foreground">Schedule online or call us directly</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
