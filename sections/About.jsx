'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Apple Vision" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span>Introducing the </span><span className="font-extrabold text-white">Apple Vision Pro</span>  
        – a groundbreaking leap into the future of immersive
         
        {' '}
        <span className="font-extrabold text-white">
        technology!
        </span>{' '}
        Immerse yourself in a world where cutting-edge innovation meets seamless functionality,as{' '}
        <span className="font-extrabold text-white">AppleVR</span> devices you can
        unveils its latest marvel in the form of the {' '}
        <span className="font-extrabold text-white">Apple Visison Pro.</span> 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
