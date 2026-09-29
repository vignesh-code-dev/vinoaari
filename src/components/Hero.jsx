import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#1c1510]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src="/hero-aari.png"
          alt="Beautiful Aari embroidery work"
          className="
            h-full
            w-full
            object-cover
            object-[35%_center]
            sm:object-center
          "
        />

        {/* Main Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/70
            via-black/40
            to-black/10
            sm:from-black/65
            sm:via-black/35
            sm:to-transparent
          "
        />

        {/* Mobile Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent sm:hidden" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          mx-auto
          flex min-h-screen
          max-w-7xl
          items-center
          px-5
          py-28
          sm:px-6
          sm:py-24
          lg:px-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full max-w-3xl text-white"
        >
          {/* ================= BADGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-[#d4af37]/50
              bg-black/25
              px-3.5
              py-2
              backdrop-blur-md
              sm:mb-6
              sm:px-4
            "
          >
            <Sparkles
              size={15}
              className="shrink-0 text-[#d4af37] sm:h-4 sm:w-4"
            />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.15em]
                sm:text-sm
                sm:tracking-[0.18em]
              "
            >
              HANDCRAFTED AARI WORK
            </span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              text-[2.7rem]
              font-bold
              leading-[1.05]
              tracking-tight
              sm:text-6xl
              sm:leading-[1.08]
              lg:text-7xl
            "
          >
            Elegance
            <span className="mt-1 block text-[#d4af37] sm:mt-0">
              in Every Stitch
            </span>
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-white/90
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Discover beautiful handcrafted Aari work designs and get your
            favourite design created specially for your blouse.
          </motion.p>

          {/* ================= FEATURES ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="
              mt-6
              flex
              flex-wrap
              gap-x-5
              gap-y-2.5
              text-xs
              text-white/90
              sm:mt-7
              sm:gap-x-6
              sm:gap-y-3
              sm:text-sm
            "
          >
            <span className="whitespace-nowrap">✦ Handcrafted</span>

            <span className="whitespace-nowrap">✦ Custom Designs</span>

            <span className="whitespace-nowrap">✦ Bridal Collection</span>
          </motion.div>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3
              sm:mt-9
              sm:w-auto
              sm:flex-row
              sm:gap-4
            "
          >
            {/* Explore Designs */}
            <a
              href="/designs"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#d4af37]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#2b2118]
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                hover:bg-[#e5c45a]
                hover:shadow-xl
                active:scale-[0.98]
                sm:w-auto
                sm:px-7
                sm:text-base
              "
            >
              Explore Designs
              <ArrowRight size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919585864091"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/50
                bg-white/10
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#2b2118]
                active:scale-[0.98]
                sm:w-auto
                sm:px-7
                sm:text-base
              "
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/60
          sm:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <div className="h-10 w-px bg-white/40" />
      </motion.div>
    </section>
  );
}

export default Hero;
