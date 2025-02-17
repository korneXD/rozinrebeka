import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section
      className="bg-latte shadow-secondary-foreground container mx-auto my-12 w-full max-w-md scroll-mt-10 rounded-3xl px-4 py-16 shadow-sm md:max-w-4xl"
      id="contact"
    >
      <div className="grid items-start justify-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-cappuccino font-serif text-4xl">
            Lépj kapcsolatba <span className="font-serif italic">Velem!</span>
          </h3>
          <p className="text-cappuccino/80">
            Várom üzeneted! Írj itt, vagy használd elérhetőségeimet.
          </p>
          <form className="flex w-full flex-col items-start space-y-4 md:w-[60%]">
            <input
              placeholder="Neved"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full rounded-lg border px-2 py-1 outline-hidden"
            />
            <input
              type="email"
              placeholder="Email címed"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full rounded-lg border px-2 py-1 outline-hidden"
            />
            <textarea
              placeholder="Üzeneted nekem"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full resize-none rounded-lg border px-2 py-1 outline-hidden"
              rows={4}
            />
            <button className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark text-md mx-auto w-fit rounded-full px-4 py-2 font-sans font-bold shadow-md">
              Küldd el nekem!
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-cappuccino font-serif text-4xl">
            {" "}
            Elérhetőségeim
          </h3>
          <p className="text-cappuccino/80">Időpontfoglalás után itt várlak:</p>
          <div className="flex w-fit flex-col items-center justify-center space-y-4 text-left">
            <div className="text-cappuccino flex w-full items-center space-x-3">
              <MapPin className="h-5 w-5" />
              <span>Izsák, Hungary</span>
            </div>
            <div className="text-cappuccino flex w-full items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>+36 70 234 5678</span>
            </div>
            <div className="text-cappuccino flex w-full items-center space-x-3">
              <Mail className="h-5 w-5" />
              <span>contact@rebeka.hu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
