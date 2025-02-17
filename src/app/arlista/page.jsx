import Image from "next/image";
import Link from "next/link";

export default function Arlista() {
  const arlista = [
    {
      title: "Arckezelések",
      descr: "Bőrtípusnak megfelelő arckezelés masszázzsal (60perc)",
      price: "12000ft",
    },
    {
      title: "",
      descr: "Luxus arckezelés masszázzsal alga pakolás (80perc)",
      price: "15000ft",
    },
    {
      title: "",
      descr: "Mindent bele arckezelés",
      price: "12000ft",
    },
    {
      title: "Arckezelések kúraszerűen",
      descr: "Savas hámlasztás 4-6 alkalom (60perc)",
      price: "14000ft",
    },
    {
      title: "",
      descr: "Thermage fiatalító kezelés 3-6 alkalom (60-90perc)",
      price: "18000ft",
    },
    {
      title: "",
      descr: "Hollywoodi peeling 3-6 alkalom (60-90perc)",
      price: "20000ft",
    },
    {
      title: "Sminktetoválás",
      descr: "Szemöldök tetoválás soft powder",
      price: "60000ft",
    },
    {
      title: "",
      descr: "Ajaktetoválás",
      price: "70000ft",
    },
    {
      title: "",
      descr: "Szemhéjtetoválás púderes",
      price: "50000ft",
    },
    {
      title: "",
      descr: "Szemhéjtus sminktetoválás",
      price: "30000ft",
    },
    {
      title: "",
      descr: "Tetoválás eltávolítás lézergéppel",
      price: "10000ft",
    },
    {
      title: "",
      descr: "Tetoválás eltávolítás lézergéppel",
      price: "10000ft",
    },
  ];
  return (
    <section className="bg-cream relative flex min-h-screen w-full items-start justify-center">
      <Image
        src="https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/public/alapok//topbg.png"
        width={200}
        height={200}
        priority
        draggable={false}
        alt="Background Top"
        className="object-fit absolute top-0 left-0 h-42 w-fit md:h-60"
      />
      <Image
        src="https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/public/alapok//arlistalogo.png"
        width={200}
        height={200}
        alt="Rozin Rebeka Logo"
        priority
        draggable={false}
        className="object-fit absolute top-0 right-0 h-20 w-fit md:h-40"
      />
      <div className="text-gold relative z-10 mb-30 flex flex-col items-center justify-center gap-2 px-4 py-10 font-serif italic">
        <h1 className="text-4xl">Árlista</h1>
        <Link
          href={"/"}
          className="w-full text-right text-xl underline md:text-left"
        >
          Vissza a főoldalra
        </Link>
        {arlista.map((e, i) => (
          <div
            key={i}
            className="flex w-full flex-col items-center justify-center gap-4 md:w-2xl"
          >
            {e.title != "" && (
              <h2 className="mt-10 w-full text-left text-3xl">{e.title}</h2>
            )}
            <div className="flex w-full items-center justify-center px-2">
              <div className="mr-2 w-full text-left text-2xl">
                <p>{e.descr}</p>
              </div>
              <div className="w-fit text-right text-2xl">
                <p>{e.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image
        src="https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/public/alapok//bottombg.png"
        width={200}
        height={200}
        alt="Background Bottom"
        draggable={false}
        priority
        className="object-fit absolute right-0 bottom-0 h-42 w-fit md:h-60"
      />
    </section>
  );
}
