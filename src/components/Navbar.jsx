import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Designs", href: "/designs" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#eadfce] bg-white/95 px-5 py-2.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <a href="/" onClick={handleLinkClick} className="flex items-center">
              <img
                src="/aari-logo.png"
                alt="Vino Aari Works"
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#4d4036] transition hover:text-[#7a1f2b]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://wa.me/919585864091"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#7a1f2b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5f1721]"
              >
                <MessageCircle size={16} />
                Order Now
              </a>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7a1f2b] text-white md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (
            <div className="border-t border-[#eadfce] pt-4 md:hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[#4d4036] transition hover:bg-[#fff4e5] hover:text-[#7a1f2b]"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="https://wa.me/919585864091"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleLinkClick}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#7a1f2b] px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle size={17} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
