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
            src : bluesee,
            title: "Blah"
        },
        {
            id: 2,
            src : color,
             title: "Blah"
        },
        {
            id: 3,
            src : flower,
             title: "Blah"
        },
        {
            id: 4,
            src : junction,
             title: "Blah"
        },
        {
            id: 5,
            src : pattaya,
             title: "Blah"
        },
    ]
  return (
    <div name ='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen relative '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-lime-500 text-lime-500'>Portfolio</p>
                <p className='py-6'>check out my works here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({ id, src, title}) =>(
                    <div key={id} className=' shadow-lg shadow-lime-600 rounded-lg '>
                    <img 
                        src={src} 
                        alt="images"
                        className=' rounded-md duration-500 hover:scale-110 }'
                    />
                    <div className=' flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 border-lime-600 border-2 rounded-full'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 border-lime-600 border-2 rounded-full'>Code</button>
                        
                    </div>
                    <h1 className='flex justify-center my-4 text-lg  text-'>{title}</h1>
                </div>
                
                    
                     ) )
                }                                 
                </div>
            </div>
        </div>
      
    
  )
}

export default Portfolio
