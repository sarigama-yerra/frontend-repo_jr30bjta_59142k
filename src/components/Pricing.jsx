import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic streaming', 'Standard quality', 'Limited skips'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    features: ['Lossless audio', 'Unlimited skips', 'Offline downloads', 'Adaptive EQ'],
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$19.99',
    features: ['Spatial audio', 'Creator tools', 'Priority support'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Choose your vibe
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl border ${tier.highlight ? 'border-fuchsia-400/40' : 'border-white/10'} bg-white/5 p-6 backdrop-blur`}
            >
              {tier.highlight && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/15 via-violet-500/15 to-cyan-400/15 blur-xl" />
              )}
              <div className="relative z-10">
                <div className="text-white/80">{tier.name}</div>
                <div className="mt-2 text-4xl font-bold text-white">{tier.price}<span className="text-base text-white/50">/mo</span></div>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-300 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${tier.highlight ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white' : 'border border-white/15 text-white/90 hover:text-white'}`}>
                  {tier.highlight ? 'Get Pro' : 'Choose'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
