import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    title: "Precision engineering at the UltraFactory",
    description: "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control.",
    icon: "/Accuracy-1.png",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "More accurate from the Finger than the Wrist",
    description: "The finger, with its higher perfusion index and arterioles, serves as a richer and more accurate source of biomarker information.",
    icon: "/Accuracy-2.png",
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Trusted by the World's #1 Ranked Cycling Team and more",
    description: "UAE Team Emirates, Team ADQ, and many other high-performance teams worldwide.",
    icon: "/Accuracy-3.png",
    gradient: "from-purple-500/10 to-transparent"
  }
]

const stats = [
  {
    value: "4-6",
    label: "Days Battery life",
    gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
    shadowColor: "shadow-blue-500/25"
  },
  {
    value: "2.4",
    label: "Grams Light",
    gradient: "bg-gradient-to-br from-amber-300 to-yellow-400",
    shadowColor: "shadow-amber-200/50"
  }
]

const AccuracySection = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 relative">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm text-gray-500 uppercase tracking-wider mb-3 font-medium"
          >
            A SUBLIME DESIGN WONDER
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            Accuracy at its core
          </motion.h2>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${stat.gradient} rounded-2xl p-8 shadow-xl`}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 space-y-6"
            >
              <img 
                src={card.icon} 
                alt={card.title} 
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccuracySection