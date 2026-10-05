import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Heart,
  ArrowUp,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#2b2118] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}aari-logo.png`}
                alt="Vino Aari Works"
                className="h-14 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Beautiful handcrafted Aari work designed specially for your
              special moments. Choose your favourite design or share your own
              reference with us.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://wa.me/919585864091"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/"
                className="text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                Home
              </a>

              <a
                href="/designs"
                className="text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                Aari Designs
              </a>

              <a
                href="/#about"
                className="text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                About Us
              </a>

              <a
                href="/#gallery"
                className="text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                Gallery
              </a>

              <a
                href="/#contact"
                className="text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Work</h3>

            <div className="mt-5 flex flex-col gap-3">
              <p className="text-sm text-white/60">Bridal Aari Work</p>

              <p className="text-sm text-white/60">Reception Blouse Work</p>

              <p className="text-sm text-white/60">Heavy Aari Work</p>

              <p className="text-sm text-white/60">Simple Aari Designs</p>

              <p className="text-sm text-white/60">Maggam Work</p>

              <p className="text-sm text-white/60">Custom Designs</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Get In Touch</h3>

            <div className="mt-5 space-y-5">
              <a
                href="tel:+919585864091"
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />

                <span>+91 95858 64091</span>
              </a>

              <a
                href="mailto:varahi.infotechnology@gmail.com"
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-[#d4af37]"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />

                <span className="break-all">
                  vinoaariwork@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />

                <span>Trichy, Tamil Nadu</span>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919585864091"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7a1f2b] px-5 py-3 text-sm font-semibold transition hover:bg-[#922837]"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Vino Aari Works. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-white/50">
            Made with
            <Heart size={14} className="fill-current text-[#d4af37]" />
            for beautiful creations
          </p>

          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#d4af37] hover:text-[#d4af37]"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
