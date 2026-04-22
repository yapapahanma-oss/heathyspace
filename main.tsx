import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-50/30 border-t border-emerald-100 py-20 mt-20">
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-6 text-center">
        <div className="text-xl font-bold text-emerald-900 tracking-tight font-plus-jakarta">
          Healthy Space
        </div>
        
        <p className="text-on-surface-variant font-manrope max-w-md italic">
          Your daily guide to a healthier, more mindful life. Embrace the journey to wellness with clarity and serenity.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-emerald-800 hover:text-emerald-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-emerald-800 hover:text-emerald-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-manrope text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-600">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-600">Terms of Service</a>
          <a href="#" className="hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-600">Contact</a>
        </div>

        <p className="text-slate-400 text-xs mt-4">
          © {new Date().getFullYear()} Healthy Space. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
