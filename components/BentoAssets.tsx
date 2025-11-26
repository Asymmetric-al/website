'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const CircleSVG = () => {
  return (
    <motion.svg
      height='206'
      width='206'
      xmlns='http://www.w3.org/2000/svg'
      initial='hidden'
      animate='visible'
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-none'
    >
      <motion.circle
        r='101'
        cx='103'
        cy='103'
        stroke='currentColor'
        strokeOpacity='0.2'
        strokeWidth='2'
        fill='transparent'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "easeInOut"
            }
          }
        }}
      />
    </motion.svg>
  )
}

export const RippleBg = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      width='1em'
      height='1em'
      viewBox='0 0 245 241'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial='hidden'
      animate='visible'
      className={className}
    >
      <g opacity='0.3'>
        <motion.path
          d='M122.903 63.7927C154.593 63.7927 180.272 89.1874 180.272 120.501C180.272 151.814 154.592 177.208 122.903 177.208C91.2145 177.208 65.5354 151.814 65.5352 120.501C65.5352 89.1875 91.2143 63.7929 122.903 63.7927Z'
          stroke='currentColor'
          strokeOpacity='0.5'
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              scale: [1, 0.95, 1],
              opacity: 1,
              transition: {
                opacity: { duration: 1 },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }
            }
          }}
        />
        <motion.path
          d='M122.903 42.4187C166.534 42.4187 201.894 77.3828 201.894 120.501C201.893 163.619 166.533 198.582 122.903 198.582C79.2734 198.582 43.9142 163.618 43.9141 120.501C43.9141 77.3829 79.2733 42.4189 122.903 42.4187Z'
          stroke='currentColor'
          strokeOpacity='0.3'
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              scale: [1, 0.95, 1],
              opacity: 1,
              transition: {
                opacity: { duration: 1 },
                scale: { delay: 0.2, duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }
            }
          }}
        />
        <motion.path
          d='M122.904 20.4158C178.827 20.4159 224.151 65.231 224.151 120.501C224.151 175.77 178.827 220.585 122.904 220.585C66.9819 220.585 21.6574 175.77 21.6572 120.501C21.6572 65.2309 66.9818 20.4158 122.904 20.4158Z'
          stroke='currentColor'
          strokeOpacity='0.15'
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              scale: [1, 0.95, 1],
              opacity: 1,
              transition: {
                opacity: { duration: 1 },
                scale: { delay: 0.4, duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }
            }
          }}
        />
      </g>
    </motion.svg>
  )
}