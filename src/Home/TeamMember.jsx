import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Replace these with your actual project imports
import abuZainImg from "../img/team/ad.jpeg";
import aslamImg from "../img/team/as.png";
import ishaImg from "../img/team/is.jpeg";
import nawazishImg from "../img/team/nw.jpeg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    code: "AR·01",
    name: "Mohd Aslam",
    role: "Principal Architect",
    image: aslamImg,
    description:
      "Principal Architect at Studio Athenaeum with 7+ years in Architecture and Urbanism. Leading the team since 2016 across urban spaces and interiors. Thesis topper in Urban Regeneration, Jamia Millia Islamia.",
    skills: [
      "Architecture",
      "Urbanism",
      "Urban Regeneration",
      "Urban Spaces",
      "Interior Design",
      "Project Leadership",
    ],
  },
  {
    id: 2,
    code: "SE·02",
    name: "Abu Zain",
    role: "Structural Engineer",
    image: abuZainImg,
    description:
      "Qualified Structural Engineer with 6+ years in structural design, analysis, detailing, and engineering consultancy. Graduate of AKTU, associated with M.A. Architects & Associates for 5+ years across residential, commercial, and institutional projects — ensuring structural safety, stability, and close coordination between architectural and structural requirements.",
    skills: [
      "Structural Design",
      "Structural Analysis",
      "Detailing",
      "Engineering Consultancy",
      "Construction Practices",
    ],
  },
  {
    id: 4,
    code: "ID·03",
    name: "Isha Verma",
    role: "Interior Designer",
    image: ishaImg,
    description:
      "Interior designer turning spatial concepts into functional, compelling environments. Works across residential and commercial projects, balancing modern elegance with everyday practicality.",
    skills: [
      "Interior Design",
      "Technical Drafting",
      "3D Visualization",
      "Site Coordination",
    ],
  },
  {
    id: 5,
    code: "AR·04",
    name: "Mohd Nawazish Ali",
    role: "Architectural Designer",
    image: nawazishImg,
    description:
      "B.Arch graduate, MET Faculty of Architecture, class of 2025. Experience in architectural design, drafting, and 3D visualization, blending design thinking with strong technical skills.",
    skills: [
      "Architectural Design",
      "Drafting",
      "3D Visualization",
      "Site Coordination",
      "AutoCAD",
      "Revit",
      "SketchUp",
      "Lumion",
      "V-Ray",
      "Photoshop",
    ],
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-header-reveal", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".team-card", {
        scrollTrigger: { trigger: ".team-grid", start: "top 78%" },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ background: "var(--sa-paper)" }}
    >
      <style>{`
        .team-section-scope {
          --sa-paper: #EFE9DC;
          --sa-paper-deep: #E6DFCE;
          --sa-ink: #14171F;
          --sa-ink-soft: #232838;
          --sa-brass: #A87F4A;
          --sa-brass-light: #D9BD8A;
          --sa-line: rgba(20, 23, 31, 0.14);
        }
        .team-section-scope .sa-serif { font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif; }
        .team-section-scope .sa-mono { font-family: 'Courier New', ui-monospace, SFMono-Regular, Menlo, monospace; }

        .team-blueprint-grid {
          background-image:
            linear-gradient(var(--sa-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--sa-line) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .flip-card { perspective: 1800px; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
        }
        .flip-card.is-flipped .flip-card-inner { transform: rotateY(180deg); }
        @media (hover: hover) {
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
        }
        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back { transform: rotateY(180deg); }

        .crop-tick {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: var(--sa-brass);
        }
      `}</style>

      <div className="team-section-scope">
        {/* faint blueprint grid backdrop */}
        <div className="team-blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{ background: "rgba(168,127,74,0.16)" }}
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{ background: "rgba(20,23,31,0.08)" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="team-header-reveal sa-mono inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.25em]"
              style={{
                borderColor: "var(--sa-brass)",
                color: "var(--sa-brass)",
                background: "rgba(168,127,74,0.08)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--sa-brass)" }}
              />
              Team Dossier
            </div>

            <h2
              className="team-header-reveal sa-serif mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl"
              style={{ color: "var(--sa-ink)" }}
            >
              People Behind
              <br />
              <span style={{ color: "var(--sa-brass)" }}>The Vision</span>
            </h2>

            <p
              className="team-header-reveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:mt-6 sm:text-base md:text-lg"
              style={{ color: "rgba(20,23,31,0.6)" }}
            >
              Hover a card — or tap it on mobile — to open the file and read
              the full profile.
            </p>
          </div>

          {/* GRID */}
          <div className="team-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {teamMembers.map((member) => {
              const isFlipped = !!flipped[member.id];
              return (
                <div
                  key={member.id}
                  className={`team-card flip-card h-[420px] cursor-pointer sm:h-[440px] ${
                    isFlipped ? "is-flipped" : ""
                  }`}
                  onClick={() => toggleFlip(member.id)}
                >
                  <div className="flip-card-inner">
                    {/* FRONT — image only */}
                    <div
                      className="flip-card-face flip-card-front overflow-hidden rounded-2xl border shadow-xl"
                      style={{
                        borderColor: "var(--sa-line)",
                        boxShadow: "0 20px 40px rgba(20,23,31,0.18)",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[10%]"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(20,23,31,0.85) 0%, rgba(20,23,31,0.05) 45%, transparent 65%)",
                        }}
                      />

                      {/* index tag */}
                      <div
                        className="sa-mono absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] tracking-[0.15em]"
                        style={{
                          background: "rgba(20,23,31,0.55)",
                          color: "var(--sa-brass-light)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {member.code}
                      </div>

                      {/* name plate */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <div
                          className="mb-2 h-px w-10"
                          style={{ background: "var(--sa-brass-light)" }}
                        />
                        <h3 className="sa-serif text-xl font-bold text-white sm:text-2xl">
                          {member.name}
                        </h3>
                        <p
                          className="sa-mono mt-1 text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: "var(--sa-brass-light)" }}
                        >
                          {member.role}
                        </p>
                      </div>

                      <div
                        className="sa-mono absolute right-4 top-4 flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.15em]"
                        style={{
                          background: "rgba(20,23,31,0.55)",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        View <ArrowUpRight size={10} />
                      </div>
                    </div>

                    {/* BACK — full profile */}
                    <div
                      className="flip-card-face flip-card-back flex flex-col overflow-hidden rounded-2xl border p-5 sm:p-6"
                      style={{
                        background: "var(--sa-ink)",
                        borderColor: "var(--sa-brass)",
                      }}
                    >
                      {/* crop marks */}
                      <span
                        className="crop-tick left-3 top-3 border-l-2 border-t-2"
                      />
                      <span
                        className="crop-tick right-3 top-3 border-r-2 border-t-2"
                      />
                      <span
                        className="crop-tick bottom-3 left-3 border-b-2 border-l-2"
                      />
                      <span
                        className="crop-tick bottom-3 right-3 border-b-2 border-r-2"
                      />

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="sa-serif text-lg font-bold text-white sm:text-xl">
                            {member.name}
                          </h3>
                          <p
                            className="sa-mono mt-1 text-[10px] uppercase tracking-[0.15em]"
                            style={{ color: "var(--sa-brass-light)" }}
                          >
                            {member.role}
                          </p>
                        </div>
                        <span
                          className="sa-mono shrink-0 text-[10px] tracking-[0.15em]"
                          style={{ color: "var(--sa-brass)" }}
                        >
                          {member.code}
                        </span>
                      </div>

                      <div
                        className="my-4 h-px w-full"
                        style={{ background: "var(--sa-brass)" }}
                      />

                      <p className="flex-1 overflow-y-auto text-[13px] leading-relaxed text-neutral-300 sm:text-sm">
                        {member.description}
                      </p>

                      <div className="mt-4">
                        <p
                          className="sa-mono mb-2 text-[9px] uppercase tracking-[0.2em]"
                          style={{ color: "var(--sa-brass)" }}
                        >
                          Expertise
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="sa-mono rounded-full border px-2 py-0.5 text-[9px] tracking-wide text-neutral-300"
                              style={{ borderColor: "rgba(217,189,138,0.35)" }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}