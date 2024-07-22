import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPortfolios(data))
      .catch(error => console.error("Error fetching portfolio data:", error));
  }, []);

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-lime-500 text-lime-500">
            Portfolio
          </p>
          <p className="py-4">Check out my works here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-lg shadow-lime-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg duration-500 hover:scale-105"
              />
              <div className="flex items-center justify-center p-4">
                <button
                  onClick={() => handleButtonClick(demoUrl)}
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 border-lime-600 border-2 rounded-full"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleButtonClick(codeUrl)}
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 border-lime-600 border-2 rounded-full"
                >
                  Code
                </button>
              </div>
              <h1 className="text-center my-2 text-lg">{title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
