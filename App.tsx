import { motion } from 'motion/react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  layout?: 'featured' | 'wide' | 'standard';
}

export default function BlogCard({ post, layout = 'standard' }: BlogCardProps) {
  const getCategoryColor = (category: BlogPost['category']) => {
    switch (category) {
      case 'FITNESS': return 'bg-primary-fixed text-on-primary-fixed';
      case 'NUTRITION': return 'bg-tertiary-fixed text-on-tertiary-fixed';
      case 'MENTAL HEALTH': return 'bg-secondary-fixed text-on-secondary-fixed';
      case 'LIFESTYLE': return 'bg-tertiary-fixed text-on-tertiary-fixed';
      default: return 'bg-emerald-100 text-emerald-800';
    }
  };

  if (layout === 'featured') {
    return (
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 group cursor-pointer"
      >
        <div className="bg-white rounded-xl overflow-hidden border border-emerald-50 shadow-[0_8px_30px_rgb(45,106,79,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(45,106,79,0.08)]">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 ${getCategoryColor(post.category)} text-[12px] font-bold rounded-full tracking-wider`}>
                {post.category}
              </span>
              <span className="text-outline font-manrope text-xs">{post.date}</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-4 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h2>
            {post.description && (
              <p className="text-on-surface-variant font-manrope line-clamp-2 max-w-2xl text-lg">
                {post.description}
              </p>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  if (layout === 'wide') {
    return (
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 group cursor-pointer"
      >
        <div className="bg-white flex flex-col md:flex-row h-full rounded-xl overflow-hidden border border-emerald-50 shadow-[0_8px_30px_rgb(45,106,79,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(45,106,79,0.08)]">
          <div className="md:w-1/2 overflow-hidden aspect-video md:aspect-auto">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className={`px-3 py-1 ${getCategoryColor(post.category)} text-[10px] font-bold rounded-full tracking-wider mb-4 self-start`}>
              {post.category}
            </span>
            <h3 className="font-plus-jakarta text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            {post.description && (
              <p className="text-on-surface-variant font-manrope text-sm mb-4 line-clamp-3">
                {post.description}
              </p>
            )}
            <span className="text-outline font-manrope text-xs">{post.date}</span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:col-span-4 group cursor-pointer"
    >
      <div className="bg-white h-full rounded-xl overflow-hidden border border-emerald-50 shadow-[0_8px_30px_rgb(45,106,79,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(45,106,79,0.08)]">
        <div className="aspect-square overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className={`px-3 py-1 ${getCategoryColor(post.category)} text-[10px] font-bold rounded-full tracking-wider mb-4 inline-block`}>
            {post.category}
          </span>
          <h3 className="font-plus-jakarta text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>
          <span className="text-outline font-manrope text-xs">{post.date}</span>
        </div>
      </div>
    </motion.article>
  );
}
