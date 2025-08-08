import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LottieAnimation from '../components/LottieAnimation'
import NavBar from '../components/NavBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const IndexPage = () => {

  // track current section

  const[currentSection, setCurrentSection] = useState('section-1')
  
  // animation of text in section 2

  const controls = useAnimation()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  useEffect(() =>{
    if(inView) {
      controls.start({ x:0, opacity: 1 })
    } else {
      controls.start({ x:100, opacity: 0 })
    }
  }, [controls, inView])


  // for animation of text in section 3

  const leftControlsForText = useAnimation()

  const [leftRef, leftInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  useEffect(() => {
    if(leftInView) {
      leftControlsForText.start({ x:0, opacity:1 })
    } else {
      leftControlsForText.start({ x: -100, opacity:0 })
    }
  }, [leftInView, leftControlsForText] )

  // section tracking with Intersection Observer

  const[section1Ref, section1InView] = useInView({ threshold: 0.5 })
  const[section2Ref, section2InView] = useInView({ threshold: 0.5 })
  const[section3Ref, section3InView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (section1InView) {
      setCurrentSection('section-1')
    } else if (section2InView) {
      setCurrentSection('section-2')
    } else if (section3InView) {
      setCurrentSection('section-3')
    }
  }, [section1InView, section2InView, section3InView])

  return ( 
    <>
    <NavBar currentSection={currentSection}/>
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory bg-[url("/images/blackpurple.png")] bg-cover bg-center '> 
      <section
        ref={section1Ref}
        id='section-1'
        className="relative min-h-screen snap-start px-6 py-20 pt-20 "
      >
        <div className='relative z-10 mt-40 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10'>

          {/* Text + Buttons block */}
          <div className='max-w-2xl'>
            <h2 className='text-5xl lg:text-7xl font-bold text-white'>
              Unlock your <br /> ideas — <span className='block'>sign in now</span>
            </h2>

            {/* Buttons under text */}
            <div className='mt-8 flex gap-4'>
              <Link to="/login">
                <button className="px-6 py-3 bg-gray-300 rounded-full text-black hover:bg-gray-400 hover:text-slate-800 transition">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className='px-6 py-3 bg-purple-500 rounded-full text-white hover:bg-purple-800 transition'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>

        { /*  
          <div className='w-full max-w-[500px] h-[500px]'>
            <LottieAnimation
              src="https://lottie.host/806d4215-b4c7-489a-ab4a-3795a7626e00/e0TMUDEKFM.lottie"
              width="100%"
              height="100%"
              autoplay
              loop
            />
          </div>
        */}          

        </div>
      </section>

      <section ref={section2Ref} id='section-2' className='min-h-screen snap-start px-6 py-20 bg-yellow-200'>
        <div className='w-full max-w-6xl mx-auto flex flex-row items-center space-x-10'>
          
          {/* Left: Image */}
          <div className='flex-1'>
            <img 
              src='/images/car.png'
              alt='explore-image'
              className='w-full h-auto '
            />
          </div>

          {/* Right: Text + Button */}
          <div className='flex-1 text-black'>
            <div className='text-3xl mb-6'>
              <motion.span
              ref={ref}
                className='text-8xl font-bold block'
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.8, ease: 'easeOut'}}
                
              >
                Looking for inspiration?<br />
              </motion.span>
    
              What’s something you’ve been wanting to explore—like “quick vegan meals” or “weekend road trips”? Start your search and see where it takes you!
            </div>
            <Link to='/explore'>
              <button className='mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition'>
                Explore
              </button>
            </Link>
          </div>

        </div>
      </section>

      <section ref={section3Ref} id='section-3' className='min-h-screen snap-start px-6 py-20 bg-blue-200'>
        <div className='w-full max-w-6xl mx-auto flex flex-row items-center space-x-10'>
          <div className='flex-1 text-black'> {/*left: text*/ }
            <div className='text-3xl mb-6'>
              <motion.span
                ref={leftRef}
                className='font-bold text-8xl block'
                initial={{ x: -100, opacity: 0 }}
                animate={leftControlsForText}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Save your ideas here <br />
              </motion.span>
              Collect your favourites so you can get back to them later
            </div>
            <Link to='/explore'>
              <button className='mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition'>
                Explore
              </button>
            </Link>
          </div>
          <div className='flex-1'> {/*right: image*/ }
            <img 
              src='/images/hot.png'
              alt='explore-image'
              className='w-full h-auto '
            />
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

export default IndexPage
