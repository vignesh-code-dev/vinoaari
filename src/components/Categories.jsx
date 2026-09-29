import { motion } from "framer-motion";
import { Crown, Sparkles, Flower2, Gem, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Bridal Aari",
    description: "Grand designs for your special day",
    icon: Crown,
    link: "/designs?category=Bridal",
  },
  {
    name: "Reception",
    description: "Elegant designs for special occasions",
    icon: Sparkles,
    link: "/designs?category=Reception",
  },
  {
    name: "Simple Aari",
    description: "Beautiful minimal embroidery",
    icon: Flower2,
    link: "/designs?category=Simple",
  },
  {
    name: "Heavy Work",
    description: "Rich and detailed handcrafted work",
    icon: Gem,
    link: "/designs?category=Heavy%20Work",
  },
];

function Categories() {
  return (
    <section className="bg-[#fffaf3] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2b2118] sm:text-4xl">
            Our Collections
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f6258]">
            Explore our handcrafted Aari work collections and choose a design
            that matches your style.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.a
                key={category.name}
                href={category.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#eadfce] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Decorative Circle */}
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#fff4d8] transition duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#7a1f2b] text-[#d4af37] transition duration-300 group-hover:scale-110">
                  <Icon size={25} />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-bold text-[#2b2118]">
                  {category.name}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-[#7b6e63]">
                  {category.description}
                </p>

                {/* View Link */}
                <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-[#7a1f2b]">
                  View Designs
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
