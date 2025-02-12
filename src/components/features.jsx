import { Leaf, Shield, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Tiszta összetevők",
            descr: "Tapasztald meg a szépség és a wellness legjavát!",
            icon: Leaf,
          },
          {
            title: "Szakértelem",
            descr:
              "Élvezd a szépség és a wellness professzionális gondoskodását!",
            icon: Shield,
          },
          {
            title: "Relaxáció",
            descr: "Fedezd fel a teljes kikapcsolódás élményét!",
            icon: Sparkles,
          },
        ].map(({ title, descr, icon: Icon }) => (
          <div
            key={title}
            className="p-8 text-center bg-latte border-none shadow-sm shadow-latte-dark hover:shadow-md transition-shadow cursor-pointer rounded-3xl"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-beige flex items-center justify-center">
              <Icon className="w-8 h-8 text-cappuccino" />
            </div>
            <h4 className="font-serif text-xl text-cappuccino mb-2">{title}</h4>
            <p className="text-cappuccino/60">{descr}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
