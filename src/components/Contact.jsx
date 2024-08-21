import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    
      <div
        name="contact"
        className="flexw-full h-screen bg-gradient-to-b from-black to-gray-800 p-4  text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-lime-500 text-lime-500 my-2">
              Contact
            </p>
            <p className="py-6">Get in contact with me</p>
          </div>

          <div className="flex justify-center items-center">
            
          </div>

          <ContactForm/>
        </div>
      </div>
   
  );
};

export default Contact;
