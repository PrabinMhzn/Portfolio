import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold underline text-lime-500">About</p>
        </div>
        <div></div>
        <p className="text-xl mt-8 ">
          Hi ! I'm{" "}
          <span className="uppercase underline text-lime-300 font-medium text-2xl hover:cursor-pointer">
            Prabin Maharjan
          </span>
          , a passionate Web developer based in Brisbane. Holding a Master's in
          Technology from Federation University, I excel in creating visually
          stunning and user-friendly web applications using HTML, CSS,
          JavaScript, and modern front-end frameworks like React and Next.Js.
        </p>
        <p className="text-xl mt-8 ">
          My journey blends technical expertise with a keen artistic sense,
          enabling me to craft websites that are not only functional but also
          aesthetically captivating. I have experience developing entire
          projects, implementing responsive designs, and integrating features
          like Cart systems and Receipt Scanner.
        </p>
        <p className="text-xl mt-8 "></p>
        <p className="text-xl mt-8">
          Let's bring your vision to life with modern design and technology!
        </p>

        <br />
        <p className=" text-xl"></p>
      </div>
    </div>
  );
};

export default About;
