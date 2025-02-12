import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
