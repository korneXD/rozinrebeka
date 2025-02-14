import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="container scroll-mt-2 mx-auto px-4 py-8 bg-latte rounded-3xl max-w-5xl my-12 shadow-xs shadow-latte-dark"
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
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/arc.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svYXJjLmpwZyIsImlhdCI6MTczOTQ3NzczMywiZXhwIjo0ODkzMDc3NzMzfQ.bPlrsrbzrRvo32lrmLn8y45SeoHXcxg0lIVh040wjFM",
          },
          {
            name: "Sminktetoválás",
            price: "30.000 Ft-tól",
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/tetko.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svdGV0a28uanBnIiwiaWF0IjoxNzM5NDc3NTgwLCJleHAiOjQ4OTMwNzc1ODB9.oghrfKEU3M2mig1G2kOgo4qnczdp7MYlOEyjp4l6lMY",
          },
          {
            name: "Smink",
            price: "8.000 Ft-tól",
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/smink.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svc21pbmsuanBnIiwiaWF0IjoxNzM5NDc3NzEyLCJleHAiOjQ4OTMwNzc3MTJ9.3yUFkvEvhC2Qgk3fHIYWqJZNID15xqwx89VXIOr5_AM",
          },
        ].map((service, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative mb-4 overflow-hidden rounded-xl bg-beige aspect-3/4 shadow-xs shadow-latte-dark border-2 border-beige">
              <div className="absolute inset-0 flex items-center justify-center text-cappuccino/30">
                <Image
                  src={service.src}
                  className="w-full h-full object-cover"
                  height={600}
                  width={600}
                  priority={true}
                  draggable={false}
                  alt={service.name}
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
