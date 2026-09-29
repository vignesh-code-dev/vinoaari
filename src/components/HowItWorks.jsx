import { motion } from "framer-motion";
import { Search, MessageCircle, Scissors } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose a Design",
    description:
      "Browse our Aari work collection and choose the design you love.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Place Your Order",
    description:
      "Send us your selected design and requirements through WhatsApp.",
  },
  {
    number: "03",
    icon: Scissors,
    title: "We Create It",
    description:
      "Our skilled artisans carefully create the Aari work on your blouse.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#f7efe3] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2b2118] sm:text-4xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f6258]">
            Getting your favourite Aari design is simple and easy.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-10 md:grid-cols-3">
          {/* Connecting Line */}
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-[#d8c7b4] md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative z-10 text-center"
              >
                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f7efe3] bg-[#7a1f2b] text-[#d4af37] shadow-md">
                  <Icon size={28} />
                </div>

                {/* Step Number */}
                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-[#a67c00]">
                  STEP {step.number}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-[#2b2118]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#74675c]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
