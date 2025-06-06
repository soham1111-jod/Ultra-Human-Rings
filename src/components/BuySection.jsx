import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { useRing } from '../context/RingContext'

const ringOptions = {
  colors: [
    { 
      id: 'titanium', 
      name: 'Raw Titanium', 
      image: 'https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders/rt2.png', 
      price: '28,499' 
    },
    { 
      id: 'black', 
      name: 'Aster Black', 
      image: 'https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders/ab2.png', 
      price: '28,499' 
    },
    { 
      id: 'grey', 
      name: 'Matte Grey', 
      image: 'https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders/mg2.png', 
      price: '28,499' 
    },
    { 
      id: 'gold', 
      name: 'Bionic Gold', 
      image: 'https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders/bg2.png', 
      price: '28,499' 
    },
    { 
      id: 'silver', 
      name: 'Space Silver', 
      image: 'https://cdn.speedsize.com/3f711f28-1488-44dc-b013-5e43284ac4b0/https://public-web-assets.uh-static.com/web_v2/ring-buy/renders/ss2.png', 
      price: '28,499' 
    }
  ],
  sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13']
}

const BuySection = forwardRef((props, ref) => {
  const { selectedRing, updateSelection } = useRing()

  const currentRingImage = ringOptions.colors.find(
    color => color.id === selectedRing.color
  )?.image

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Ring Image Display */}
          <motion.div className="relative">
            <motion.div 
              className="sticky top-20 aspect-square"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                key={selectedRing.color}
                src={currentRingImage}
                alt={`Ultrahuman Ring - ${selectedRing.color}`}
                loading="lazy"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-600 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5"/>
                  <path d="M15 12H3"/>
                </svg>
                View real life images
              </button>
            </motion.div>
          </motion.div>

          {/* Ring Configuration */}
          <div className="space-y-8">
            <div>
              <h1 className="text-display font-bold mb-2 tracking-tight">Ring AIR</h1>
              <p className="text-title font-medium">₹28,499</p>
              <p className="text-body text-gray-600 mt-2 font-normal">
                Dispatched by: Tomorrow, Jun 7 (after size selection)
              </p>
              <div className="flex items-center gap-2 text-blue-600 mt-4 text-body">
                <span className="font-medium">Get up to ₹10,000 for your trade-in</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
            </div>

            <div role="region" aria-label="Ring color selection">
              <h2 id="color-selection" className="text-title font-semibold tracking-tight">Color.</h2>
              <div 
                role="radiogroup" 
                aria-labelledby="color-selection"
                className="grid grid-cols-3 gap-4"
              >
                {ringOptions.colors.map(color => (
                  <motion.button
                    key={color.id}
                    onClick={() => updateSelection('color', color.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      selectedRing.color === color.id 
                        ? 'border-blue-500' 
                        : 'border-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    role="radio"
                    aria-checked={selectedRing.color === color.id}
                    aria-label={`Select ${color.name} color`}
                  >
                    <img 
                      src={color.image} 
                      alt={color.name}
                      loading="lazy"
                      className="w-full aspect-square object-contain mb-2"
                    />
                    <p className="text-body font-medium tracking-tight">{color.name}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <motion.button
              onClick={() => console.log('Selected Ring:', selectedRing)}
              className="w-full py-4 bg-blue-500 text-white rounded-full font-semibold text-body tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
})

BuySection.displayName = 'BuySection'

export default BuySection



