import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ava Reynolds',
    role: 'Audio Engineer',
    quote:
      'The depth and clarity are unreal. HOLO is the closest I have felt to a live performance in headphones.',
  },
  {
    name: 'Kai Nakamura',
    role: 'Producer',
    quote:
      'The adaptive EQ is magic. I can hear layers I missed before — it feels like an upgrade to my ears.',
  },
  {
    name: 'Nova Lee',
    role: 'DJ',
    quote:
      'The visualizer is hypnotic in the best way. It makes every listening session an experience.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Loved by creators and audiophiles
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative z-10">
                <p className="text-white/80">“{t.quote}”</p>
                <div className="mt-6 text-sm text-white/60">{t.name} • {t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
