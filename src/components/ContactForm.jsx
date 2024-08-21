import React from 'react'

const ContactForm = () => {
  return (
    
    <div className='flex justify-center items-center'>
    <form action="https://getform.io/f/pbnvqlnb" method='POST' className='flex flex-col w-full md:w-1/2'>
        <input type="text" name='name' placeholder='Enter Name' className='p-2 bg-transparent border-2 border-lime-400 rounded-md text-white focus:outline-none' />
        <input type="text" name='email' placeholder='Enter email' className='p-2 my-4 bg-transparent border-2  border-lime-400 rounded-md text-white focus:outline-none' />

        <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2  border-lime-400 rounded-md text-white focus:outline-none'></textarea>

        <button className='text-white bg-gradient-to-b from-cyan-500 to-lime-600 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300 '> Let's Connect</button>
    </form>
</div>
  )
}

export default ContactForm
