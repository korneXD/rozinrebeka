"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import sendEmail from "@/emails/sendEmail";
import Link from "next/link";

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
    } catch (error) {
      console.error(error);
    }
  };

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
              href="https://www.google.hu/maps/place/Rozin+Rebeka+Kozmetikus+%C3%A9s+Sminkes/@46.7992841,19.3585035,573m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4743cb0030eb7497:0x468a5ab2d0d5dd99!8m2!3d46.7992841!4d19.3610784!16s%2Fg%2F11x0ggf46q?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <MapPin className="h-5 w-5" />
              <p>Izsák Arany János utca 2</p>
            </Link>
            <Link
              href="tel:+36 20 217 0977"
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <Phone className="h-5 w-5" />
              <p>+36 20 217 0977</p>
            </Link>
            <Link
              href="rebeka.kozmetikus88@gmail.com"
              className="text-cappuccino flex w-full items-center space-x-3"
            >
              <Mail className="h-5 w-5" />
              <p>rebeka.kozmetikus88@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
