import { motion } from "framer-motion";
import galleryImages from "../data/gallery";

function Gallery() {
  return (
    <section id="gallery" className="bg-[#f7efe3] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Aari Work Gallery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f6258]">
            A glimpse of our handcrafted embroidery work.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Aari work ${index + 1}`}
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
