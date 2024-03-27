import React from 'react'
/*import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/arrayDestruct.jpg'
import navbar from '../assets/portfolio/arrayDestruct.jpg'
import reactParallex  from '../assets/portfolio/arrayDestruct.jpg'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'*/


const Portfolio = () => {
  return (
    <div name = 'portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Recent Works</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img 
                    src="src\assets\pexels-nandhu-kumar-17225104.jpg" 
                    alt=" maninstreet" 
                    className='rounde-md duration-200 hover:scale-105'
                    />
                    <div className=' flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
