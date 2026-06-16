import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Flame, Wind, Trophy, Sparkles } from 'lucide-react';

const products = [
  {
    id: 'classic',
    name: 'Aamrit Classic Alphonso',
    tagline: 'The Original Golden Nectar',
    description: 'Thick, luscious, and velvety smooth, crafted with 100% pure Alphonso mangoes. It is a timeless tropical indulgence that defines our brand.',
    price: '$6.49',
    volume: '350ml',
    image: '/images/hero_bottle.png',
    badge: 'Best Seller',
    badgeIcon: Trophy,
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    bgSolid: 'rgba(255, 149, 0, 0.08)',
    accent: '#FF9500',
    ingredients: '100% Organic Alphonso Mango Pulp, Natural Spring Water, Lemon Juice Concentrates.',
    nutritionHighlights: { calories: 120, sugar: '23g', vitaminC: '133%' }
  },
  {
    id: 'mint',
    name: 'Aamrit Mango Mint',
    tagline: 'Exotic Minty Cool Splash',
    description: 'A refreshing fusion of rich Alphonso pulp combined with fresh wild spearmint essence and fresh lime juice. The perfect, cooling summer splash.',
    price: '$6.99',
    volume: '350ml',
    image: '/images/product_mint.png',
    badge: 'New Blend',
    badgeIcon: Wind,
    gradient: 'from-mango-300/10 via-forest-300/5 to-transparent',
    bgSolid: 'rgba(61, 125, 79, 0.08)',
    accent: '#3D7D4F',
    ingredients: 'Organic Alphonso Mango Pulp, Wild Mint Extracted Essences, Fresh Lime Juice, Spring Water.',
    nutritionHighlights: { calories: 115, sugar: '21g', vitaminC: '140%' }
  },
  {
    id: 'spiced',
    name: 'Aamrit Spiced Mango',
    tagline: 'Zesty Chili & Cinnamon Spice',
    description: 'A traditional Indian botanical fusion of sweet Alphonso mango nectar with a delicate, fiery hint of red chili flakes and organic cinnamon bark.',
    price: '$6.99',
    volume: '350ml',
    image: '/images/product_spiced.png',
    badge: 'Artisanal Spiced',
    badgeIcon: Flame,
    gradient: 'from-orange-500/10 via-red-500/5 to-transparent',
    bgSolid: 'rgba(236, 122, 8, 0.08)',
    accent: '#EC7A08',
    ingredients: 'Organic Alphonso Mango Pulp, Hand-ground Red Chili Flakes, Organic Cinnamon Bark, Himalayan Rock Salt.',
    nutritionHighlights: { calories: 125, sugar: '22g', vitaminC: '130%' }
  },
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="flavors" className="py-32 bg-cream-100 bg-grid-pattern relative overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-[25%] right-[5%] w-[600px] h-[600px] bg-mango-200/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-forest-100/15 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-bold uppercase tracking-widest text-forest-600 bg-forest-100/60 py-1 px-4 rounded-full inline-block"
          >
            Aamrit Collections
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-bronze-900 leading-[1.15]"
          >
            Explore Our Signature <br />
            <span className="text-gradient-mango font-black">Flavor Profiles</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-base sm:text-lg text-bronze-600 max-w-xl mx-auto leading-relaxed font-light"
          >
            Indulge in our carefully curated botanical and spice-infused pure mango juice blends.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Interactive Product Cards Selector */}
          <div className="lg:col-span-5 space-y-6">
            {products.map((product) => {
              const BadgeIcon = product.badgeIcon;
              const isSelected = selectedProduct.id === product.id;
              
              return (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-white border-mango-400 shadow-md ring-4 ring-mango-400/10'
                      : 'bg-white/50 border-cream-200 hover:bg-white hover:border-cream-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    {/* Bottle thumbnail with dynamic rotate */}
                    <div className="w-20 h-20 rounded-2xl bg-cream-50/50 p-2.5 flex items-center justify-center border border-cream-200/50 relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-5 transition-colors duration-300 group-hover:opacity-10"
                        style={{ backgroundColor: product.accent }}
                      />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative z-10"
                      />
                    </div>
                    
                    {/* Information panel */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-forest-600">
                          {product.volume} &bull; {product.price}
                        </span>
                        {product.badge && (
                          <span
                            className="inline-flex items-center space-x-1 font-display text-[9px] font-bold uppercase tracking-wider py-0.5 px-2 rounded-full border"
                            style={{
                              borderColor: `${product.accent}30`,
                              color: product.accent,
                              backgroundColor: `${product.accent}10`,
                            }}
                          >
                            <BadgeIcon size={10} />
                            <span>{product.badge}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-bronze-900 group-hover:text-mango-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-display text-xs text-bronze-500 font-light leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High End Interactive Detailed Product Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-cream-200/60 bg-gradient-to-br ${selectedProduct.gradient} shadow-xl backdrop-blur-md relative overflow-hidden`}
              >
                {/* Dynamic colored background light circle that scales up */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full filter blur-[50px] pointer-events-none z-0"
                  style={{ backgroundColor: `${selectedProduct.accent}20` }}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Text details */}
                  <div className="md:col-span-7 space-y-6 order-2 md:order-1 text-center md:text-left">
                    <div className="space-y-3">
                      <div className="inline-flex items-center space-x-1 font-display text-[10px] font-bold text-forest-600 uppercase tracking-widest bg-forest-100/60 py-0.5 px-3 rounded-full border border-forest-200/40">
                        <Sparkles size={10} />
                        <span>Artisanal Recipe</span>
                      </div>
                      
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-bronze-900 leading-tight">
                        {selectedProduct.name}
                      </h3>
                      
                      <p className="font-display text-sm text-mango-700 font-semibold italic">
                        "{selectedProduct.tagline}"
                      </p>
                    </div>

                    <p className="font-display text-sm sm:text-base text-bronze-700 leading-relaxed font-light">
                      {selectedProduct.description}
                    </p>

                    {/* Ingredients card */}
                    <div className="p-5 rounded-2xl bg-white/80 border border-white/60 space-y-2 text-left shadow-sm">
                      <h4 className="font-display text-xs font-bold text-bronze-900 uppercase tracking-wider">
                        Key Ingredients:
                      </h4>
                      <p className="font-display text-xs sm:text-sm text-bronze-600 leading-relaxed font-light">
                        {selectedProduct.ingredients}
                      </p>
                    </div>

                    {/* Flavor profile metrics highlights */}
                    <div className="grid grid-cols-3 gap-4 text-center py-2">
                      <div className="p-3 bg-white/50 rounded-xl border border-cream-200/40">
                        <span className="font-display text-[10px] text-bronze-500 uppercase block">Energy</span>
                        <span className="font-display text-sm font-bold text-bronze-800">{selectedProduct.nutritionHighlights?.calories || 0} kcal</span>
                      </div>
                      <div className="p-3 bg-white/50 rounded-xl border border-cream-200/40">
                        <span className="font-display text-[10px] text-bronze-500 uppercase block">Sugar</span>
                        <span className="font-display text-sm font-bold text-bronze-800">{selectedProduct.nutritionHighlights?.sugar || '0g'}</span>
                      </div>
                      <div className="p-3 bg-white/50 rounded-xl border border-cream-200/40">
                        <span className="font-display text-[10px] text-bronze-500 uppercase block">Vit C DV</span>
                        <span className="font-display text-sm font-bold text-bronze-800">{selectedProduct.nutritionHighlights?.vitaminC || '0%'}</span>
                      </div>
                    </div>

                    {/* Pricing details */}
                    <div className="flex items-center justify-between pt-6 border-t border-cream-200/40">
                      <div>
                        <span className="font-display text-xs text-bronze-500 uppercase block">
                          Price
                        </span>
                        <span className="font-display text-3xl font-extrabold text-bronze-900">
                          {selectedProduct.price}
                        </span>
                      </div>

                      <button
                        className="flex items-center space-x-2 text-white font-display font-semibold py-3.5 px-7 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0"
                        style={{
                          background: `linear-gradient(135deg, ${selectedProduct.accent} 0%, #2C1B0F 180%)`
                        }}
                      >
                        <ShoppingCart size={18} />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottle Display with Custom Entrance Slide */}
                  <div className="md:col-span-5 order-1 md:order-2 flex items-center justify-center min-h-[300px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                      transition={{ type: 'spring', stiffness: 60, damping: 14 }}
                      className="w-[180px] sm:w-[220px] h-auto drop-shadow-[0_20px_45px_rgba(44,27,15,0.25)] relative"
                    >
                      {/* Interactive floating particles behind the bottle */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-auto object-contain select-none"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
