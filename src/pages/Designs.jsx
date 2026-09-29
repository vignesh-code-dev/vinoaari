import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import designs from "../data/designs";

const categories = [
  "All",
  "Bridal",
  "Reception",
  "Simple",
  "Heavy Work",
  "Maggam",
];

function Designs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredDesigns = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return designs.filter((design) => {
      const categoryMatch =
        activeCategory === "All" || design.category === activeCategory;

      const searchMatch =
        !searchValue ||
        design.title.toLowerCase().includes(searchValue) ||
        design.category.toLowerCase().includes(searchValue) ||
        design.id.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <main className="min-h-screen bg-[#fffaf3]">
      {/* =====================================================
          HERO HEADER
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#7a1f2b] px-6 pb-20 pt-32 text-white lg:px-8 lg:pt-40">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d4af37]/20" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#8d2635]/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles size={15} className="text-[#d4af37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f1d87c]">
                Our Collection
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Aari Work
              <span className="block text-[#d4af37]">Designs</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Explore our handcrafted Aari embroidery collection. Choose a
              design you love and get it customised specially for your blouse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FILTER + DESIGNS
      ===================================================== */}
      <section className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Filter Header */}
          <div className="rounded-2xl border border-[#eadfce] bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8c80]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search designs..."
                  className="w-full rounded-xl border border-[#e5d8c8] bg-[#fffaf3] py-3 pl-11 pr-11 text-sm text-[#2b2118] outline-none transition placeholder:text-[#a99b8e] focus:border-[#7a1f2b] focus:ring-2 focus:ring-[#7a1f2b]/10"
                />

                {search && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#8b7b6c] transition hover:bg-[#f4e9dc] hover:text-[#7a1f2b]"
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              {/* Filter Icon */}
              <div className="hidden items-center gap-2 text-sm font-medium text-[#806f62] lg:flex">
                <SlidersHorizontal size={17} />
                Filter by category
              </div>
            </div>

            {/* Categories */}
            <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-[#7a1f2b] text-white shadow-md shadow-[#7a1f2b]/20"
                        : "bg-[#f8f1e8] text-[#66584d] hover:bg-[#eee2d3] hover:text-[#7a1f2b]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Info */}
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#8b7b6c]">
                Showing{" "}
                <span className="font-bold text-[#2b2118]">
                  {filteredDesigns.length}
                </span>{" "}
                {filteredDesigns.length === 1 ? "design" : "designs"}
              </p>
            </div>

            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="w-fit text-sm font-semibold text-[#7a1f2b] hover:underline"
              >
                Clear category
              </button>
            )}
          </div>

          {/* =================================================
              DESIGN GRID
          ================================================= */}
          <AnimatePresence mode="popLayout">
            {filteredDesigns.length > 0 ? (
              <motion.div
                layout
                className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredDesigns.map((design, index) => (
                  <motion.article
                    key={design.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group overflow-hidden rounded-2xl border border-[#eadfce] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f3eadf]">
                      <img
                        src={design.image}
                        alt={design.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Soft Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

                      {/* Category */}
                      <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#7a1f2b] shadow-sm backdrop-blur-md">
                        {design.category}
                      </span>

                      {/* Design ID */}
                      <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                        {design.id}
                      </span>

                      {/* Image Bottom Content */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                          Handcrafted Aari Work
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-white">
                          {design.title}
                        </h2>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-[#9a8c80]">
                            Custom Work
                          </p>

                          <p className="mt-1 text-base font-bold text-[#2b2118]">
                            {design.price}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#f7efe3] px-3 py-1 text-xs font-medium text-[#7a1f2b]">
                          {design.category}
                        </span>
                      </div>

                      {/* View Details */}
                      <Link
                        to={`/designs/${design.id}`}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7a1f2b] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#641824] hover:shadow-lg hover:shadow-[#7a1f2b]/20"
                      >
                        View Design Details
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 rounded-3xl border border-dashed border-[#ddcdbc] bg-white px-6 py-20 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5eadc]">
                  <Search size={25} className="text-[#7a1f2b]" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#2b2118]">
                  No designs found
                </h3>

                <p className="mt-2 text-sm text-[#7b6e63]">
                  Try another design name or choose a different category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 rounded-full bg-[#7a1f2b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#641824]"
                >
                  View All Designs
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          CUSTOM DESIGN CTA
      ===================================================== */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#f5eadc] px-7 py-14 text-center sm:px-12">
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#d4af37]/20" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#7a1f2b] text-[#d4af37]">
              <Sparkles size={21} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#2b2118] sm:text-3xl">
              Have Your Own Design?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6f6258] sm:text-base">
              You can send us your own reference image. We'll discuss the
              design, customise it according to your requirements, and create
              beautiful Aari work specially for you.
            </p>

            <a
              href="https://wa.me/919585864091"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7a1f2b] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#641824] hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Send Your Design
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Designs;
