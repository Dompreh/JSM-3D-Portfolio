import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'

import { ComputerCanvas } from './canvas'
function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`w-full absolute inset-0 top-[110px] flex flex-row  gap-5 items-start ${styles.paddingX} ${styles.maxW}`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#951eff]'>Stephen</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop 3D visuals user <br className='xs:block hidden' /> interfaces and web applications</p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] border-4  border-secondary rounded-3xl flex justify-center items-start p-2'>
            <motion.div className="w-3 h-3 rounded-full bg-secondary mb-1" animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero