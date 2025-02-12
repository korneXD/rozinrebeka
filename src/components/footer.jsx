export default function Footer() {
  return (
    <footer className="bg-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-cappuccino/80">
          <div>
            <h5 className="font-medium text-cappuccino mb-4">Elérhetőségeim</h5>
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
  );
}
