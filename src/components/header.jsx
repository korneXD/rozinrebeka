export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <h1 className="text-3xl font-serif text-cappuccino">Rozin Rebeka</h1>
      <nav className="hidden md:flex space-x-6 text-cappuccino/80 text-xl">
        <a href="#services" className="hover:text-cappuccino">
          Szolgáltatások
        </a>
        <a href="#" className="hover:text-cappuccino">
          Termékek
        </a>
        <a href="#contact" className="hover:text-cappuccino">
          Elérhetőség
        </a>
      </nav>
    </header>
  );
}
