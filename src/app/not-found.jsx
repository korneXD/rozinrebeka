import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-cappuccino flex min-h-screen flex-col items-center justify-center gap-2 font-serif">
      <h2 className="text-4xl italic">- 404 -</h2>
      <h2 className="text-4xl">Rozin Rebeka</h2>
      <h3 className="text-2xl italic">
        A felkeresett oldal nem található :{"("}
      </h3>
      <Link href={"/"} className="text-xl italic underline">
        Vissza a Főoldalra
      </Link>
    </section>
  );
}
