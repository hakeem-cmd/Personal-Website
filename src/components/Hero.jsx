
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { 
  herobg, 
  herobg1, 
  herobg2, 
  herobg3, 
  herobg4, 
  herobg5, 
  herobg6, 
  herobg7, 
  herobg8 
} from "../assets";

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const backgroundImages = [
    herobg,    // index 0
    herobg1,   // index 1
    herobg2,   // index 2
    herobg3,   // index 3
    herobg4,   // index 4
    herobg5,   // index 5
    herobg6,   // index 6
    herobg7,   // index 7
    herobg8    // index 8
  ];

  useEffect(() => {
    // Change background every 30 seconds (30 * 1000 milliseconds)
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Background Indicator */}
      <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm">
        <div className="flex items-center gap-2">
          <span>BG: {currentBgIndex === 0 ? 'Main' : currentBgIndex}</span>
        </div>
        <div className="text-xs text-gray-300 mt-1">
          30s intervals
        </div>
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#66239c]'>Akeem Bello</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#5c527a]`}>
            I specialize in Software Engineering <br className='sm:block hidden' />
            and Data Engineering / Analysis
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
