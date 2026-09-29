import { motion } from "framer-motion";
import { Heart, Sparkles, Scissors } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-[#fffaf3] px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src={`${import.meta.env.BASE_URL}aarii-logo.png`}
              alt="Aari Work"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-8 rounded-2xl bg-[#7a1f2b] p-4 text-white shadow-xl">
            <Sparkles className="mb-2 text-[#d4af37]" size={26} />
            <p className="text-sm">Handcrafted</p>
            <p className="text-xl font-bold">With Love</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Artistry That Makes
            <span className="block text-[#7a1f2b]">Every Blouse Special</span>
          </h2>

          <p className="mt-6 leading-8 text-[#6f6258]">
            At Vino Aari Works, we create beautiful handcrafted Aari work
            designs with attention to every small detail.
          </p>

          <p className="mt-4 leading-8 text-[#6f6258]">
            Choose a design from our collection or share your own reference. Our
            skilled artisans carefully bring your vision to life on your blouse.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div>
              <Heart className="text-[#7a1f2b]" size={25} />
              <h3 className="mt-3 font-semibold">Made With Love</h3>
            </div>

            <div>
              <Scissors className="text-[#7a1f2b]" size={25} />
              <h3 className="mt-3 font-semibold">Handcrafted</h3>
            </div>

            <div>
              <Sparkles className="text-[#7a1f2b]" size={25} />
              <h3 className="mt-3 font-semibold">Custom Designs</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
