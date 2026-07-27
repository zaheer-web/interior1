import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import img1 from "../img/im14.png";
import img2 from "../img/im15.png";

const points = [
  {
    title: "Thoughtful, context-driven design",
    desc: "Not trend-based — timeless and site-responsive spaces built to last.",
  },
  {
    title: "Direct principal architect involvement",
    desc: "Clear vision, accountability, and hands-on quality control at every stage.",
  },
  {
    title: "Luxury made affordable",
    desc: "Premium design sensibility delivered at highly budget-friendly costs.",
  },
  {
    title: "Smart cost optimization",
    desc: "Maximum visual and spatial impact without unnecessary expenditure.",
  },
  {
    title: "Aesthetics balanced with practicality",
    desc: "Beautiful spaces that actually work for the people who live in them.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-400/15 blur-[140px]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* IMAGE COLLAGE */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 grid-rows-[220px_220px] gap-5 lg:grid-rows-[260px_260px]">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-amber-500/10"
            >
              <img
                src={img1}
                alt="Luxury interior"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md ring-1 ring-white/20">
                <Sparkles size={14} className="text-amber-400" />
                <span className="text-xs font-medium tracking-wide">Signature Interiors</span>
              </div>
            </motion.div>

            {/* Tall image */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative row-span-2 overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-amber-500/10"
            >
              <img
                src={img2}
                alt="Architectural detail"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400">Est. 2012</p>
                <p className="mt-1 text-lg font-semibold leading-tight">
                  Crafting timeless spaces
                </p>
              </div>
            </motion.div>

            {/* Stats box */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center shadow-2xl shadow-amber-500/30 ring-1 ring-amber-300/40"
              style={{
                background:
                  "linear-gradient(135deg, #f5c542 0%, #e0a020 45%, #b8781a 100%)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
              <div className="relative">
                <h3 className="bg-gradient-to-b from-black to-neutral-800 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                  12K+
                </h3>
                <div className="mx-auto mt-2 h-px w-12 bg-black/40" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-black/80">
                  Project Portfolio
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Why Choose Us
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Design that feels{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                effortless
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 5 Q 100 -2 198 5"
                  stroke="url(#g)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#fcd34d" />
                    <stop offset="1" stopColor="#d97706" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            Our approach blends thoughtful design, cost efficiency, and quiet craftsmanship —
            creating timeless spaces that truly enhance the way people live and work.
          </p>

          <div className="mt-10 space-y-4">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-black shadow-lg shadow-amber-500/30 ring-1 ring-amber-200/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="pt-0.5">
                  <h4 className="text-sm font-semibold text-white md:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        
        </motion.div>
      </div>
    </section>
  );
}
