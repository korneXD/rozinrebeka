"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useState, useRef } from "react";
import sendEmail from "@/emails/sendEmail";
import Link from "next/link";
import { toast } from "sonner";
import { email, maps, tel } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      toast.success("Hamarosan válaszolok! :)");
    } catch (error) {
      console.error(error);
      toast.error("Valami hiba történt! :(");
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
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
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-start space-y-4 md:w-[60%]"
          >
            <input
              required
              ref={nameRef}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Neved"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full rounded-lg border px-2 py-1 outline-hidden"
            />
            <input
              required
              ref={emailRef}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder="Email címed"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full rounded-lg border px-2 py-1 outline-hidden"
            />
            <textarea
              required
              ref={messageRef}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Üzeneted nekem"
              className="bg-cream border-cappuccino/20 text-cappuccino w-full resize-none rounded-lg border px-2 py-1 outline-hidden"
              rows={4}
            />
            <button
              type="submit"
              className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark text-md mx-auto w-fit cursor-pointer rounded-full px-4 py-2 font-sans font-bold shadow-md"
            >
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
            <Link
              target="_blank"
              href={maps}
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <MapPin className="h-5 w-5" />
              <p>Izsák Arany János utca 2</p>
            </Link>
            <Link
              href={tel}
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <Phone className="h-5 w-5" />
              <p>+36 20 217 0977</p>
            </Link>
            <Link
              href={email}
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <Mail className="h-5 w-5" />
              <p>rebeka.kozmetikus88@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
