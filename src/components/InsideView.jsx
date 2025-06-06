import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const features = [
  {
    title: "PPG Sensor",
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/inside-ring.png"
  },
  {
    title: "6-Axis Motion Sensor",
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/inside-ring.png"
  },
  {
    title: "Hypoallergenic Smooth Inner Shell",
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/inside-ring.png"
  },
  {
    title: "Strong From The Outside",
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    image: "/inside-ring.png"
  }
]

const textVariants = {
  enter: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  center: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    filter: "blur(10px)",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const imageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
}

const InsideView = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section 
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Mobile View */}
        <div className="md:hidden">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-3xl font-bold mb-12"
          >
            Beautiful from the inside
          </motion.h2>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="space-y-6"
              >
                <div className="relative">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#00FF94] text-black text-xs px-4 py-2 rounded-full font-medium">
                      PPG SENSORS
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#00FF94] to-transparent"></div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Split Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-20">
          <motion.div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl font-bold"
            >
              Beautiful from the inside
            </motion.h2>
            <div className="relative h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={textVariants}
                  className="absolute w-full space-y-6"
                >
                  <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                    {features[currentSlide].title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#00FF94] to-transparent"></div>
                  <p className="text-gray-600">
                    {features[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <motion.div 
                className="absolute bottom-0 flex gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {features.map((_, index) => (
                  <motion.div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide ? 'w-8 bg-gradient-to-r from-[#00FF94] to-emerald-300' : 'w-2 bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="sticky top-20 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src="/inside-ring.png"
                  alt="Ultrahuman Ring Inside"
                  className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                />
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="bg-[#00FF94] text-black text-xs px-4 py-2 rounded-full font-medium backdrop-blur-sm">
                    PPG SENSORS
                  </span>
                </motion.div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default InsideView