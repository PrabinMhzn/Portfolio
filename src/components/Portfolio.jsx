import React from 'react'
import bluesee from '../assets/portfolio/bluesee.jpg'
import color from '../assets/portfolio/color.jpg'
import flower from '../assets/portfolio/flower.jpg'
import junction from '../assets/portfolio/junction.jpg' 
import pattaya from '../assets/portfolio/pattaya.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src : bluesee
        },
        {
            id: 2,
            src : color
        },
        {
            id: 3,
            src : flower
        },
        {
            id: 4,
            src : junction
        },
        {
            id: 5,
            src : pattaya
        },
    ]
  return (
    <div name ='porfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500s '>PORTFOLIO</p>
                <p className='py-6'>check out my works here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({ id, src}) =>(
                    <div key={id} className=' shadow-lg shadow-violet-600 rounded-lg '>
                    <img 
                        src={src} 
                        alt=""
                        className=' rounded-md duration-200 hover:scale-105'
                    />
                    <div className=' flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        
                    </div>
                </div>
                    
                     ) )
                }                                 
                </div>
            </div>
        </div>
      
    
  )
}

export default Portfolio
