import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(168,85,247,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Next-gen music streaming
          </span>
          <h1 className="mt-6 text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            HOLO
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400"> Hear the future.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A sleek, immersive experience with holographic soundscapes, crafted for audiophiles and dreamers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-[0_0_50px_rgba(99,102,241,0.45)] hover:shadow-[0_0_60px_rgba(34,211,238,0.45)] transition-shadow">
              Start Listening
            </a>
            <a href="#download" className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white/90 hover:text-white hover:border-white/25 backdrop-blur transition-colors">
              Download App
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
