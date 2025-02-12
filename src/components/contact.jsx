import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="container scroll-mt-10 mx-auto my-12 px-4 py-16 bg-latte rounded-3xl max-w-5xl"
      id="contact"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start justify-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-serif text-cappuccino">
            Lépj kapcsolatba <span className="font-serif italic">Velem!</span>
          </h3>
          <p className="text-cappuccino/80">
            Várom üzeneted! Írj itt, vagy használd elérhetőségeimet.
          </p>
          <form className="space-y-4 flex items-start flex-col w-[60%]">
            <input
              placeholder="Neved"
              className="bg-cream border-cappuccino/20 w-full py-1 px-2 rounded-lg border border-cappuccino outline-none text-cappuccino"
            />
            <input
              type="email"
              placeholder="Email címed"
              className="bg-cream border-cappuccino/20 w-full py-1 px-2 rounded-lg border border-cappuccino outline-none text-cappuccino"
            />
            <textarea
              placeholder="Üzeneted nekem"
              className="bg-cream border-cappuccino/20 resize-none w-full py-1 px-2 rounded-lg border border-cappuccino outline-none text-cappuccino"
              rows={4}
            />
            <button className="bg-cappuccino font-sans font-bold py-2 text-cream hover:bg-cappuccino-light rounded-full px-4 shadow-md shadow-latte-dark text-md">
              Küldd el nekem!
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <h3 className="text-4xl font-serif text-cappuccino">
            {" "}
            Elérhetőségeim
          </h3>
          <p className="text-cappuccino/80">Időpontfoglalás után itt várlak:</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-cappuccino">
              <MapPin className="w-5 h-5" />
              <span>Izsák, Hungary</span>
            </div>
            <div className="flex items-center space-x-3 text-cappuccino">
              <Phone className="w-5 h-5" />
              <span>+36 70 234 5678</span>
            </div>
            <div className="flex items-center space-x-3 text-cappuccino">
              <Mail className="w-5 h-5" />
              <span>contact@rebeka.hu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
