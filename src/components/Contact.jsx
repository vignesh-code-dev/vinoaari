import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi Vino Aari Works 👋

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Work Required: ${formData.service || "Not specified"}

Message:
${formData.message || "No additional message"}

Please share the details and quotation.`;

    const whatsappUrl = `https://wa.me/919585864091?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#fffaf3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a67c00] sm:text-sm sm:tracking-[0.25em]">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2b2118] sm:text-4xl lg:text-5xl">
            Let's Create Something Beautiful
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6f6258] sm:text-base sm:leading-7">
            Have a design in mind? Send us your requirements and we will discuss
            the design, work and quotation with you.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              bg-[#7a1f2b]
              p-6
              text-white
              sm:p-8
              lg:col-span-2
              lg:p-10
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
              Get In Touch
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              We'd Love To Hear From You
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/70 sm:leading-7">
              Contact us for Aari work orders, custom designs, bridal
              collections and any other enquiries.
            </p>

            {/* ================= INFO ================= */}
            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {/* Phone */}
              <a
                href="tel:+919585864091"
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full bg-white/10
                    transition duration-300
                    group-hover:bg-[#d4af37]
                    group-hover:text-[#2b2118]
                    sm:h-11 sm:w-11
                  "
                >
                  <Phone size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Phone / WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    +91 95858 64091
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:varahi.infotechnology@gmail.com"
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full bg-white/10
                    transition duration-300
                    group-hover:bg-[#d4af37]
                    group-hover:text-[#2b2118]
                    sm:h-11 sm:w-11
                  "
                >
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold sm:text-base">
                    vinoaariwork@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full bg-white/10
                    sm:h-11 sm:w-11
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Trichy, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full bg-white/10
                    sm:h-11 sm:w-11
                  "
                >
                  <Clock size={18} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* ================= WHATSAPP ================= */}
            <a
              href="https://wa.me/919585864091"
              target="_blank"
              rel="noreferrer"
              className="
                mt-8
                flex w-full items-center justify-center gap-2
                rounded-xl
                bg-[#d4af37]
                px-5 py-3.5
                text-sm font-semibold
                text-[#2b2118]
                transition-all duration-300
                hover:bg-[#e5c45a]
                hover:shadow-lg
                active:scale-[0.98]
                sm:mt-10
                sm:py-4
              "
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border border-[#eadfce]
              bg-white
              p-6
              shadow-sm
              sm:p-8
              lg:col-span-3
              lg:p-10
            "
          >
            <h3 className="text-2xl font-bold text-[#2b2118] sm:text-3xl">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#817368]">
              Fill in your details and we'll contact you through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-8">
              {/* ================= NAME + PHONE ================= */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#40352d]">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border border-[#e4d8ca]
                      bg-[#fffdf9]
                      px-4 py-3.5
                      text-sm text-[#2b2118]
                      placeholder:text-[#a99d92]
                      outline-none
                      transition-all duration-200
                      focus:border-[#7a1f2b]
                      focus:ring-2
                      focus:ring-[#7a1f2b]/10
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#40352d]">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className="
                      w-full
                      rounded-xl
                      border border-[#e4d8ca]
                      bg-[#fffdf9]
                      px-4 py-3.5
                      text-sm text-[#2b2118]
                      placeholder:text-[#a99d92]
                      outline-none
                      transition-all duration-200
                      focus:border-[#7a1f2b]
                      focus:ring-2
                      focus:ring-[#7a1f2b]/10
                    "
                  />
                </div>
              </div>

              {/* ================= SERVICE ================= */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#40352d]">
                  What do you need?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-xl
                    border border-[#e4d8ca]
                    bg-[#fffdf9]
                    px-4 py-3.5
                    text-sm text-[#2b2118]
                    outline-none
                    transition-all duration-200
                    focus:border-[#7a1f2b]
                    focus:ring-2
                    focus:ring-[#7a1f2b]/10
                  "
                >
                  <option value="">Select an option</option>
                  <option value="Bridal Aari Work">Bridal Aari Work</option>
                  <option value="Reception Blouse Work">
                    Reception Blouse Work
                  </option>
                  <option value="Simple Aari Work">Simple Aari Work</option>
                  <option value="Heavy Aari Work">Heavy Aari Work</option>
                  <option value="Maggam Work">Maggam Work</option>
                  <option value="Custom Design">Custom Design</option>
                </select>
              </div>

              {/* ================= MESSAGE ================= */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#40352d]">
                  Your Requirements
                </label>

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your design, blouse colour, event date, custom requirements..."
                  className="
                    min-h-[130px]
                    w-full
                    resize-none
                    rounded-xl
                    border border-[#e4d8ca]
                    bg-[#fffdf9]
                    px-4 py-3.5
                    text-sm
                    leading-6
                    text-[#2b2118]
                    placeholder:text-[#a99d92]
                    outline-none
                    transition-all duration-200
                    focus:border-[#7a1f2b]
                    focus:ring-2
                    focus:ring-[#7a1f2b]/10
                    sm:min-h-[150px]
                  "
                />
              </div>

              {/* ================= SUBMIT ================= */}
              <button
                type="submit"
                className="
                  flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-[#7a1f2b]
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  shadow-sm
                  transition-all duration-300
                  hover:bg-[#5f1721]
                  hover:shadow-lg
                  active:scale-[0.98]
                  sm:py-4
                  sm:text-base
                "
              >
                <Send size={18} />
                Send Enquiry on WhatsApp
              </button>

              <p className="text-center text-[11px] leading-5 text-[#94867a] sm:text-xs">
                Your enquiry will open in WhatsApp with the details you entered.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
