import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="container scroll-mt-2 mx-auto px-4 py-8 bg-latte rounded-3xl max-w-5xl my-12 shadow-sm shadow-latte-dark"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-4xl font-serif text-cappuccino mb-4">
          Szolgáltatásaim
        </h3>
        <p className="text-cappuccino/80 text-lg">
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
                  height={600}
                  width={600}
                  alt="kep"
                />
              </div>
            </div>
            <h4 className="font-serif text-xl text-cappuccino">
              {service.name}
            </h4>
            <p className="text-cappuccino/60 textl-xl">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
