import React from 'react';
import countUp from 'react-countup';
import { InView, useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import CountUp from 'react-countup';

const About = () => {

  const [ref , inView] = useInView({
    threshold : 0.5,
  })
  return(
     <div id='about' className='mt-20 section' ref={ref}>
    <div className='container mx-auto'>
      <motion.div
      variants={fadeIn('right' , 0.3)} 
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false , amount : 0.3 }}
       className='flex flex-col gap-y-10  lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-0 h-screen'>
{/* img */}
      {/* <div className='flex-1 bg-about bg-contain bg-no-repeat
      h-[640px] mix-blend-lighten bg-top'>      </div> */}

{/* text */}
      <motion.div 
 variants={fadeIn('left' , 0.2)} 
 initial='hidden' 
 whileInView={'show'}
   
      className='flex-1 '>
        <h1 className='h2 text-accent'>
          About me.
        </h1>
        <h3 className='h3 mb-4 '>I'm Aswanth V R, a B.Tech student majoring in Artificial Intelligence and Data Science at Sri Krishna College of Technology</h3>

        <p className='mb-10'>
 I'm a dedicated full-stack developer and data analyst with a passion for crafting seamless web experiences and extracting insights from data.
         Technology's dynamic nature captivates me, and I thrive on challenges, constantly expanding my skill set through continuous learning. Excited about the future of tech, I invite you to explore my portfolio and connect for discussions or potential collaborations. 
        </p>

        {/* stats */}
        <div className='flex gap-x-6 lg:gap-x-10'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {
             inView ?
             <CountUp start={0} end={5} duration={4} />:null 
            }+
            </div>
            <div className='font-primary text-sm tracking-[2px]'> Projects</div>
          </div>

          
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             {
             inView ?
             <CountUp start={0} end={10} duration={4} />:null
            }+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>Technical Skills</div>
          </div>

         
        </div>

        <div className='flex mt-8 gap-x-8 items-center '>
          <button className='btn btn-lg'>Contact me</button>
          <a href='#' className='text-gradient btn-link'>Resume</a>
        </div>
      </motion.div>
      
      
      </motion.div>

      </div>  
     </div>
     );
};

export default About;
