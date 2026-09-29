import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Check, Upload, Heart } from "lucide-react";
import designs from "../data/designs";

function DesignDetails() {
  const { id } = useParams();

  const design = designs.find((item) => item.id === id);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [blouseType, setBlouseType] = useState("");

  if (!design) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf3] px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2b2118]">
            Design Not Found
          </h1>

          <p className="mt-3 text-[#75685d]">
            The design you are looking for doesn't exist.
          </p>

          <Link
            to="/designs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7a1f2b] px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft size={18} />
            Back to Designs
          </Link>
        </div>
      </div>
    );
  }

  const handleOrder = (e) => {
    e.preventDefault();

    const message = `Hi Vino Aari Works 👋

I would like to order an Aari Work design.

*Design Details*
Design ID: ${design.id}
Design Name: ${design.title}
Category: ${design.category}

*Customer Details*
Name: ${name}
Phone: ${phone}
Blouse Type: ${blouseType || "Not specified"}
Preferred Date: ${preferredDate || "Not specified"}

*Requirements*
${requirements || "No additional requirements"}

Please share the quotation and further details.`;

    const whatsappUrl = `https://wa.me/919080130918?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf3]">
      {/* ================= TOP ================= */}
      <section className="px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/designs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7a1f2b] transition hover:gap-3"
          >
            <ArrowLeft size={18} />
            Back to Designs
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-3xl bg-[#f5eadc] shadow-lg">
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-auto max-h-[750px] w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-[#f3e5d5] px-4 py-2 text-sm font-semibold text-[#7a1f2b]">
                  {design.category}
                </span>

                <span className="flex items-center gap-2 text-sm text-[#817368]">
                  <Heart size={17} />
                  Custom Design
                </span>
              </div>
            </motion.div>

            {/* ================= DETAILS ================= */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
                {design.id}
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-[#2b2118] sm:text-5xl">
                {design.title}
              </h1>

              <p className="mt-5 text-2xl font-bold text-[#7a1f2b]">
                {design.price}
              </p>

              <p className="mt-6 leading-8 text-[#6f6258]">
                {design.description}
              </p>

              {/* Work Details */}
              <div className="mt-8">
                <h2 className="text-lg font-bold text-[#2b2118]">
                  Work Includes
                </h2>

                <div className="mt-4 space-y-3">
                  {design.work.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7a1f2b] text-white">
                        <Check size={13} />
                      </span>

                      <span className="text-sm text-[#6f6258]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ORDER FORM ================= */}
      <section className="bg-[#f7efe3] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c00]">
              Custom Order
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#2b2118] sm:text-4xl">
              Order This Design
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[#6f6258]">
              Fill in your details and send your order request directly through
              WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleOrder}
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-10"
          >
            {/* Selected Design */}
            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-[#fff7eb] p-4">
              <img
                src={design.image}
                alt={design.title}
                className="h-20 w-16 rounded-lg object-cover"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#a67c00]">
                  Selected Design
                </p>

                <h3 className="mt-1 font-bold text-[#2b2118]">
                  {design.title}
                </h3>

                <p className="text-sm text-[#7a1f2b]">{design.id}</p>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Name *
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#e4d8ca] px-4 py-3 outline-none transition focus:border-[#7a1f2b]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  WhatsApp Number *
                </label>

                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your number"
                  className="w-full rounded-xl border border-[#e4d8ca] px-4 py-3 outline-none transition focus:border-[#7a1f2b]"
                />
              </div>

              {/* Blouse Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Blouse Type
                </label>

                <select
                  value={blouseType}
                  onChange={(e) => setBlouseType(e.target.value)}
                  className="w-full rounded-xl border border-[#e4d8ca] bg-white px-4 py-3 outline-none focus:border-[#7a1f2b]"
                >
                  <option value="">Select blouse type</option>
                  <option value="Bridal Blouse">Bridal Blouse</option>
                  <option value="Reception Blouse">Reception Blouse</option>
                  <option value="Regular Blouse">Regular Blouse</option>
                  <option value="Lehenga Blouse">Lehenga Blouse</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Required Date
                </label>

                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full rounded-xl border border-[#e4d8ca] px-4 py-3 outline-none focus:border-[#7a1f2b]"
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Additional Requirements
              </label>

              <textarea
                rows="5"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Tell us about colour, stones, modifications or any other requirements..."
                className="w-full resize-none rounded-xl border border-[#e4d8ca] px-4 py-3 outline-none transition focus:border-[#7a1f2b]"
              />
            </div>

            {/* Reference Upload */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">
                Reference Image
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[#cdbfae] bg-[#fffaf3] p-5 transition hover:border-[#7a1f2b]">
                <Upload className="text-[#7a1f2b]" size={22} />

                <div>
                  <p className="text-sm font-semibold">Upload your reference</p>

                  <p className="mt-1 text-xs text-[#887a6e]">
                    JPG, PNG up to 5MB
                  </p>
                </div>

                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#7a1f2b] px-6 py-4 font-semibold text-white transition hover:bg-[#5f1721]"
            >
              <MessageCircle size={20} />
              Send Order on WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-[#8a7d72]">
              Final price will be confirmed based on the selected work,
              customization and materials.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default DesignDetails;
