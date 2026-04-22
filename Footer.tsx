import { Share2, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const navLinks = ['Home', 'Fitness', 'Nutrition', 'Mental Health', 'Lifestyle', 'About'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-50 shadow-[0_4px_20px_-4px_rgba(45,106,79,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-xl font-bold text-emerald-900 tracking-tight font-plus-jakarta">
          Healthy Space
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-manrope text-sm tracking-wide font-semibold">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`transition-colors ${
                link === 'Home'
                  ? 'text-emerald-700 border-b-2 border-emerald-700 pb-1'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-emerald-800">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-emerald-50/50 rounded-full transition-all duration-300"
          >
            <Share2 size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-emerald-50/50 rounded-full transition-all duration-300"
          >
            <Globe size={20} />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
