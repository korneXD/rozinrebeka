import {
  Star,
  Sparkles,
  Leaf,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-serif text-cappuccino">Rozin Rebeka</h1>
        <nav className="hidden md:flex space-x-6 text-cappuccino/80">
          <a href="#" className="hover:text-cappuccino">
            Szolgáltatások
          </a>
          <a href="#" className="hover:text-cappuccino">
            Termékek
          </a>
          <a href="#" className="hover:text-cappuccino">
            Elérhetőség
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-cappuccino">
              Fókuszban a <span className="font-serif italic">Bőröd.</span>
            </h2>
            <p className="text-cappuccino/80 text-lg">
              Luxus bőrápolási kezelések, amelyek kiemelik egyedi szépséged!
            </p>
            <button className="bg-cappuccino font-sans font-bold py-2 text-cream hover:bg-cappuccino-light rounded-full px-8 shadow-md shadow-latte-dark">
              Időpontfoglalás
            </button>
          </div>
          <div className="lg:col-span-2">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-latte rounded-full shadow-md shadow-latte-dark"></div>
              <div className="absolute inset-2 bg-beige rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5RICCzNqeZ6qjChuStABQdM7GDi92NOYrcfvX"
                  className="w-full h-full object-cover"
                  height={200}
                  width={200}
                  alt="kep"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cappuccino rounded-full flex items-center justify-center shadow-sm shadow-latte-dark">
                <span className="text-cream font-serif text-xl">Rebeka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-8 bg-latte rounded-3xl max-w-5xl my-12 shadow-sm shadow-latte-dark">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-4xl font-serif text-cappuccino mb-4">
            Szolgáltatásaim
          </h3>
          <p className="text-cappuccino/80">
            Élvezd a prémium szépségkezeléseimet, amelyeket kizárólag neked
            nyújtok!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Tisztító arckezelések",
              price: "14.500 Ft-tól",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu57Rvp5eGEz8rSsvWcbT5ZupBa0qF71CD2Uf9m",
            },
            {
              name: "Sminktetoválás",
              price: "30.000 Ft-tól",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu58v1Vn5RYeL7MXAqjKHNlTCOgVW19psIoJ3km",
            },
            {
              name: "Smink",
              price: "8.000 Ft-tól",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5COJze9Xtz2dwGHchOQUSJnmjlfBRgeTLYuM5",
            },
          ].map((service, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-xl bg-beige aspect-[3/4] shadow-sm shadow-latte-dark border-2 border-beige">
                <div className="absolute inset-0 flex items-center justify-center text-cappuccino/30">
                  <Image
                    src={service.src}
                    className="w-full h-full object-cover"
                    height={200}
                    width={200}
                    alt="kep"
                  />
                </div>
              </div>
              <h4 className="font-serif text-xl text-cappuccino">
                {service.name}
              </h4>
              <p className="text-cappuccino/60">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
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
              <h4 className="font-serif text-xl text-cappuccino mb-2">
                {title}
              </h4>
              <p className="text-cappuccino/60">{descr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Munkáim Section */}
      <section className="container max-w-5xl mx-auto px-4 py-8 bg-latte rounded-3xl my-12 shadow-sm shadow-latte-dark">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-4xl font-serif text-cappuccino mb-4">Munkáim</h3>
          <p className="text-cappuccino/80">
            Néhány eddigi alkotásom a sok közül!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Szemöldök",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5oYrV41KvOAaQC4IDLtPMgpExjFW85wiVcler",
            },
            {
              name: "Előtte - Utána",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5s0zL7rN3CElTvtrMeN2DkgmoHx7F6fO4Y9hW",
            },
            {
              name: "Ajak korrekció",
              src: "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu53mZQct5LpfVjOloBU684GaX5PWF0wzYD71gb",
            },
          ].map((service, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-xl bg-beige aspect-[3/4] shadow-sm shadow-latte-dark border-2 border-beige">
                <div className="absolute inset-0 flex items-center justify-center text-cappuccino/30">
                  <Image
                    src={service.src}
                    className="w-full h-full object-cover"
                    height={200}
                    width={200}
                    alt="kep"
                  />
                </div>
              </div>
              <h4 className="font-serif text-xl text-cappuccino">
                {service.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 relative max-w-5xl">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h3 className="font-serif italic text-3xl text-cappuccino">
            Vélemények Rólam
          </h3>
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-latte-dark bg-beige">
              <Image
                src="https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5yhQdo0n6OLzfRil0nGtBTo4mZPF2QqjagWEc"
                className="w-full h-full object-cover"
                height={200}
                width={200}
                alt="kep"
              />
            </div>
          </div>
          <div className="flex justify-center gap-1 text-latte-dark">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10"></div>
            <p className="text-cappuccino/80 text-lg px-20">
              &apos;Az arckezelés egyszerűen isteni volt. A bőröm megújult és
              ragyogó. Ajánlom mindenkinek, aki szeretné felfrissíteni és
              megújítani bőrét!
            </p>
          </div>
          <p className="font-serif text-cappuccino italic">Zsofia B.</p>
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto my-12 px-4 py-16 bg-latte rounded-3xl max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-4xl font-serif text-cappuccino">
              Lépj kapcsolatba <span className="font-serif italic">Velem!</span>
            </h3>
            <p className="text-cappuccino/80">
              Várom üzeneted! Írj itt, vagy használd elérhetőségeimet.
            </p>
            <form className="space-y-4 flex items-start flex-col max-w-[60%]">
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
            <p className="text-cappuccino/80">
              Időpontfoglalás után itt várlak:
            </p>
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

      {/* Footer */}
      <footer className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-cappuccino/80">
            <div>
              <h5 className="font-medium text-cappuccino mb-4">
                Elérhetőségeim
              </h5>
              <p>+36 70 234 5678</p>
              <p>contact@rebeka.hu</p>
            </div>
            <div>
              <h5 className="font-medium text-cappuccino mb-4">Termékek</h5>
              <a href="#" className="hover:text-cappuccino">
                Használd a linkem
              </a>
            </div>
            <div>
              <h5 className="font-medium text-cappuccino mb-4">Szalon</h5>
              <p>Izsák, Hungary</p>
            </div>
          </div>
          <p className="text-center text-cappuccino/60 underline">
            Árlista megtekintése
          </p>
          <div className="mt-8 pt-8 border-t border-cappuccino/10 text-center text-sm text-cappuccino/60">
            2025 - Rozin Rebeka
          </div>
        </div>
      </footer>
    </div>
  );
}
