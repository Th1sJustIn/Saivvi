"use client"
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0); 
  const [answer, setAnswer] = useState(false)
  const [q1, setq1] = useState('');
  const [q2, setq2] = useState('');
  const [q3, setq3] = useState('');


  const handleQ1 = (event: { target: { value: SetStateAction<string>; }; }) => {
    setq1(event.target.value);
  };
  const handleQ2 = (event: { target: { value: SetStateAction<string>; }; }) => {
    setq2(event.target.value);
  };
  const handleQ3 = (event: { target: { value: SetStateAction<string>; }; }) => {
    setq3(event.target.value);
  };

  const nextSection = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const Generate = () =>{
    setAnswer(true)
  }

  return (
    <div className="text-white  bg-primary bg-cover bg-center text-center flex flex-col pt-20 items-center h-screen ">
    <h1 className="text-white text-6xl font-bold ">Welcome to the <span className="text-color1">Hashtag Generator! </span> 🎉</h1>
    <h2 className=" border-4 border-secondary font-bold mx-20 md:mx-40 lg:mx-80 mt-10 py-10 text-xl rounded-2xl mb-20 ">Want to <span className="text-color2  bold">boost your social media presence?</span> Our tool creates effective hashtags to enhance your visibility and engagement. Let's get started!</h2>
  {/* <div className=" px-10 mx-10 w-screen h-80 mt-10 flex flex-row justify-around items-center text-lg font-bold flex-wrap md:flex-nowrap">

    <div className="bg-secondary h-60 w-80 rounded-md mx-10 flex justify-center items-center mb-10"><p className="px-10">Use a mix of <span className="text-color1">popular and niche hashtags</span> for the best reach.</p></div>
    <div className="bg-secondary h-60 w-80  rounded-md mx-10 flex justify-center items-center mb-10"><p className="px-10">Avoid overly long hashtags; keep them <span className="text-color1">short and memorable.</span></p></div>
    <div className="bg-secondary h-60 w-80 rounded-md mx-10 flex justify-center items-center mb-10"><p className="px-10">Research <span className="text-color1">trending hashtags</span> in your category to stay relevant.</p></div>
    <div className="bg-secondary h-60 w-80 rounded-md mx-10 flex justify-center items-center mb-10"><p className="px-10">Don’t overload your post; stick to around <span className="text-color1">5-10 hashtags</span> for optimal engagement.</p></div>

  </div>
   */}

<div className="text-center mt-10">
      {/* Display sections based on currentSection */}
      {currentSection === 0 && (
        <div>
          <h2 className="text-white px-10 font-bold text-3xl">
            What is the <span className="text-color1">main topic or theme</span> of your video?
          </h2>
          <input
            type="text"
            value={q1}
            onChange={handleQ1}
            className="mt-10 text-center text-black border-2 border-secondary rounded w-full max-w-2xl h-12 mb-10"
            placeholder="Enter response here..."
          />
        </div>
      )}
      {currentSection === 1 && (
        <div>
          <h2 className="text-white px-10 font-bold text-3xl">Who is your <span className="text-color1">target audience?</span></h2>
          <input
            type="text"
            value={q2}
            onChange={handleQ2}
            className="mt-10 text-center text-black border-2 border-secondary rounded w-full max-w-2xl h-12 mb-10"
            placeholder="Enter response here..."
          />
        </div>
      )}
      {currentSection === 2 && (
        <div>
        <h2 className="text-white font-bold px-10 text-3xl">What <span className="text-color1">niche</span> does your video primarily target?</h2>
          <input
            type="text"
            value={q3}
            onChange={handleQ3}
            className="mt-10 text-center text-black border-2 border-secondary rounded w-full max-w-2xl h-12 mb-10"
            placeholder="Enter response here..."
          />
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mb-40 h-s">
        {currentSection > 0 && (
          <button onClick={prevSection} className="mr-4 text-white bg-secondary hover:bg-color1 rounded px-4 py-2">
            Previous
          </button>
        )}
        {currentSection < 2 ? (
          <button onClick={nextSection} className="text-white bg-secondary hover:bg-color1 rounded px-4 py-2">
            Next
          </button>
        ) : (
          <button onClick={Generate} className="text-white bg-color2 hover:bg-color1 rounded px-4 py-2">
            Generate
          </button>
        )}
      </div>
    </div>
      
      {answer && (
        <div>
          <p>{q1}</p>
          <p>{q2}</p>
          <p>{q3}</p>
        </div>
      )}

  </div>
  );
}
