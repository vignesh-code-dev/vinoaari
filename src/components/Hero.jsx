import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[760px]
        w-full
        overflow-hidden
        bg-[#1c1510]
        sm:min-h-[700px]
        lg:min-h-[760px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGES
      ===================================================== */}
      <div className="absolute inset-0 h-full w-full">
        <picture className="block h-full w-full">
          {/* Mobile Image */}
          <source
            media="(max-width: 639px)"
            srcSet={`${import.meta.env.BASE_URL}bridal-hero-mobile.png`}
          />

          {/* Desktop Image */}
          <img
            src={`${import.meta.env.BASE_URL}hero-aari.png`}
            alt="Beautiful handcrafted bridal Aari work"
            className="
              h-full
              w-full
              object-cover
              object-[35%_center]
              sm:object-center
            "
          />
        </picture>

        {/* =================================================
            DESKTOP OVERLAY
        ================================================= */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/35
            to-black/10
            sm:from-black/70
            sm:via-black/40
            sm:to-black/5
          "
        />

        {/* =================================================
            MOBILE OVERLAY
        ================================================= */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/55
            via-black/15
            to-black/65
            sm:hidden
          "
        />

        {/* Extra left darkness for text */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            hidden
            w-[65%]
            bg-gradient-to-r
            from-black/45
            to-transparent
            sm:block
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-black/60
            to-transparent
            sm:h-48
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-7xl
          items-center
          px-5
          pb-24
          pt-32
          sm:min-h-[700px]
          sm:px-6
          sm:py-24
          lg:min-h-[760px]
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
          className="
            w-full
            max-w-3xl
            text-white
            sm:max-w-2xl
            lg:max-w-3xl
          "
        >
          {/* =================================================
              BADGE
          ================================================= */}
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
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-[#d4af37]/50
              bg-black/30
              px-3
              py-2
              backdrop-blur-md
              sm:mb-6
              sm:px-4
            "
          >
            <Sparkles
              size={15}
              className="
                shrink-0
                text-[#d4af37]
                sm:h-4
                sm:w-4
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white
                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Handcrafted Aari Work
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              max-w-[340px]
              text-[2.65rem]
              font-bold
              leading-[1.02]
              tracking-tight
              drop-shadow-lg
              sm:max-w-none
              sm:text-6xl
              sm:leading-[1.08]
              lg:text-7xl
            "
          >
            Elegance
            <span
              className="
                mt-1
                block
                text-[#d4af37]
                sm:mt-0
              "
            >
              in Every Stitch
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
            className="
              mt-5
              max-w-[340px]
              text-sm
              leading-6
              text-white/90
              drop-shadow
              sm:mt-6
              sm:max-w-xl
              sm:text-lg
              sm:leading-8
            "
          >
            Discover beautiful handcrafted Aari work designs and get your
            favourite design created specially for your blouse.
          </motion.p>

          {/* =================================================
              FEATURES
          ================================================= */}
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
              max-w-[350px]
              flex-wrap
              gap-x-4
              gap-y-2.5
              text-xs
              text-white/95
              sm:mt-7
              sm:max-w-none
              sm:gap-x-6
              sm:gap-y-3
              sm:text-sm
            "
          >
            <span className="whitespace-nowrap">✦ Handcrafted</span>

            <span className="whitespace-nowrap">✦ Custom Designs</span>

            <span className="whitespace-nowrap">✦ Bridal Collection</span>
          </motion.div>

          {/* =================================================
              BUTTONS
          ================================================= */}
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
              max-w-[350px]
              flex-col
              gap-3
              sm:mt-9
              sm:max-w-none
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
                shadow-black/25
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
                backdrop-blur-md
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

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
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
