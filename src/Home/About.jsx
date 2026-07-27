import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Award, Users } from "lucide-react";
import img1 from "../img/im11.png";
import img2 from "../img/im12.png";
import img3 from "../img/im13.png";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black py-24 text-white">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-yellow-400/15 blur-[160px]" />

      {/* Giant background number */}
      <div className="pointer-events-none absolute left-4 top-8 select-none text-[220px] font-black leading-none text-white/[0.04] md:text-[340px]">
        01
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            About the Studio
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Company
            </span>
            <br />
            <span className="text-white">Overview</span>
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-10 bg-amber-400" />
            <p className="text-lg font-medium italic text-amber-300">
              Architecture should speak of its time and place.
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            M.A. Architects & Associates is a Moradabad-based architectural firm with over
            10 years of experience in architecture, master planning, urbanism, landscape and
            interior design. We provide complete design solutions from concept to execution.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Our approach combines functionality with aesthetics — every project is thoughtfully
            designed and carefully executed alongside clients and consultants to deliver spaces
            that exceed expectations.
          </p>

          {/* Mini stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:border-amber-400/30">
              <Award className="text-amber-400" size={22} />
              <p className="mt-3 text-2xl font-bold">10+ Yrs</p>
              <p className="text-xs uppercase tracking-wider text-neutral-500">Experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:border-amber-400/30">
              <Users className="text-amber-400" size={22} />
              <p className="mt-3 text-2xl font-bold">500+</p>
              <p className="text-xs uppercase tracking-wider text-neutral-500">Happy Clients</p>
            </div>
          </div>

         
        </motion.div>

        {/* IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-5">
          {/* Wide image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative col-span-2 overflow-hidden rounded-3xl shadow-2xl shadow-amber-500/10 ring-1 ring-white/10"
          >
            <img
              src={img1}
              alt="Architectural project"
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-400">
                  Featured Work
                </p>
                <p className="mt-1 text-xl font-semibold leading-tight">
                  Modern residential masterpiece
                </p>
              </div>
              
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-amber-500/10 ring-1 ring-white/10"
          >
            <img
              src={img2}
              alt="Design studio"
              loading="lazy"
              className="h-[240px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur-md ring-1 ring-white/20">
              Studio
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-amber-500/10 ring-1 ring-white/10"
          >
            <img
              src={img3}
              alt="Interior detail"
              loading="lazy"
              className="h-[240px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur-md ring-1 ring-white/20">
              Interiors
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 p-5 shadow-2xl shadow-amber-500/40 ring-1 ring-amber-200/60 sm:block"
          >
            <p className="text-3xl font-black text-black">150+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/70">
              Projects
              <br />
              Delivered
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
