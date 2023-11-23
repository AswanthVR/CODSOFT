import React from 'react';
import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Services = () => {

  const data = [
    {
      name:'HTML',
      level:'90',
      src:"https://img.icons8.com/color/144/html-5--v1.png"
    },
    {
      name:'CSS',
      level:'90',
      src:"https://img.icons8.com/color/240/css3.png"
    },
    {
      name:'JAVA SCRIPT',
      level:'60',
      src:"https://img.icons8.com/color/144/javascript--v1.png"
    },
    {
      name:'REACT JS',
      level:'90',
      src:'https://img.icons8.com/color/144/react-native.png'
    },
    {
      name:'TAILWIND',
      level:'90',
      src:'https://img.icons8.com/color/144/tailwindcss.png'
    },
    {
      name:'MySQL',
      level:'80',
      src:'https://img.icons8.com/color/144/mysql-logo.png'
    },
    {
      name:'SPRING BOOT',
      level:'80',
      src:'https://img.icons8.com/color/144/spring-logo.png'
    },
    {
      name:'SELENIUM',
      level:'75',
      src:'https://img.icons8.com/color/144/selenium-test-automation.png'
    },
    {
      name:'GIT',
      level:'75',
      src:'https://img.icons8.com/color/144/git.png'
    },
    {
      name:'AWS',
      src:'https://img.icons8.com/color/144/amazon-web-services.png',
      level:'60'
    },

  ]

  const Lang = [
    {
      name:'C++',
      level:'60',
      src:'https://img.icons8.com/color/144/c-plus-plus-logo.png'
    },
    {
      name :'JAVA',
      level:'85',
      src:'https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png'
    },
    {name:"PYTHON",
    level:'50',
    src:'https://img.icons8.com/color/144/python--v1.png'
  },

  ]

  return(
    <div className='min-h-[85vh] lg:min-h[78vh] section' id='skills'>
      <div className=' mt-36 lg:mt-80 container mx-auto'>
        <motion.h1 
         variants={fadeIn('up' , 0.2)} 
         initial='hidden' 
         whileInView={'show'}
        viewport={{once:false , amount : 0.7 }}
        
        className='h2 text-accent'>
          MY SKILLS
        </motion.h1>

<div>
        <motion.div 
         variants={fadeIn('left' , 0.3)} 
         initial='hidden' 
         whileInView={'show'}
          viewport={{once:false , amount : 0.7 }}
        className='grid lg:grid-cols-5'>
          {data.slice(0,5).map((item, index) => (
            <div key={index} className='rounded-md lg:p-5 lg:m-6   lg:shadow-xl hover:shadow-2xl space-y-9 lg:space-y-0'>
              <div className=' items-center justify-center hidden lg:flex'>
                {item.src ? (
                  <img width="100" height="100" src={item.src} alt={item.name} />
                ) : (
                  // Use your existing SVG code here
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    {/* ... (your existing SVG path) */}
                  </svg>
                )}
              </div>

              {/* bar */}
              <div className='flex flex-row space-x-4'>
                <h1 className='flex justify-center items-center font-tertiary text-xs w-1/3'>{item.name}</h1>
                <div className="mt-[4px] h-1 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-full">
                  <div style={{ width: `${item.level}%` }} className="h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </motion.div>
        <motion.div 
         variants={fadeIn('right' , 0.4)} 
         initial='hidden' 
         whileInView={'show'}
          viewport={{once:false , amount : 0.7 }}
        className='grid lg:grid-cols-5'>
          {data.slice(5,).map((item, index) => (
            <div key={index} className='rounded-md lg:p-5 lg:m-6   lg:shadow-xl hover:shadow-2xl space-y-9 lg:space-y-0'>
              <div className=' items-center justify-center hidden lg:flex'>
                {item.src ? (
                  <img width="100" height="100" src={item.src} alt={item.name} />
                ) : (
                  // Use your existing SVG code here
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    {/* ... (your existing SVG path) */}
                  </svg>
                )}
              </div>

              {/* bar */}
              <div className='flex flex-row space-x-4'>
                <h1 className='flex justify-center items-center font-tertiary text-xs w-1/3'>{item.name}</h1>
                <div className="mt-[4px] h-1 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-full">
                  <div style={{ width: `${item.level}%` }} className="h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </motion.div>
</div>


        {/* lang */}
        <motion.h1 className='h2 text-accent mt-10'
        variants={fadeIn('right' , 0.6)} 
         initial='hidden' 
         whileInView={'show'}
          viewport={{once:false , amount : 0.7 }}>
         PROGRAMMING LANGUAGES
        </motion.h1>

        <motion.div 
          variants={fadeIn('right' , 0.6)} 
          initial='hidden' 
          whileInView={'show'}
           viewport={{once:false , amount : 0.7 }}
        
        className='grid lg:grid-cols-3'>

          {Lang.map((item, index) => (
            <div key={index} className='rounded-md lg:p-5 lg:m-6   lg:shadow-xl hover:shadow-2xl space-y-9 lg:space-y-0'>
              <div className=' items-center justify-center hidden lg:flex'>
                {item.src ? (
                  <img width="100" height="100" src={item.src} alt={item.name} />
                ) : (
                  // Use your existing SVG code here
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    {/* ... (your existing SVG path) */}
                  </svg>
                )}
              </div>

              {/* bar */}
              <div className='flex flex-row space-x-4'>
                <h1 className='justify-center items-center font-tertiary text-xs w-1/3'>{item.name}</h1>
                <div className="mt-[10px] h-1 w-2/3 bg-neutral-200 dark:bg-neutral-600 rounded-full">
                  <div style={{ width: `${item.level}%` }} className="h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </motion.div>

 
      </div>
    </div>
  );
};

export default Services;