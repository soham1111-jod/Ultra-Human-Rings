import { motion } from 'framer-motion'

const features = [
  {
    title: "Wake up to your sleep insights",
    description: "The Sleep Index, intelligently designed to be your sole metric for sleep health, assesses...",
    image: "/sleep-graph.png",
    buttonText: "LEARN MORE"
  },
  {
    title: "Temperature tracking made easy",
    description: "Skin temperature is vital for measuring your body's physiological states and...",
    image: "/temperature-graph.png",
    buttonText: "LEARN MORE"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  show: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const buttonVariants = {
  initial: { gap: '0.5rem' },
  hover: { 
    gap: '1rem',
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const PrecisionSection = () => {
  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600"
        >
          Precision in miniature
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-gray-50/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-50 transition-all duration-500"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                  {feature.title}
                </h3>
                
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#00FF94] to-transparent"></div>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>

                <motion.button 
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-sm font-medium flex items-center"
                >
                  {feature.buttonText}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="transform -rotate-45 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>

                <div className="rounded-2xl overflow-hidden bg-black aspect-video group-hover:shadow-xl transition-all duration-500">
                  <motion.img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default PrecisionSection