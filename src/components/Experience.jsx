import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/Javascript.png'
import github from '../assets/github.png'
import tailwindcss from '../assets/tailwindcss.png'
import reactImage from '../assets/reactImage.png'

const Experience = () => {

const fworks = [
  {
    id: 1,
    src: html,
    title: 'HTML',
    style: 'shadow-orange-700'

  },
  {
    id: 2,
    src: css,
    title: 'CSS',
    style: 'shadow-blue-700'

  },
  {
    id: 3,
    src: javascript,
    title: 'JAVASCRIPT',
    style: 'shadow-yellow-500'

  },
  {
    id: 4,
    src: github,
    title: 'GITHUB',
    style: 'shadow-gray-500'

  },
  {
    id: 5,
    src: tailwindcss,
    title: 'TAILWIND',
    style: 'shadow-sky-500'

  },
  {
    id: 6,
    src: reactImage,
    title: 'REACT',
    style: 'shadow-cyan-500'

  },

]

  return (
    <div 
    name= "experience" 
    className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div 
      className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-lime-500 p-2 inline text-lime-500'>Experience</p>
          <p className='py-6'>I have experience in following frameworks: </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
          fworks.map(({id,src,title, style}) => (
          
           
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto' />
            <p>{title}</p>
          </div>
        
          ))
        }
        </div>

        
      </div>
    </div>
  )
}

export default Experience
