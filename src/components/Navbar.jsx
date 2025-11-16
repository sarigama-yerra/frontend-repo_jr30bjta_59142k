import { Menu, Music4, Play, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500 animate-pulse" />
          <span className="text-white text-lg font-semibold tracking-widest">HOLO</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "#features" },
            { label: "Stories", href: "#testimonials" },
            { label: "Pricing", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
          >
            <Download className="h-4 w-4" /> Download
          </a>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white text-sm font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-shadow"
          >
            <Play className="h-4 w-4" /> Start Listening
          </button>
          <button className="md:hidden text-white/80 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
