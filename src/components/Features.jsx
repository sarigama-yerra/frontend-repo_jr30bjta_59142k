import { Music4, Sparkles, Waves, Headphones, Shield, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Music4,
    title: "Holographic Audio",
    desc: "Experience spatial sound with shimmering clarity and depth.",
  },
  { icon: Waves, title: "Adaptive EQ", desc: "AI optimizes the mix for your ears and environment." },
  { icon: Sparkles, title: "Neon Visualizer", desc: "Reactive visuals that pulse with every beat in real-time." },
  { icon: Headphones, title: "Lossless Streams", desc: "Pristine audio quality with zero compromise." },
  { icon: Shield, title: "Private by Design", desc: "Your listening is encrypted and stays yours alone." },
  { icon: Gauge, title: "Lightning Fast", desc: "Instant playback with edge-cached content worldwide." },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Designed for the future of sound
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 grid place-items-center text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
