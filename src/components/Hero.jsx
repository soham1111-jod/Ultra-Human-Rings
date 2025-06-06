import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = ({ buyRef }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Add bgY transform
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  
  // Existing transform values
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 20])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Combined floating and initial animation
  const combinedAnimation = {
    y: [-5, 5],
    scale: 1,
    opacity: 1,
    transition: {
      y: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      },
      scale: {
        duration: 1,
        delay: 0.8
      },
      opacity: {
        duration: 1,
        delay: 0.8
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(10px)"
    },
    visible: { 
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
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  }

  const handleBuyClick = () => {
    buyRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <motion.section 
      ref={containerRef} 
      className="relative overflow-hidden rounded-3xl h-[90vh] mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-4 pt-[15vh]">
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base text-white/90 uppercase tracking-wider mb-2"
        >
          WORLD'S MOST COMFORTABLE SLEEP TRACKER
        </motion.p>
        
        <motion.h1 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Ultrahuman Ring AIR
        </motion.h1>

        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="w-full max-w-md relative z-20"
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-purple-400 h-1 w-full rounded-full mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.button 
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleBuyClick}
            className="bg-white text-black px-8 py-3 rounded-full transition-all duration-300 font-medium"
          >
            BUY NOW
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute w-full max-w-xl mx-auto bottom-[-50px]"
          style={{ 
            y: ringY,
            scale: ringScale,
            opacity: ringOpacity,
            rotateZ: ringRotate,
            transformStyle: "preserve-3d",
            perspective: 1000
          }}
        >
          <motion.div 
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={combinedAnimation}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img 
              src="/ring1.png" 
              alt="Ultrahuman Ring"
              className="w-full h-auto drop-shadow-2xl"
              style={{ 
                willChange: "transform",
                backfaceVisibility: "hidden"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero