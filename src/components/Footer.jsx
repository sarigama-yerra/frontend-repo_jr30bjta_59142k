import { Twitter, Instagram, Youtube, Music4 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500" />
            <span className="text-white text-sm tracking-widest">HOLO</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} HOLO. All rights reserved.</p>
      </div>
    </footer>
  );
}
